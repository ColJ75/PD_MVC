using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Website.Data;
using Website.Models;
using Website.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace Website.Controllers
{
	public class CMSController : Controller
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<ApplicationUser> _userManager;

		public CMSController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
		{
			_context = context;
			_userManager = userManager;
		}

		// GET: CMSPages
		[Authorize("CMS Edit")]
		public IActionResult Index()
		{
			var q = from p in _context.CMSPage
					where p.Status != Core.Enums.CMS.PageStatus.Deleted
					select new CMSViewModel() { Page = p };
			IEnumerable<CMSViewModel> list = q;

			return View(list);
		}

		// GET: CMS/Render/Url
		public IActionResult Render(string url)
		{
			if (url == null && HttpContext.Items["CMSUrl"] != null) url = (string)HttpContext.Items["CMSUrl"];
			if (url == null) return NotFound();

			// find the page and get the current content
			var q = from p in _context.CMSPage.Where(p => p.Url == url && p.Status == Core.Enums.CMS.PageStatus.Active)
					from v in _context.CMSPageVersion.Where(v => v.VersionId == p.VersionId && v.Status == 1).DefaultIfEmpty()
					select new
					{
						PageId = p.PageId,
						Title = p.Title,
						Content = v.Content
					};
			var page = q.FirstOrDefault();
			if (page == null) return NotFound();

			// build view model
			CMSRenderViewModel model = new CMSRenderViewModel()
			{
				PageId = page.PageId,
				Title = page.Title,
				Content = page.Content
			};

			// set the view to render, or if the user has the CMS edit claim then set to the editor view
			string view = (HttpContext.User.HasClaim(c => c.Type == "CMS" && c.Value == "Edit")) ? "Editor" : "Render";

			// if the url was passed in via the context, use the render view, otherwise show the detail view
			return View(view, model);
		}

		[Route("CMS/Render/{Url}")]
		[Authorize("CMS Edit")]
		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Render(string url, [Bind("PageId,Content")] CMSPageVersion cmsPageVersion, [Bind("PageId")] CMSPageHistory cmsPageHistory)
		{
			if (url == null && HttpContext.Items["CMSUrl"] != null) url = (string)HttpContext.Items["CMSUrl"];
			if (url == null) return NotFound();

			var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.Url == url);
			if (cmsPage == null) return NotFound();

			// check if the content has changed from the last active version - if not then don't do anything
			var testVersion = (cmsPage.VersionId != null && cmsPage.VersionId > 0) ? await _context.CMSPageVersion.SingleOrDefaultAsync(v => v.VersionId == cmsPage.VersionId) : null;
			if (testVersion == null || cmsPageVersion.Content != testVersion.Content)
			{
				// add the new content version to the database
				cmsPageVersion.Status = 1;
				_context.Add(cmsPageVersion);

				// write changes to the database
				await _context.SaveChangesAsync();

				// get current user id
				string userId = _userManager.GetUserId(User);

				// add the history item for this update
				cmsPageHistory.VersionId = cmsPageVersion.VersionId;
				cmsPageHistory.Title = cmsPage.Title;
				cmsPageHistory.Url = cmsPage.Url;
				cmsPageHistory.Status = cmsPage.Status;
				cmsPageHistory.ModifiedBy = userId;
				cmsPageHistory.ModifiedDate = DateTime.Now;
				_context.Add(cmsPageHistory);

				// update page info to reflect the update
				cmsPage.VersionId = cmsPageVersion.VersionId;
				cmsPage.ModifiedBy = cmsPageHistory.ModifiedBy;
				cmsPage.ModifiedDate = cmsPageHistory.ModifiedDate;
				_context.Update(cmsPage);

				// write changes to the database
				await _context.SaveChangesAsync();
			}

			// reload the page
			return Redirect("/" + url);
		}

		// GET: CMS/Create
		[Authorize("CMS Edit")]
		public IActionResult Create()
		{
			return View();
		}

		// POST: CMS/Create
		[HttpPost]
		[Authorize("CMS Edit")]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create([Bind("Url,Title")] CMSPage cmsPage)
		{
			if (ModelState.IsValid)
			{
				// get current user id
				string userId = _userManager.GetUserId(User);

				// update page properties
				cmsPage.Status = Core.Enums.CMS.PageStatus.Active;
				cmsPage.ModifiedBy = userId;
				cmsPage.ModifiedDate = DateTime.Now;
				cmsPage.VersionId = null;
				_context.Add(cmsPage);

				// write changes to the database
				await _context.SaveChangesAsync();

				// update sitemap.json
				Core.Sitemap.Rebuild(_context);

				// redirect back to page list
				return RedirectToAction("Index");
			}
			return View(cmsPage);
		}

		// GET: CMS/Edit/Url
		[Route("CMS/Edit/{PageId}")]
		[Authorize("CMS Edit")]
		public async Task<IActionResult> Edit(int pageId)
		{
			var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.PageId == pageId);
			if (cmsPage == null) return NotFound();

			// build view model incorporating history and versions
			CMSViewModel model = new CMSViewModel() { Page = cmsPage };
			var q = from h in _context.CMSPageHistory
					join u in _context.Users on h.ModifiedBy equals u.Id
					where h.PageId == cmsPage.PageId
					orderby h.ModifiedDate descending
					select new CMSPageHistoryViewModel()
					{
						ItemId = h.ItemId,
						PageId = h.PageId,
						Status = h.Status,
						Title = h.Title,
						Url = h.Url,
						ModifiedDate = h.ModifiedDate,
						ModifiedBy = h.ModifiedBy,
						ModifiedByName = string.Format("{0} {1}", u.FirstName, u.LastName),
						VersionId = h.VersionId
					};
			model.History = await q.ToListAsync();
			model.Versions = await _context.CMSPageVersion.Where(p => p.PageId == cmsPage.PageId && p.Status == 1).OrderByDescending(v => v.VersionId).ToListAsync();
			model.Content = model.Versions.Count() > 0 ? model.Versions.OrderByDescending(v => v.VersionId).First().Content : string.Empty;

			// if the url was passed in via the context, use the render view, otherwise show the detail view
			return View(model);
		}

		// POST: CMS/Save/PageId
		[Route("CMS/Save/{PageId}")]
		[Authorize("CMS Edit")]
		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Save(int pageId)
		{
			var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.PageId == pageId);
			if (cmsPage == null) return NotFound();

			// check if anything has changed, and if everything looks ok
			if (ModelState.IsValid && (
					cmsPage.Title != Request.Form["Page.Title"]
					|| cmsPage.Url != Request.Form["Page.Url"]
					|| cmsPage.Status != (Core.Enums.CMS.PageStatus)int.Parse(Request.Form["Page.Status"])
				))
			{
				try
				{
					cmsPage.Title = Request.Form["Page.Title"];
					cmsPage.Url = Request.Form["Page.Url"];
					cmsPage.Status = (Core.Enums.CMS.PageStatus)int.Parse(Request.Form["Page.Status"]);
					cmsPage.ModifiedDate = DateTime.Now;
					_context.Update(cmsPage);

					// add the history item for this update
					CMSPageHistory cmsPageHistory = new CMSPageHistory();
					cmsPageHistory.VersionId = cmsPage.VersionId;
					cmsPageHistory.PageId = cmsPage.PageId;
					cmsPageHistory.Title = cmsPage.Title;
					cmsPageHistory.Url = cmsPage.Url;
					cmsPageHistory.Status = cmsPage.Status;
					cmsPageHistory.ModifiedBy = _userManager.GetUserId(User);
					cmsPageHistory.ModifiedDate = DateTime.Now;
					_context.Add(cmsPageHistory);

					// write changes to the database
					await _context.SaveChangesAsync();
				}
				catch (DbUpdateConcurrencyException)
				{
					if (!CMSPageExists(cmsPage.Url)) return NotFound();
					else throw;
				}

				// update sitemap.json
				Core.Sitemap.Rebuild(_context);

				return RedirectToAction("Index");
			}

			// if we're still here then something is wrong, so build the view model incorporating history and versions
			CMSViewModel model = new CMSViewModel() { Page = cmsPage };
			var q = from h in _context.CMSPageHistory
					join u in _context.Users on h.ModifiedBy equals u.Id
					where h.PageId == cmsPage.PageId
					orderby h.ModifiedDate descending
					select new CMSPageHistoryViewModel()
					{
						ItemId = h.ItemId,
						PageId = h.PageId,
						Status = h.Status,
						Title = h.Title,
						Url = h.Url,
						ModifiedDate = h.ModifiedDate,
						ModifiedBy = h.ModifiedBy,
						ModifiedByName = string.Format("{0} {1}", u.FirstName, u.LastName),
						VersionId = h.VersionId
					};
			model.History = await q.ToListAsync();
			model.Versions = await _context.CMSPageVersion.Where(p => p.PageId == cmsPage.PageId && p.Status == 1).OrderByDescending(v => v.VersionId).ToListAsync();
			model.Content = model.Versions.Count() > 0 ? model.Versions.OrderByDescending(v => v.VersionId).First().Content : string.Empty;
			model.Page.Title = Request.Form["Page.Title"];
			model.Page.Url = Request.Form["Page.Url"];
			model.Page.Status = (Core.Enums.CMS.PageStatus)int.Parse(Request.Form["Page.Status"]);

			// if the url was passed in via the context, use the render view, otherwise show the detail view
			return View("Edit", model);
		}

		// GET: CMS/UseVersion
		[Route("CMS/UseVersion/{PageId}/{Id}")]
		[Authorize("CMS Edit")]
		public async Task<IActionResult> UseVersion(int pageId, int id)
		{
			CMSPage cmsPage = _context.CMSPage.SingleOrDefault(p => p.PageId == pageId);
			if (cmsPage == null) return NotFound();

			try
			{
				// get current user id
				string userId = _userManager.GetUserId(User);

				// update page to reflect version change
				cmsPage.ModifiedBy = userId;
				cmsPage.ModifiedDate = DateTime.Now;
				cmsPage.VersionId = id;
				_context.Update(cmsPage);

				// add the history item for this update
				CMSPageHistory cmsPageHistory = new CMSPageHistory()
				{
					PageId = pageId,
					VersionId = (int)cmsPage.VersionId,
					Title = cmsPage.Title,
					Url = cmsPage.Url,
					Status = cmsPage.Status,
					ModifiedBy = userId,
					ModifiedDate = DateTime.Now
				};
				_context.Add(cmsPageHistory);

				// write changes to the database
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!CMSPageExists(cmsPage.Url)) return NotFound();
				else throw;
			}
			return RedirectToAction("Edit", new { url = cmsPage.Url });
		}

		// GET: CMS/ArchiveVersion
		[Route("CMS/ArchiveVersion/{PageId}/{Id}")]
		[Authorize("CMS Edit")]
		public async Task<IActionResult> ArchiveVersion(int pageId, int id)
		{
			CMSPage cmsPage = _context.CMSPage.SingleOrDefault(p => p.PageId == pageId);
			if (cmsPage == null) return NotFound();

			CMSPageVersion cmsPageVersion = _context.CMSPageVersion.SingleOrDefault(p => p.PageId == pageId && p.VersionId == id);
			if (cmsPageVersion == null) return NotFound();

			try
			{
				// update status to reflect change
				cmsPageVersion.Status = 0;
				_context.Update(cmsPageVersion);

				// write changes to the database
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!CMSPageVersionExists(cmsPageVersion.PageId, cmsPageVersion.VersionId)) return NotFound();
				else throw;
			}
			return RedirectToAction("Edit", new { url = cmsPage.Url });
		}

		// GET: CMS/Delete/Url
		[Route("CMS/Delete/{PageId}")]
		[Authorize("CMS Edit")]
		public async Task<IActionResult> Delete(int pageId)
		{
			var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.PageId == pageId);
			if (cmsPage == null) return NotFound();

			return View(cmsPage);
		}

		// POST: CMS/Delete/Url
		[Route("CMS/Delete/{PageId}")]
		[Authorize("CMS Edit")]
		[HttpPost, ActionName("Delete")]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> DeleteConfirmed(int pageId)
		{
			var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.PageId == pageId);
			cmsPage.Status = Core.Enums.CMS.PageStatus.Deleted;
			//_context.CMSPage.Remove(cmsPage);

			// add the history item for this update
			CMSPageHistory cmsPageHistory = new CMSPageHistory();
			cmsPageHistory.VersionId = cmsPage.VersionId;
			cmsPageHistory.Title = cmsPage.Title;
			cmsPageHistory.Url = cmsPage.Url;
			cmsPageHistory.Status = cmsPage.Status;
			cmsPageHistory.ModifiedBy = _userManager.GetUserId(User);
			cmsPageHistory.ModifiedDate = DateTime.Now;
			_context.Add(cmsPageHistory);

			// write changes to the database
			await _context.SaveChangesAsync();

			// update sitemap.json
			Core.Sitemap.Rebuild(_context);

			return RedirectToAction("Index");
		}

		private bool CMSPageExists(string url)
		{
			return _context.CMSPage.Any(e => e.Url == url);
		}
		private bool CMSPageVersionExists(int pageId, int id)
		{
			return _context.CMSPageVersion.Any(v => v.PageId == pageId && v.VersionId == id);
		}
	}
}

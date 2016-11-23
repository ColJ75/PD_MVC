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

namespace Website.Controllers
{
    [Authorize]
    public class CMSController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CMSController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: CMSPages
        public async Task<IActionResult> Index()
        {
            return View(await _context.CMSPage.ToListAsync());
        }

        // GET: CMS/Render/Url
        [AllowAnonymous]
        public async Task<IActionResult> Render(string url)
        {
            if (url == null && HttpContext.Items["CMSUrl"] != null) url = (string)HttpContext.Items["CMSUrl"];
            if (url == null) return NotFound();

            var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.Url == url);
            if (cmsPage == null)
            {
                return NotFound();
            }

            // build view model
            CMSViewModel model = new CMSViewModel(cmsPage);
            var version = await _context.CMSPageVersion.SingleOrDefaultAsync(v => v.VersionId == cmsPage.VersionId);
            model.Content = version != null ? version.Content : string.Empty;

            // if the url was passed in via the context, use the render view, otherwise show the detail view
            return View(model);
        }

        // GET: CMS/Details/Url
        [Route("CMS/Details/{Url?}")]
        public async Task<IActionResult> Details(string url)
        {
            if (url == null) return NotFound();

            var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(p => p.Url == url);
            if (cmsPage == null)
            {
                return NotFound();
            }

            // build view model incorporating history and versions
            CMSViewModel page = new CMSViewModel(cmsPage);
            page.History = await _context.CMSPageHistory.Where(p => p.Url == cmsPage.Url).OrderByDescending(h => h.ModifiedDate).ToListAsync();
            page.Versions = await _context.CMSPageVersion.Where(p => p.Url == cmsPage.Url).OrderByDescending(v => v.VersionId).ToListAsync();
            page.Content = page.Versions.Count() > 0 ? page.Versions.OrderByDescending(v => v.VersionId).First().Content : string.Empty;

            // if the url was passed in via the context, use the render view, otherwise show the detail view
            return View(page);
        }

        // GET: CMS/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: CMS/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Url,Status,ModifiedDate")] CMSPage cMSPage)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cMSPage);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(cMSPage);
        }

        // GET: CMS/Edit/Url
        [Route("CMS/Edit/{Url?}")]
        public async Task<IActionResult> Edit(string url)
        {
            if (url == null)
            {
                return NotFound();
            }

            var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(m => m.Url == url);
            if (cmsPage == null)
            {
                return NotFound();
            }
            return View(cmsPage);
        }

        // POST: CMS/Edit/Url
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Route("CMS/Edit/{Url?}")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string url, [Bind("Url,Status,ModifiedDate")] CMSPage cmsPage)
        {
            if (url != cmsPage.Url)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cmsPage);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CMSPageExists(cmsPage.Url))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(cmsPage);
        }

        // GET: CMS/Delete/Url
        [Route("CMS/Delete/{Url?}")]
        public async Task<IActionResult> Delete(string url)
        {
            if (url == null)
            {
                return NotFound();
            }

            var cmsPage = await _context.CMSPage
                .SingleOrDefaultAsync(m => m.Url == url);
            if (cmsPage == null)
            {
                return NotFound();
            }

            return View(cmsPage);
        }

        // POST: CMS/Delete/Url
        [Route("CMS/Delete/{Url?}")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string url)
        {
            var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(m => m.Url == url);
            _context.CMSPage.Remove(cmsPage);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool CMSPageExists(string url)
        {
            return _context.CMSPage.Any(e => e.Url == url);
        }
    }
}

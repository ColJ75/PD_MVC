using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Website.Data;
using Website.Models;

namespace Website.Controllers
{
    [Route("CMS/[Controller]")]
    public class CMSPagesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CMSPagesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: CMSPages
        public async Task<IActionResult> Index()
        {
            return View(await _context.CMSPage.ToListAsync());
        }

        // GET: CMSPages/Details/5
        [Route("Details/{Url?}")]
        public async Task<IActionResult> Details(string url)
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

        // GET: CMSPages/Create
        [Route("Create")]
        public IActionResult Create()
        {
            return View();
        }

        // POST: CMSPages/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Route("Create")]
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

        // GET: CMSPages/Edit/5
        [Route("Edit/{Url?}")]
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

        // POST: CMSPages/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Route("Edit/{Url?}")]
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

        // GET: CMSPages/Delete/5
        [Route("Delete/{Url?}")]
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

        // POST: CMSPages/Delete/5
        [Route("Delete/{Url?}")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string url)
        {
            var cmsPage = await _context.CMSPage.SingleOrDefaultAsync(m => m.Url == url);
            _context.CMSPage.Remove(cmsPage);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool CMSPageExists(string id)
        {
            return _context.CMSPage.Any(e => e.Url == id);
        }
    }
}

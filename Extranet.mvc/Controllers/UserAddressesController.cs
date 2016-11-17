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
    public class UserAddressesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserAddressesController(ApplicationDbContext context)
        {
            _context = context;    
        }

        // GET: UserAddresses
        public async Task<IActionResult> Index()
        {
            return View(await _context.UserAddress.ToListAsync());
        }

        // GET: UserAddresses/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAddress = await _context.UserAddress.SingleOrDefaultAsync(m => m.AddressId == id);
            if (userAddress == null)
            {
                return NotFound();
            }

            return View(userAddress);
        }

        // GET: UserAddresses/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: UserAddresses/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("AddressId,AddressType,Area,Building,Company,Country,County,Postcode,Street,Town,UserId")] UserAddress userAddress)
        {
            if (ModelState.IsValid)
            {
                _context.Add(userAddress);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(userAddress);
        }

        // GET: UserAddresses/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAddress = await _context.UserAddress.SingleOrDefaultAsync(m => m.AddressId == id);
            if (userAddress == null)
            {
                return NotFound();
            }
            return View(userAddress);
        }

        // POST: UserAddresses/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("AddressId,AddressType,Area,Building,Company,Country,County,Postcode,Street,Town,UserId")] UserAddress userAddress)
        {
            if (id != userAddress.AddressId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userAddress);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserAddressExists(userAddress.AddressId))
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
            return View(userAddress);
        }

        // GET: UserAddresses/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAddress = await _context.UserAddress.SingleOrDefaultAsync(m => m.AddressId == id);
            if (userAddress == null)
            {
                return NotFound();
            }

            return View(userAddress);
        }

        // POST: UserAddresses/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var userAddress = await _context.UserAddress.SingleOrDefaultAsync(m => m.AddressId == id);
            _context.UserAddress.Remove(userAddress);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool UserAddressExists(int id)
        {
            return _context.UserAddress.Any(e => e.AddressId == id);
        }
    }
}

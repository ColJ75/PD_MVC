using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Website.Data;
using Website.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Website.Controllers
{
	public class AddressBookController : Controller
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;

		public AddressBookController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
		{
			_context = context;
			_userManager = userManager;
			_signInManager = signInManager;
		}

		// GET: AddressBook
		[HttpGet("account/addressbook")]
		[Authorize]
		public async Task<IActionResult> Index()
		{
			ApplicationUser user = _userManager.GetUserAsync(HttpContext.User).Result;
			return View("/Views/Account/AddressBook/Index.cshtml", await _context.UserAddress.Where(a => a.UserId == user.Id).ToListAsync());
		}

		// GET: AddressBook/Create
		[HttpGet("account/addressbook/create")]
		[Authorize]
		public IActionResult Create()
		{
			ApplicationUser user = _userManager.GetUserAsync(HttpContext.User).Result;
			UserAddress userAddress = new UserAddress() { UserId = user.Id };
			return View("/Views/Account/AddressBook/Create.cshtml", userAddress);
		}

		// POST: AddressBook/Create
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost("account/addressbook/create")]
		[Authorize]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create([Bind("UserId,Company,Building,Street,Area,Town,County,Postcode,Country")] UserAddress userAddress)
		{
			if (ModelState.IsValid)
			{
				_context.Add(userAddress);
				await _context.SaveChangesAsync();
				return RedirectToAction("Index");
			}
			return View("/Views/Account/AddressBook/Create.cshtml", userAddress);
		}

		// GET: AddressBook/Edit/5
		[HttpGet("account/addressbook/edit/{id?}")]
		[Authorize]
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
			return View("/Views/Account/AddressBook/Edit.cshtml", userAddress);
		}

		// POST: AddressBook/Edit/5
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost("account/addressbook/edit/{id?}")]
		[Authorize]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Edit(int id, [Bind("UserId,AddressId,Company,Building,Street,Area,Town,County,Postcode,Country")] UserAddress userAddress)
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
			return View("/Views/Account/AddressBook/Edit.cshtml", userAddress);
		}

		// GET: AddressBook/Delete/5
		[HttpGet("account/addressbook/delete/{id?}")]
		[Authorize]
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

			return View("/Views/Account/AddressBook/Delete.cshtml", userAddress);
		}

		// POST: AddressBook/Delete/5
		[HttpPost("account/addressbook/delete/{id?}")]
		[Authorize]
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

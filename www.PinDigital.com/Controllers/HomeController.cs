using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Website.Models;
using Website.ViewModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;

namespace Website.Controllers
{
	public class HomeController : Controller
	{
		private readonly IHostingEnvironment _hostingEnvironment;
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly RoleManager<IdentityRole> _roleManager;

		public HomeController(IHostingEnvironment hostingEnvironment, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
		{
			_hostingEnvironment = hostingEnvironment;
			_userManager = userManager;
			_roleManager = roleManager;
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Error()
		{
			return View();
		}

		public IActionResult Sitemap()
		{
			HomeViewModel model = new HomeViewModel() { SitemapPages = Core.Sitemap.List() };
			return View(model);
		}

		public string Simple()
		{
			string text = "This is a simple test";
			//string base64 = Core.Tools.StringEncoding.Base64.ToBase64(text);
			//string fromBase64 = Core.Tools.StringEncoding.Base64.FromBase64(base64);
			//string hashed = Core.Tools.StringEncoding.Hash.HashString(text);
			//return string.Join("\n", text, base64, fromBase64, hashed);
			return text;
		}

		public async Task<IActionResult> Setup()
		{
			var user = await _userManager.GetUserAsync(HttpContext.User);

			var adminRole = await _roleManager.FindByNameAsync("Administrator");
			if (adminRole == null)
			{
				adminRole = new IdentityRole("Administrator");
				await _roleManager.CreateAsync(adminRole);

				await _roleManager.AddClaimAsync(adminRole, new Claim("Admin", "Level1"));
				await _roleManager.AddClaimAsync(adminRole, new Claim("Admin", "Level2"));
				await _roleManager.AddClaimAsync(adminRole, new Claim("Admin", "Level3"));
				await _roleManager.AddClaimAsync(adminRole, new Claim("CMS", "View"));
				await _roleManager.AddClaimAsync(adminRole, new Claim("CMS", "Edit"));
				await _roleManager.AddClaimAsync(adminRole, new Claim("CMS", "Approve"));
			}

			if (!await _userManager.IsInRoleAsync(user, adminRole.Name))
			{
				await _userManager.AddToRoleAsync(user, adminRole.Name);
			}

			var accountManagerRole = await _roleManager.FindByNameAsync("Customer");

			if (accountManagerRole == null)
			{
				accountManagerRole = new IdentityRole("Customer");
				await _roleManager.CreateAsync(accountManagerRole);

				await _roleManager.AddClaimAsync(accountManagerRole, new Claim("CMS", "View"));
				await _roleManager.AddClaimAsync(accountManagerRole, new Claim("Checkout", "AllowOrders"));
			}

			if (!await _userManager.IsInRoleAsync(user, accountManagerRole.Name))
			{
				await _userManager.AddToRoleAsync(user, accountManagerRole.Name);
			}

			return Ok();
		}

		public IActionResult Claims()
		{
			var claims = User.Claims.Select(claim => new { claim.Type, claim.Value }).ToArray();
			return Json(claims);
		}
	}
}

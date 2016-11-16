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
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;


namespace Website.Controllers
{
	public class HomeController : Controller
	{
		private readonly IHostingEnvironment _hostingEnvironment;
		private readonly UserManager<ApplicationUserModel> _userManager;

		public HomeController(IHostingEnvironment hostingEnvironment, UserManager<ApplicationUserModel> userManager)
		{
			_hostingEnvironment = hostingEnvironment;
			_userManager = userManager;
		}

		public async Task<IActionResult> Index()
		{
			// default user name for none logged in users
			ViewData["UserName"] = "anonymous";

			// if logged in, update the user name
			if (User.Identity.IsAuthenticated)
			{
				var user = await _userManager.GetUserAsync(HttpContext.User);
				//var claims = User.Claims.Select(claim => new { claim.Type, claim.Value }).ToArray();
				ViewData["UserName"] = string.Format("{0}", user.FirstName, user.LastName); ;
			}
			return View();
		}

		public IActionResult Error()
		{
			return View();
		}

		public IActionResult Sitemap()
		{
			var readJson = System.IO.File.ReadAllText(_hostingEnvironment.ContentRootPath + (@"/App_Data/sitemap.json"));
			return View(JsonConvert.DeserializeObject<Models.HomeViewModel.JsonSitemap>(readJson));
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
	}
}

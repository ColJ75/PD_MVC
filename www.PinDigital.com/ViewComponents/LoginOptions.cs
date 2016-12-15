using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Website.Models;
using Website.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace Website.ViewComponents
{
	public class LoginOptions : ViewComponent
	{
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;

		public LoginOptions(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		public IViewComponentResult Invoke(LoginOptionType type = LoginOptionType.Default)
		{
			// determine currently logged in user (if any - default user name is anonymous), and check for specific permissions
			LoginOptionsViewModel options = new LoginOptionsViewModel()
			{
				IsLoggedIn = _signInManager.IsSignedIn(HttpContext.User),
				AllowCMS = HttpContext.User.Claims.Any(c => c.Type == "CMS" && c.Value == "View")
			};
			return View(type.ToString(), options);
		}

	}
	public enum LoginOptionType
	{
		Default,
		SiteHeader
	}
}
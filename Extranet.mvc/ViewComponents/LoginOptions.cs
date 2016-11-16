using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Website.Models;
using Microsoft.AspNetCore.Identity;

namespace Website.ViewComponents
{
	public class LoginOptions : ViewComponent
	{
		private readonly UserManager<ApplicationUserModel> _userManager;
		private readonly SignInManager<ApplicationUserModel> _signInManager;

		public LoginOptions(UserManager<ApplicationUserModel> userManager, SignInManager<ApplicationUserModel> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		public IViewComponentResult Invoke(LoginOptionType type = LoginOptionType.Default)
		{
			// determine currently logged in user (if any - default user name is anonymous)
			LoginOptionsViewModel options = new LoginOptionsViewModel() { IsLoggedIn = _signInManager.IsSignedIn(HttpContext.User), User = _userManager.GetUserAsync(HttpContext.User).Result };
			return View(type.ToString(), options);
		}

	}
	public enum LoginOptionType
	{
		Default,
		SiteHeader
	}
}
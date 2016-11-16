using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Website.Models;
using Microsoft.AspNetCore.Identity;

namespace Website.ViewComponents
{
	public class Alert : ViewComponent
	{
		private readonly UserManager<ApplicationUserModel> _userManager;
		private readonly SignInManager<ApplicationUserModel> _signInManager;

		public Alert(UserManager<ApplicationUserModel> userManager, SignInManager<ApplicationUserModel> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		public IViewComponentResult Invoke(string message)
		{
			AlertModel alert = new AlertModel() { Message = message };
			return View("Alert", alert);
		}
	}
}
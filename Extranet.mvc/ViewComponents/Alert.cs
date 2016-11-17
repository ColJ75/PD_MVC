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
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;

		public Alert(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
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
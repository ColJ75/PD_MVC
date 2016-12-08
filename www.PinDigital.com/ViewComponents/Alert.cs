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
		public Alert()
		{
		}

		public IViewComponentResult Invoke(string message)
		{
			Models.Alert alert = new Models.Alert() { Message = message };
			return View("Alert", alert);
		}
	}
}
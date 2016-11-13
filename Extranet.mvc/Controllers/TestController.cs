using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Extranet.Models;
using Microsoft.AspNetCore.Authorization;

namespace Extranet.Controllers
{
	public class TestController : Controller
	{
		[Authorize]
		public string Index()
		{
			return "Test page";
		}

		[Authorize]
		public IActionResult Test()
		{
			return View();
		}
	}
}

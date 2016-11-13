using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Extranet.Models;

namespace Extranet.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Error()
		{
			return View();
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

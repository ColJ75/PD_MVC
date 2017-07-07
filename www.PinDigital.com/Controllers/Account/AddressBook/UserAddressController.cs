using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Website.Data;
using Website.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Website.Controllers
{
	[Route("api/[controller]")]
	public class UserAddressController : Controller
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;

		public UserAddressController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
		{
			_context = context;
			_userManager = userManager;
			_signInManager = signInManager;
		}

		// GET: api/values
		[HttpGet]
		public IEnumerable<UserAddress> Get()
		{
			return _context.UserAddress.Where(a => a.UserId == _userManager.GetUserId(User)).ToList();
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public UserAddress Get(int id)
		{
			var userAddress = _context.UserAddress.SingleOrDefault(m => m.AddressId == id);
			return userAddress;
		}

		// POST api/values
		[HttpPost]
		public HttpResponseMessage Post(UserAddress userAddress)
		{
			// save address
			var response = Request.CreateResponse(HttpStatusCode.Created, userAddress);
			string url = Url.Link("DefaultApi", new { userAddress.AddressId });
			response.Headers.Location = new Uri(url);
			return response;
		}

		//// PUT api/values/5
		//[HttpPut("{id}")]
		//public void Put(int id, [FromBody]string value)
		//{
		//}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public HttpResponseMessage Delete(int id)
		{
			var userAddress = _context.UserAddress.SingleOrDefault(m => m.AddressId == id);
			var response = Request.CreateResponse(HttpStatusCode.OK, id);
			return response;
		}
	}
}

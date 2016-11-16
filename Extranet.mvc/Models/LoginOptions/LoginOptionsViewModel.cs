using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.Models
{
	public class LoginOptionsViewModel
	{
		public bool IsLoggedIn { get; set; }
		public ApplicationUserModel User { get; set; }
	}
}
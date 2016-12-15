using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.ViewModels
{
	public class LoginOptionsViewModel
	{
        public bool IsLoggedIn { get; set; }
        public bool AllowCMS { get; set; }
		public Models.ApplicationUser User { get; set; }
	}
}
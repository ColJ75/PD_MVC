using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.Models
{
	public class HomeViewModel
	{
		public List<Models.Sitemap.Page> SitemapPages { get; set; }
	}
}
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.Models
{
	public class HomeViewModel
	{
		public class Movie
		{
			public string url { get; set; }
			public int id { get; set; }
		}

		public class Product
		{
			public string url { get; set; }
			public int id { get; set; }
		}

		public class JsonSitemap
		{
			public IList<Movie> movies { get; set; }
			public IList<Product> products { get; set; }
		}
	}
}
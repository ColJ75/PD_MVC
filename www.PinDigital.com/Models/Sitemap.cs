using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Website.Models
{
	public class Sitemap
	{
		public class Page
		{
			public string Url { get; set; }
			public string Title { get; set; }
			public string Type { get; set; }
		}

		public IList<Page> Pages { get; set; }

		#region Enums

		public enum PageType
		{
			CMS = 0,
			Product = 1
		}

		#endregion
	}
}
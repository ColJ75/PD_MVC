using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Threading.Tasks;
using Website.Data;
using System.Collections.Generic;

namespace Website.Core
{
	public class Sitemap
	{
		// load the sitemap from the file
		private static Models.Sitemap SiteMapGet
		{
			get { return JsonConvert.DeserializeObject<Models.Sitemap>(File.ReadAllText(@"App_Data/sitemap.json")); }
		}

		// list pages in the sitemap, with optional type
		public static List<Models.Sitemap.Page> List(Models.Sitemap.PageType? type = null)
		{
			return SiteMapGet.Pages.Where(p => type == null || p.Type == type.ToString()).ToList();
		}

		// try and find a page in the sitemap, based on url and optional type
		public static Models.Sitemap.Page Load(string url, Models.Sitemap.PageType? type = null)
		{
			return SiteMapGet.Pages.FirstOrDefault(p => p.Url == url.ToLower() && (type == null || p.Type == type.ToString()));
		}

		// rebuild the sitemap json file based on the database content
		public static void Rebuild(ApplicationDbContext context)
		{
			// retrieve existing sitemap and clear the pages section, ready for new content
			Models.Sitemap sitemap = SiteMapGet;
			sitemap.Pages.Clear();

			// retrieve list of active cms pages and add those to the sitemap
			var q = from p in context.CMSPage
					where p.Status != Enums.CMS.PageStatus.Deleted
					select new
					{
						Url = p.Url,
						Title = p.Title
					};
			foreach (var page in q.ToList())
			{
				sitemap.Pages.Add(new Models.Sitemap.Page()
				{
					Url = page.Url,
					Title = page.Title,
					Type = "CMS"
				});
			}

			// write the json back to the file
			File.WriteAllText(@"App_Data/sitemap.json", JsonConvert.SerializeObject(sitemap));
		}
	}
}

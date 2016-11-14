using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Extranet.Core.Routing
{
	public class MoviesConstraint : IRouteConstraint
	{
		public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
		{
			if (!values.ContainsKey(routeKey)) return false;

			// check if the url is a valid movie url - if so return true, and store movie id in the context
			var readJson = File.ReadAllText(@"App_Data/sitemap.json");
			Classes.JsonSitemap jsonSitemap = JsonConvert.DeserializeObject<Classes.JsonSitemap>(readJson);
			Classes.Movie movie = jsonSitemap.movies.FirstOrDefault(m => m.url == values[routeKey].ToString());
			if (movie != null)
			{
				httpContext.Items["MovieUrl"] = movie.url;
				httpContext.Items["MovieId"] = movie.id;
				return true;
			}
			else return false;
		}
	}

	public class ProductConstraint : IRouteConstraint
	{
		public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
		{
			if (!values.ContainsKey(routeKey)) return false;

			// check if the url is a valid product url - if so return true, and store product id in the context
			var readJson = File.ReadAllText(@"App_Data/sitemap.json");
			Classes.JsonSitemap jsonSitemap = JsonConvert.DeserializeObject<Classes.JsonSitemap>(readJson);
			Classes.Product product = jsonSitemap.products.FirstOrDefault(m => m.url == values[routeKey].ToString());
			if (product != null)
			{
				httpContext.Items["ProductUrl"] = product.url;
				httpContext.Items["ProductId"] = product.id;
				return true;
			}
			else return false;
		}
	}
}

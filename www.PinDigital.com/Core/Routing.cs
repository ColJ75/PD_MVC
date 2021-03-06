﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Website.Core.Routing
{
	public class Routes
	{
		public static IRouteBuilder MapRoutes(IRouteBuilder routes)
		{
			routes.MapRoute(
				name: "default",
				template: "{controller=Home}/{action=Index}/{id?}"
			);

			routes.MapRoute(
				name: "account",
				template: "account/{controller}/{action=Index}/{id?}"
			);

			routes.MapRoute(
				name: "cms",
				template: "{*url}",
				defaults: new { controller = "CMS", action = "Render" },
				constraints: new { url = new Core.Routing.Constraints.CMSConstraint() }
			);

			return routes;
		}
	}

	public class Constraints
	{
		public class CMSConstraint : IRouteConstraint
		{
			public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
			{
				if (!values.ContainsKey(routeKey)) return false;

				// try and find the url in the sitemap - if so work out what type of page it is and set some context properties for use later on
				Models.Sitemap.Page page = Core.Sitemap.Load(values[routeKey].ToString(), Models.Sitemap.PageType.CMS);
				if (page != null)
				{
					httpContext.Items["CMSUrl"] = page.Url;
					return true;
				}
				else return false;
			}
		}
	}
}

//namespace Website.Core.Routing.Middleware
//{
//    public class RoutingMiddleware
//    {
//        private readonly RequestDelegate _next;

//        public RoutingMiddleware(RequestDelegate next)
//        {
//            this._next = next;
//        }

//        public async Task Invoke(HttpContext context)
//        {
//            await _next(context);
//        }
//    }

//    public static class MiddlewareExtensions
//    {
//        public static IApplicationBuilder UseCustomRouting(this IApplicationBuilder builder)
//        {
//            return builder.UseMiddleware<RoutingMiddleware>();
//        }
//    }
//}
using Microsoft.AspNetCore.Builder;
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
            //// check if the url is a valid movie url - if so return true, and store movie id in the context
            //var readJson = File.ReadAllText(@"App_Data/sitemap.json");
            //Classes.JsonSitemap jsonSitemap = JsonConvert.DeserializeObject<Classes.JsonSitemap>(readJson);
            //jsonSitemap.cms.ForEach(m =>
            //{
            //    routes.MapRoute(
            //        name: string.Format("cms_{0}", m.url.Replace("-", "_")),
            //        template: m.url,
            //        defaults: new { controller = "CMS", action = "Render", url = m.url }
            //    );
            //});

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

            routes.MapRoute(
                name: "product",
                template: "{*url}",
                defaults: new { controller = "Product", action = "Index" },
                constraints: new { url = new Core.Routing.Constraints.ProductConstraint() }
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

                // check if the url is a valid movie url - if so return true, and store movie id in the context
                var readJson = File.ReadAllText(@"App_Data/sitemap.json");
                Classes.JsonSitemap jsonSitemap = JsonConvert.DeserializeObject<Classes.JsonSitemap>(readJson);
                Classes.CMS cms = jsonSitemap.cms.FirstOrDefault(m => m.url == values[routeKey].ToString());
                if (cms != null)
                {
                    httpContext.Items["CMSUrl"] = cms.url;
                    return true;
                }
                else return false;
            }
        }

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
}

namespace Website.Core.Routing.Middleware
{
    public class RoutingMiddleware
    {
        private readonly RequestDelegate _next;

        public RoutingMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            await _next(context);
        }
    }

    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomRouting(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RoutingMiddleware>();
        }
    }
}
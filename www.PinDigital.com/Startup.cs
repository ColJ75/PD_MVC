using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Website.Core.Messaging;
using Website.Data;
using Website.Models;

namespace Website
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

			//if (env.IsDevelopment())
			//{
			//	// For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
			//	builder.AddUserSecrets();
			//}

			builder.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddDbContext<ApplicationDbContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services
				.AddAntiforgery(opts => opts.CookieName = "token_af")
				.AddIdentity<ApplicationUser, IdentityRole>(options =>
					options.Cookies = new Microsoft.AspNetCore.Identity.IdentityCookieOptions
					{
						ApplicationCookie = new CookieAuthenticationOptions
						{
							AuthenticationScheme = "Cookie",
							//LoginPath = new PathString("/Account/Login/"),
							//AccessDeniedPath = new PathString("/Account/Forbidden/"),
							AutomaticAuthenticate = true,
							AutomaticChallenge = true,
							CookieName = "token_id"
						}
					})
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			services.Configure<IISOptions>(options =>
			{
				options.AutomaticAuthentication = false;
				options.ForwardClientCertificate = false;
				options.ForwardWindowsAuthentication = false;
			});

			services.AddMvc();
			services.AddDistributedMemoryCache(); // Adds a default in-memory implementation of IDistributedCache
			services.AddSession();

			// add custom policies for authrisation
			services.AddAuthorization(options =>
			{
				options.AddPolicy("Admin Level 1", policy => policy.RequireClaim("Admin", "Level1", "Level2", "Level3"));
				options.AddPolicy("Admin Level 2", policy => policy.RequireClaim("Admin", "Level2", "Level3"));
				options.AddPolicy("Admin Level 3", policy => policy.RequireClaim("Admin", "Level3"));
				options.AddPolicy("CMS Edit", policy => policy.RequireClaim("CMS", "Edit", "Approve"));
				options.AddPolicy("CMS Approve", policy => policy.RequireClaim("CMS", "Approve"));
				options.AddPolicy("Checkout Allow Orders", policy => policy.RequireClaim("Checkout", "AllowOrders"));
			});

			// Add application services.
			services.AddTransient<IEmailSender, AuthMessageSender>();
			services.AddTransient<ISmsSender, AuthMessageSender>();

			// add require https filter so we can force ssl on specific routes
			services
				//.AddMvc(options => { options.Filters.Add(new RequireHttpsAttribute()); })
				.AddMvc()
				.AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

			// Add Kendo UI services to the services container
			services.AddKendo();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseIdentity();
			app.UseSession();
			app.UseMvc(routes => Core.Routing.Routes.MapRoutes(routes));

			// Configure Kendo UI
			app.UseKendo(env);
		}
	}
}

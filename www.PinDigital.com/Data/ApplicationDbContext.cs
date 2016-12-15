using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Website.Models;

namespace Website.Data
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<Models.ApplicationUser>().HasIndex(u => u.LegacyUserId);
			builder.Entity<Models.UserAddress>().HasIndex(a => a.UserId);
			builder.Entity<Models.CMSPage>().HasIndex(p => p.Url);

			// rename the AspNet user tables to something more in keeping with the usual data structure
			builder.Entity<ApplicationUser>().ToTable("User");
			builder.Entity<IdentityRole>().ToTable("Role");
			builder.Entity<IdentityUserRole<string>>().ToTable("UserRole");
			builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaim");
			builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogin");
			builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaim");
			builder.Entity<IdentityUserToken<string>>().ToTable("UserToken");
		}

		public DbSet<UserAddress> UserAddress { get; set; }

		public DbSet<CMSPage> CMSPage { get; set; }
		public DbSet<CMSPageVersion> CMSPageVersion { get; set; }
		public DbSet<CMSPageHistory> CMSPageHistory { get; set; }
	}
}

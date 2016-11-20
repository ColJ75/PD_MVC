using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Website.Models
{
	// Add profile data for application users by adding properties to the ApplicationUser class
	public class ApplicationUser : IdentityUser
	{
		public virtual string FirstName { get; set; }

		public virtual string LastName { get; set; }

		[StringLength(35)]
		public virtual string Source { get; set; }

		[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
		public virtual DateTime DateAdded { get; set; }
	}
}

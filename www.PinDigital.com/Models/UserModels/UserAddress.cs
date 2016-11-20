using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Website.Models
{
	public class UserAddress
	{
		[Key]
		public int AddressId { get; set; }

		[Required]
		public string UserId { get; set; }

		[Display(Name = "Company Name")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Company { get; set; }

		[Required]
		[Display(Name = "House Name/No")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Building { get; set; }

		[Required]
		[Display(Name = "Street")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Street { get; set; }

		[Required]
		[Display(Name = "Area")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Area { get; set; }

		[Required]
		[Display(Name = "Town")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Town { get; set; }

		[Required]
		[Display(Name = "County")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string County { get; set; }

		[Required]
		[Display(Name = "Postcode")]
		[StringLength(50, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Postcode { get; set; }

		[Required]
		[Display(Name = "Country")]
		[StringLength(100, ErrorMessage = "The {0} must be at no more than {1} characters long.")]
		public string Country { get; set; }


		[Display(Name = "Default Invoice Address")]
		public bool DefaultInvoice { get; set; }

		[Display(Name = "Default Delivery Address")]
		public bool DefaultDelivery { get; set; }
	}
}

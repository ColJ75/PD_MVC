using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Models
{
	public class CMSPage
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int PageId { get; set; }

		[Required]
		[Display(Name = "Url")]
		public string Url { get; set; }

		[Required]
		[Display(Name = "Page Title")]
		public string Title { get; set; }

		[Display(Name = "Status")]
		public Core.Enums.CMS.PageStatus Status { get; set; }

		[Display(Name = "Modified Date"), DataType(DataType.DateTime)]
		[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm:ss}", ApplyFormatInEditMode = true)]
		public DateTime ModifiedDate { get; set; }

		[Display(Name = "Modified By")]
		public string ModifiedBy { get; set; }

		[Display(Name = "Version Id")]
		public int? VersionId { get; set; }

		public CMSPage()
		{
			Status = Core.Enums.CMS.PageStatus.Hidden;
			ModifiedBy = null;
			VersionId = null;
		}
	}

	public class CMSPageVersion
	{
		[Key]
		[Display(Name = "Version Id")]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int VersionId { get; set; }

		[Display(Name = "Page Id")]
		public int PageId { get; set; }

		[Display(Name = "Content")]
		public string Content { get; set; }

		[Display(Name = "Status")]
		public byte Status { get; set; }
	}

	public class CMSPageHistory
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ItemId { get; set; }

		[Display(Name = "Page Id")]
		public int PageId { get; set; }

		[Display(Name = "Url")]
		public string Url { get; set; }

		[Display(Name = "Page Title")]
		public string Title { get; set; }

		[Display(Name = "Status")]
		public Core.Enums.CMS.PageStatus Status { get; set; }

		[Display(Name = "Modified Date"), DataType(DataType.DateTime)]
		[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm:ss}", ApplyFormatInEditMode = false)]
		public DateTime ModifiedDate { get; set; }

		[Display(Name = "Modified By")]
		public string ModifiedBy { get; set; }

		[Display(Name = "Version")]
		public int? VersionId { get; set; }
	}
}

using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Models
{
	public class CMSViewModel
	{
		public CMSViewPage Page { get; set; }
		public IList<CMSPageVersion> Versions { get; set; }
		public IList<CMSViewPageHistory> History { get; set; }
		public string Content { get; set; }

		public CMSViewModel(CMSPage page)
		{
			Page = new CMSViewPage()
			{
				Url = page.Url,
				Title = page.Title,
				Status = (Enums.CMSPageStatus)page.Status,
				ModifiedDate = page.ModifiedDate,
				ModifiedBy = page.ModifiedBy,
				VersionId = page.VersionId
			};
			Versions = new List<CMSPageVersion>();
			History = new List<CMSViewPageHistory>();
		}
	}

	public class CMSViewPage
	{
		public string Url { get; set; }
		public string Title { get; set; }
		public Enums.CMSPageStatus Status { get; set; }
		[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm:ss}")]
		public DateTime ModifiedDate { get; set; }
		public int ModifiedBy { get; set; }
		public int VersionId { get; set; }
		public CMSViewPage()
		{
			Status = (Enums.CMSPageStatus)1;
			ModifiedBy = 0;
			VersionId = 0;
		}
	}

	public class CMSViewPageHistory : CMSPageHistory
	{
		public string ModifiedByName { get; set; }
		public CMSViewPageHistory()
		{
			ModifiedByName = string.Empty;
		}
	}

	public class Enums
	{
		public enum CMSPageStatus
		{
			Hidden = 0,
			Active = 1,
			Deleted = 2
		}
	}
}
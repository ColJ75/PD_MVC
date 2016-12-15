using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Website.Models;

namespace Website.ViewModels
{
	public class CMSRenderViewModel
	{
		public int PageId { get; set; }
		public string Title { get; set; }
		public string Content { get; set; }
	}

	public class CMSViewModel
	{
		public CMSPage Page { get; set; }
		public IList<CMSPageVersion> Versions { get; set; }
		public IList<CMSPageHistoryViewModel> History { get; set; }
		public string Content { get; set; }

		public CMSViewModel()
		{
			Page = new CMSPage();
			Versions = new List<CMSPageVersion>();
			History = new List<CMSPageHistoryViewModel>();
		}
	}

	#region Helpers

	public class CMSPageHistoryViewModel : CMSPageHistory
	{
		public string ModifiedByName { get; set; }

		public CMSPageHistoryViewModel()
		{
			ModifiedByName = string.Empty;
		}
	}

	#endregion
}
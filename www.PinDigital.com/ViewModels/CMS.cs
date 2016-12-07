using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;

namespace Website.Models
{
    public class CMSViewModel
    {
        public CMSViewPage Page { get; set; }
        public IList<CMSPageVersion> Versions { get; set; }
        public IList<CMSPageHistory> History { get; set; }
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
            History = new List<CMSPageHistory>();
        }
    }

    public class CMSViewPage
    {
        public string Url { get; set; }
        public string Title { get; set; }
        public Enums.CMSPageStatus Status { get; set; }
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
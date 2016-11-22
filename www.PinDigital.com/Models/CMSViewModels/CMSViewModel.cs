using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.Models
{
    public class CMSViewModel
    {
        public CMSPage Page { get; set; }
        public IList<CMSPageVersion> Versions { get; set; }
        public IList<CMSPageHistory> History { get; set; }
        public string Content { get; set; }

        public CMSViewModel(CMSPage page)
        {
            Page = page;
            Versions = new List<CMSPageVersion>();
            History = new List<CMSPageHistory>();
        }
    }
}
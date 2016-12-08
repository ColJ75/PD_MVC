using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Website.Models
{
    public class HomeViewModel
    {
        public class CMS
        {
            public string url { get; set; }
        }

        public class JsonSitemap
        {
            public IList<CMS> cms { get; set; }
        }
    }
}
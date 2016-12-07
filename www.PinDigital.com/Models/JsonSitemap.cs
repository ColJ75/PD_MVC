using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Website.Models
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
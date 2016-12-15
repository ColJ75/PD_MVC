using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Threading.Tasks;
using Website.Data;
using System.Collections.Generic;

namespace Website.Core.Enums
{
	public class CMS
	{
		public enum PageStatus
		{
			Hidden = 0,
			Active = 1,
			Deleted = 2
		}
	}
}

using System;
using System.IO;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Website.Controllers
{
	public class ImageBrowserController : EditorImageBrowserController
	{
		private const string contentFolderRoot = "cms";

		public override string ContentPath
		{
			get
			{
				return HostingEnvironment.WebRootFileProvider.GetFileInfo(contentFolderRoot).PhysicalPath;
			}
		}

		public ImageBrowserController(IHostingEnvironment hostingEnvironment)
			: base(hostingEnvironment)
		{
		}

		public override IActionResult Thumbnail(string path)
		{
			var fullPath = Path.Combine("~/", contentFolderRoot, path);
			string extension = new FileInfo(fullPath).Extension;
			string mimeType = "image/jpeg";
			switch (extension)
			{
				case "png":
					mimeType = "image/png";
					break;
			}
			return base.File(fullPath, mimeType);
		}
	}
}
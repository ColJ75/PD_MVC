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

			//var files = new FilesRepository();
			//var image = files.ImageByPath(path);
			//if (image != null)
			//{
			//	var desiredSize = new ImageSize { Width = ThumbnailWidth, Height = ThumbnailHeight };

			//	const string contentType = "image/png";

			//	var thumbnailCreator = new ThumbnailCreator(new FitImageResizer());

			//	using (var stream = new MemoryStream(image.Image1.ToArray()))
			//	{
			//		return File(thumbnailCreator.Create(stream, desiredSize, contentType), contentType);
			//	}
			//}
			//throw new HttpException(404, "File Not Found");


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
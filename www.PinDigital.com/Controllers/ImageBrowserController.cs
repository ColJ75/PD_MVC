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
    }
}
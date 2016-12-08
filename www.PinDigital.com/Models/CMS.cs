using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Models
{
    public class CMSPage
    {
        [Key]
        [Required]
        [Display(Name = "Url")]
        public string Url { get; set; }

        [Required]
        [Display(Name = "Page Title")]
        public string Title { get; set; }

        [Display(Name = "Status")]
        public byte Status { get; set; }

        [Display(Name = "Modified Date"), DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime ModifiedDate { get; set; }

        [Display(Name = "Modified By")]
        public int ModifiedBy { get; set; }

        [Display(Name = "Version Id")]
        public int VersionId { get; set; }

        public CMSPage()
        {
            Status = 1;
            ModifiedBy = 0;
            VersionId = 1;
        }
    }

    public class CMSPageVersion
    {
        [Key]
        [Display(Name = "Version Id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VersionId { get; set; }

        [Display(Name = "Url")]
        public string Url { get; set; }

        [Display(Name = "Content")]
        public string Content { get; set; }
    }

    public class CMSPageHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ItemId { get; set; }

        [Display(Name = "Url")]
        public string Url { get; set; }

        [Display(Name = "Status")]
        public byte Status { get; set; }

        [Display(Name = "Modified Date"), DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime ModifiedDate { get; set; }

        [Display(Name = "Modified By")]
        public int ModifiedBy { get; set; }

        [Display(Name = "Version Id")]
        public int VersionId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Website.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual int LegacyUserId { get; set; }

        public virtual string FirstName { get; set; }

        public virtual string LastName { get; set; }

        [StringLength(35)]
        public virtual string Source { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public virtual DateTime DateAdded { get; set; }

        public static implicit operator ApplicationUser(IdentityRole v)
        {
            throw new NotImplementedException();
        }
    }
}

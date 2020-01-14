using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AssemblerAPI.Core.Models
{
    public class Code
    {
        public int Id { get; set; }

        public int LineNumber { get; set; }
        public string Type { get; set; }
        public string Operation { get; set; }
        public string Comment { get; set; }

        public int CourseId { get; set; }
       // public Course Course { get; set; }

        public int LeftValueId { get; set; }

        [ForeignKey("LeftValueId")]
        public RegistryValue LeftValue { get; set; }

        public int RightValueId { get; set; }

        [ForeignKey("RightValueId")]
        public RegistryValue RightValue { get; set; }
        
    }
}

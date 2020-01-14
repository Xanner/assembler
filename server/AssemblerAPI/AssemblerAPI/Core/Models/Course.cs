using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssemblerAPI.Core.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public IEnumerable<Code> Codes { get; set; }
    }
}

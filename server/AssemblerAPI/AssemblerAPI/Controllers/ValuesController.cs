using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssemblerAPI.Persistence;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AssemblerAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAll")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var options = new DbContextOptionsBuilder<ServiceDbContext>();
            options.UseSqlServer("server=DESKTOP-S9S847J\\SQLEXPRESS; database=Assembler; integrated security=SSPI");

            using (var context = new ServiceDbContext(options.Options))
            {
                var value = context.Courses.Include(c => c.Codes)
                                                .ThenInclude(rv => rv.LeftValue)
                                           .Include(c => c.Codes)
                                                .ThenInclude(rv => rv.RightValue)
                                           .ToList();

                return Ok(value);
            }

            
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

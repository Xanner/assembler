using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssemblerAPI.Persistence;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AssemblerAPI.Controllers
{
    [Route("api/assemblerCourse")]
    [EnableCors("AllowAll")]
    [ApiController]
    public class AssemblerCourseController : ControllerBase
    {
        private readonly ServiceDbContext _serviceDbContext;

        public AssemblerCourseController(ServiceDbContext serviceDbContext)
        {
            _serviceDbContext = serviceDbContext;
        }

        // GET api/values/5
        [HttpGet("getAllCourses")]
        public IActionResult GetCourses()
        {
            var value = _serviceDbContext.Courses.Include(c => c.Codes)
                                                           .ThenInclude(rv => rv.LeftValue)
                                                      .Include(c => c.Codes)
                                                           .ThenInclude(rv => rv.RightValue)
                                                      .ToList();

            return Ok(value);


        }
    }
}
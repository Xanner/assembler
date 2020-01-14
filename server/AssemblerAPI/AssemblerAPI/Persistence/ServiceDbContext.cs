using AssemblerAPI.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssemblerAPI.Persistence
{
    public class ServiceDbContext : DbContext
    {
        public ServiceDbContext(DbContextOptions<ServiceDbContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Code>(ct =>
            {
                ct.Property(c => c.Id).HasColumnName("COD_ID");
                ct.Property(c => c.Comment).HasColumnName("COD_Comment");
                ct.Property(c => c.CourseId).HasColumnName("COD_CourseID");
                ct.Property(c => c.LeftValueId).HasColumnName("COD_LeftValueID");
                ct.Property(c => c.RightValueId).HasColumnName("COD_RightValueID");
                ct.Property(c => c.Operation).HasColumnName("COD_Operation");
                ct.Property(c => c.LineNumber).HasColumnName("COD_LineNumber");
                ct.Property(c => c.Type).HasColumnName("COD_Type");
            });

            modelBuilder.Entity<Course>(ct =>
            {
                ct.Property(c => c.Id).HasColumnName("COR_ID");
                ct.Property(c => c.Name).HasColumnName("COR_Name");         
            });

            modelBuilder.Entity<RegistryValue>(ct =>
            {
                ct.Property(c => c.Id).HasColumnName("RVL_ID");
                ct.Property(c => c.Type).HasColumnName("RVL_Type");
                ct.Property(c => c.Value).HasColumnName("RVL_Value");
            });
        }

        public DbSet<Code> Codes { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<RegistryValue> RegistryValues { get; set; }
 
    }
}

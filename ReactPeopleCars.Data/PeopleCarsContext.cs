using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Text;
using System;

namespace ReactPeopleCars.Data
{
    public class PeopleCarsContext : DbContext
    {
        private readonly string _connectionString;
        public PeopleCarsContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }
    }
}

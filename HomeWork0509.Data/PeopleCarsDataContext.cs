using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HomeWork0509.Data
{
    public class PeopleCarsDataContext : DbContext
    {
        private readonly string _connectionString;

        public PeopleCarsDataContext(string connectionString)
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



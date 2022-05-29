using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace HomeWork0509.Data
{
    public class PeopleCarsContextFactory : IDesignTimeDbContextFactory<PeopleCarsDataContext>
    {
        public PeopleCarsDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}HomeWork0509.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleCarsDataContext(config.GetConnectionString("ConStr"));
        }
    }
}
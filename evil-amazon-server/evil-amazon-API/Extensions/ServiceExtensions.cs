using entities.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evil_amazon_server.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureSqlServerContext(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddDbContext<EvilAmazonDbContext>(options =>
                options
                .UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }
    }
}

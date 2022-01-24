using entities.Context;
using evil_amazon.contracts;
using evil_amazon.repository;
using evil_amazon_server.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureSqlServerContext(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddDbContext<EvilAmazonDbContext>(options =>
                options
                .UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }

        public static void ConfigureRepositoryWrapper(this IServiceCollection services)
        {
            services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
        }

        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                builder
                .WithOrigins(new[] { "http:/localhost:3000", "http:/localhost:8080", "http:/localhost:4200" })
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                );
            });
            
        }

        public static void AddOAuthAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication("BearerAuthentication")
                .AddScheme<AuthenticationSchemeOptions, BearerAuthenticationHandler>("BearerAuthentication", null);
        }
    }
}

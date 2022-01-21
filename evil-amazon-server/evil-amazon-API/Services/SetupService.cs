using entities.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evil_amazon_server.Services
{
    public class SetupService
    {
        public void Init(EvilAmazonDbContext context)
        {
            context.Database.Migrate();
        }
    }
}

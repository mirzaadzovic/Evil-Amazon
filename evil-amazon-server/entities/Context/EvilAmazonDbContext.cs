using entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace entities.Context
{
    public class EvilAmazonDbContext:DbContext
    {
        public EvilAmazonDbContext(DbContextOptions<EvilAmazonDbContext> options):base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            builder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            builder.Entity<UserRole>()
                .HasKey(nameof(UserRole.UserId), nameof(UserRole.RoleId));

            builder.Entity<Product>()
                 .Property(p => p.Price)
                 .HasColumnType("money");

            builder.Entity<Order>()
                .Property(o => o.SubtotalPrice)
                .HasColumnType("money");

            builder.Entity<OrderProduct>()
                .Property(o => o.Price)
                .HasColumnType("money");


            builder.Entity<ProductType>().HasData(new ProductType()
            {
                ProductTypeId=1,
                TypeName="Tech"
            });

            builder.Entity<ProductType>().HasData(new ProductType()
            {
                ProductTypeId = 2,
                TypeName = "Books"
            });

            builder.Entity<ProductType>().HasData(new ProductType()
            {
                ProductTypeId = 3,
                TypeName = "Clothes"
            });

            builder.Entity<ProductType>().HasData(new ProductType()
            {
                ProductTypeId = 4,
                TypeName = "Gadgets"
            });

            builder.Entity<ProductType>().HasData(new ProductType()
            {
                ProductTypeId = 5,
                TypeName = "Other"
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId=1,
                Name="Alexa",
                ProductTypeId=1,
                Info="Makes weird noises at 3 AM and freaks you out",
                Price=49.99M,
                DateAdded=DateTime.Now,
                ProductCode=Guid.NewGuid(),
                ImageUrl= "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*",
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId = 2,
                Name = "Female Bestseller",
                ProductTypeId = 2,
                Info = "Boost your ego and hate men",
                Price = 24.99M,
                DateAdded = DateTime.Now,
                ProductCode=Guid.NewGuid(),
                ImageUrl = "https://m.media-amazon.com/images/I/61ii0vPLUlL.jpg",
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId = 3,
                Name = "Wool socks",
                ProductTypeId = 3,
                Info = "Become real Slavic patriot",
                Price = 5.69M,
                DateAdded = DateTime.Now,
                ProductCode=Guid.NewGuid(),

                ImageUrl = "https://i.cdn.nrholding.net/60147363/550/550",
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId = 4,
                Name = "Golden necklace",
                ProductTypeId = 5,
                Info = "Not stolen, I swear on my grandfather's grave",
                Price = 199.99M,
                DateAdded = DateTime.Now,
                ProductCode = Guid.NewGuid(),
                ImageUrl= "https://m.media-amazon.com/images/I/810dKPjq26L._AC_UL1500_.jpg"
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId = 5,
                Name = "Lebron's jersey",
                ProductTypeId = 5,
                Info = "Look like a dork who takes pickup-basketball too serious",
                Price = 59.99M,
                DateAdded = DateTime.Now,
                ProductCode = Guid.NewGuid(),
                ImageUrl= "https://m.media-amazon.com/images/I/91Qr228LQZL._SL1500_.jpg",
            });

            builder.Entity<Product>().HasData(new Product()
            {
                ProductId = 6,
                Name = "New Age BS Book",
                ProductTypeId = 2,
                Info = "Act like you're wiser than your friends",
                Price = 23.99M,
                DateAdded = DateTime.Now,
                ProductCode = Guid.NewGuid(),
                ImageUrl= "https://images-na.ssl-images-amazon.com/images/I/91oKKezrg0L.jpg",
            });

        }

    }
}

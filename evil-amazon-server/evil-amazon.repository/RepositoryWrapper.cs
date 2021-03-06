using entities.Context;
using evil_amazon.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using evil_amazon.repository.Mapper;
using evil_amazon.repository.Helpers;

namespace evil_amazon.repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly IProductRepository _products;
        private readonly IUserRepository _users;
        private readonly IJWTService _jwtService;
        private readonly EvilAmazonDbContext _context;
        public IProductRepository Products
        {
            get
            {
                if (_products == null)
                    return new ProductRepository(_context);
                return _products;
            }
        }

        public IUserRepository Users
        {
            get
            {
                if (_users == null)
                    return new UserRepository(_context);
                return _users;
            }
        }

        public IJWTService JWTService
        {
            get
            {
                if (_jwtService == null)
                    return new JwtService();
                return _jwtService;
            }
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        public RepositoryWrapper(EvilAmazonDbContext context)
        {
            _context = context;
        }
    }
}

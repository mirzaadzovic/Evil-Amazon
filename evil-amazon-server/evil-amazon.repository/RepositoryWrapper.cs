using entities.Context;
using evil_amazon.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using evil_amazon.repository.Mapper;

namespace evil_amazon.repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly IProductRepository _products;
        private readonly EvilAmazonDbContext _context;
        public IProductRepository Products { get
            {
                if (_products == null)
                    return new ProductRepository(_context);
                return _products;
            } }

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

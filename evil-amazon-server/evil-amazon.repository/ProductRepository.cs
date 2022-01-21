using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using entities.Context;
using entities.Models;
using evil_amazon.contracts;
using evil_amazon.dtos;
using evil_amazon.dtos.Requests;

namespace evil_amazon.repository
{
    public class ProductRepository : BaseCRUDRepository<ProductDto, Product, ProductUpsertDto, ProductUpsertDto>, IProductRepository
    {
        public ProductRepository(EvilAmazonDbContext context) : base(context)
        {
        }

        public IEnumerable GetByName(string query)
        {
            var set = _context.Set<Product>()
                .Where(p => p.Name.ToLower().Contains(query.ToLower()));

            return _mapper.Map<List<ProductDto>>(set);
        }
    }
}

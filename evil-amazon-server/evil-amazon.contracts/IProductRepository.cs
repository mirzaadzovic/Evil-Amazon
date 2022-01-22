using entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using evil_amazon.dtos.Requests;
using evil_amazon.dtos;
using System.Collections;

namespace evil_amazon.contracts
{
    public interface IProductRepository:ICRUDRepository<ProductDto, Product, ProductUpsertDto, ProductUpsertDto>
    {
        Task<IEnumerable> GetByName(string query);
    }
}

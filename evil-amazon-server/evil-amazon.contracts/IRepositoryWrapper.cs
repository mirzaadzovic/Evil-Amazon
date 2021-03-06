using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface IRepositoryWrapper
    {
        IProductRepository Products { get; }
        IUserRepository Users { get; }
        IJWTService JWTService { get; }
        Task Save();
    }
}

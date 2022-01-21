using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface IReadRepository<T, TDb> where T : class where TDb : class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
    }
}

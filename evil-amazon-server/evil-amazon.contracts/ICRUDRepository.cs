using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface ICRUDRepository<T, TDb, TInsert, TUpdate>:IReadRepository<T, TDb> where T:class where TDb : class where TInsert : class where TUpdate : class
    {
        T Insert(TInsert request);
        T Update(int id, TUpdate request);
        T Delete(int id);
    }
}

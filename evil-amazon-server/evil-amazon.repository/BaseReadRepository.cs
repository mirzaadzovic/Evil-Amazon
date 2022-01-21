using AutoMapper;
using entities.Context;
using evil_amazon.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.repository
{
    public class BaseReadRepository<T, TDb> : IReadRepository<T, TDb> where T : class where TDb : class
    {
        protected readonly EvilAmazonDbContext _context;
        protected readonly IMapper _mapper= Mapper.Mapper.MapperObject;

        public BaseReadRepository(EvilAmazonDbContext context)
        {
            _context = context;
        }
        public IEnumerable<T> GetAll()
        {
            var set = _context.Set<TDb>();
            return _mapper.Map<List<T>>(set);
        }

        public T GetById(int id)
        {
            var item = _context.Set<TDb>().Find(id);
            return _mapper.Map<T>(item);
            
        }
    }
}

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
    public class BaseCRUDRepository<T, TDb, TInsert, TUpdate> : BaseReadRepository<T, TDb>, ICRUDRepository<T, TDb, TInsert, TUpdate> where T : class where TDb : class where TInsert : class where TUpdate : class
    {
        public BaseCRUDRepository(EvilAmazonDbContext context) : base(context)
        {
        }
        public virtual T Insert(TInsert request)
        {
            TDb entity = _mapper.Map<TDb>(request);
            _context.Set<TDb>().Add(entity);
            return _mapper.Map<T>(entity);
        }

        public virtual T Update(int id, TUpdate request)
        {
            var entity = _context.Set<TDb>().Find(id);
            _mapper.Map(request, entity);
            return _mapper.Map<T>(entity);
        }

        public virtual T Delete(int id)
        {
            var set = _context.Set<TDb>();
            var entity = set.Find(id);
            set.Remove(entity);
            return _mapper.Map<T>(entity);
        }
    }
}

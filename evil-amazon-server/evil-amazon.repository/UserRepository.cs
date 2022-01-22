using entities.Context;
using entities.Models;
using evil_amazon.contracts;
using evil_amazon.dtos;
using evil_amazon.dtos.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.repository
{
    public class UserRepository : BaseCRUDRepository<UserDto, User, UserUpsertDto, UserUpsertDto>, IUserRepository
    {
        public UserRepository(EvilAmazonDbContext context) : base(context)
        {
        }

        public override UserDto Insert(UserUpsertDto request)
        {
            var entity = _mapper.Map<User>(request);
            entity.GeneratePassword(request.Password);
            entity.DateRegistered = DateTime.Now;

            _context.Users.Add(entity);
            _context.SaveChanges();

            var role = new UserRole() 
            { 
                RoleId=1,
                UserId=entity.UserId,
            };

            _context.UserRoles.Add(role);

            return _mapper.Map<UserDto>(entity);
        }

        public UserDto Login(string username, string password)
        {
            var user = _context.Set<User>().FirstOrDefault(u => u.Username == username);

            if (user == null)
                return null;

            if (user.ValidateUser(password))
                return _mapper.Map<UserDto>(user);

            return null;
        }
    }
}

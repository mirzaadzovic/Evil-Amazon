using entities.Context;
using entities.Models;
using evil_amazon.contracts;
using evil_amazon.dtos;
using evil_amazon.dtos.Requests;
using evil_amazon.repository.Helpers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.repository
{
    public class UserRepository : BaseCRUDRepository<UserDto, User, UserUpsertDto, UserUpsertDto>, IUserRepository
    {
        private readonly JwtService _jwtService;
        public UserRepository(EvilAmazonDbContext context) : base(context)
        {
            _jwtService = new JwtService();
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

        public UserDto Login(string email, string password)
        {
            var user = _context.Set<User>()
                .Include(u=>u.UserRoles)
                .ThenInclude(u=>u.Role)
                .FirstOrDefault(u => u.Email == email);

            if (user == null)
                return null;

            if (user.ValidateUser(password))
            {
                var userDto= _mapper.Map<UserDto>(user);
                userDto.AddRoles(user);
                return userDto;
            }

            return null;
        }

        
    }
}

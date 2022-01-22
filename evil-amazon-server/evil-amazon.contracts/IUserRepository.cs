using evil_amazon.dtos;
using evil_amazon.dtos.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface IUserRepository:ICRUDRepository<UserDto, UserDto, UserUpsertDto, UserUpsertDto>
    {
        UserDto Login(string username, string password);
    }
}

using evil_amazon.dtos;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface IJWTService
    {
        string Sign(UserDto user);
        JwtSecurityToken Verify(string token);
    }
}

using entities.Models;
using evil_amazon.contracts;
using evil_amazon.dtos;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.repository.Helpers
{
    public class JwtService:IJWTService
    {
        private readonly string _securityKey = "_74r4d4n&m4ljug4n_";
        public string Sign(UserDto user)
        {

            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_securityKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(user.UserId.ToString(), null, null, DateTime.Now, DateTime.Now.AddHours(0));
            var token = new JwtSecurityToken(header, payload);
            
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public bool Verify(string token)
        {
            return true;
        }

        
    }
}

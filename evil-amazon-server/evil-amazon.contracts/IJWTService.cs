using evil_amazon.dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.contracts
{
    public interface IJWTService
    {
        string Sign(UserDto user);
        bool Verify(string token);
    }
}

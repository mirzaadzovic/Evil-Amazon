using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.dtos.Requests
{
    public class UserUpsertDto
    {
        [MinLength(2)]
        public string FirstName { get; set; }
        [MinLength(2)]
        public string LastName { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [MinLength(2)]
        public string Username { get; set; }
        [MinLength(8)]
        public string Password { get; set; }
    }
}

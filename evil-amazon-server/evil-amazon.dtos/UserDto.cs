using entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.dtos
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public DateTime DateRegistered { get; set; }
        public List<string> Roles { get; set; } = new List<string>();

        public void AddRoles(User user)
        {
            foreach(var role in user.UserRoles)
            {
                Roles.Add(role.Role.Name);
            }
        }
    }
}

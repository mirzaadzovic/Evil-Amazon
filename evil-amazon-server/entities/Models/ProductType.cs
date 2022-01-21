using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace entities.Models
{
    public class ProductType
    {
        [Key]
        public int ProductTypeId { get; set; }
        public string TypeName { get; set; }
    }
}

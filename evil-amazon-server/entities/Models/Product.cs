using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace entities.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [MaxLength(30)]
        public string Name { get; set; }
        [MaxLength(60)]
        public string Info { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public Guid ProductCode { get; set; }
        public DateTime DateAdded { get; set; }
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        public IEnumerable<OrderProduct> OrderProducts { get; set; }

    }
}

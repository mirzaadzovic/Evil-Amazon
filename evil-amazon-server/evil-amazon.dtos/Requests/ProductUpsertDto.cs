using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.dtos.Requests
{
    public class ProductUpsertDto
    {
        public string Name { get; set; }
        public string Info { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public Guid ProductCode { get; set; }
        public DateTime DateAdded { get; set; }
        public int ProductTypeId { get; set; }
    }
}

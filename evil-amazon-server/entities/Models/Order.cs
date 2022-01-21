using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace entities.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public Guid OrderCode { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime? ShippedDate { get; set; }
        public bool IsGift { get; set; }
        public decimal SubtotalPrice { get; set; }
        public IEnumerable<OrderProduct> OrderProducts { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}

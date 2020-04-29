using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Compra
    {
        public int Id { get; set; }
        public int Id_mercado { get; set; }
        public int Id_producto { get; set; }
         public int cantidad { get; set; }
    }
}
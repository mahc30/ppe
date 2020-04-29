using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Unidad_De_Medida { get; set; }
        public string Boolean { get; set; }
   }
}
using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Pais
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public Boolean Estado { get; set; }
   }
}
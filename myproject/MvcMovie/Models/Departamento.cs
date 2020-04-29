using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Departamento
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public Pais Pais { get; set; }
         public Boolean Estado { get; set; }
    }
}
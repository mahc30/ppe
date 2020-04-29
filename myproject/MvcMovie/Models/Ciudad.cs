using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Ciudad
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public Departamento Departamento { get; set; }
        public Boolean Estado { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Propietario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public Apartamento Apartamento { get; set; }
        public int Apartamento_ID { get; set; }
        public ICollection<Mercado> Mercados { get; set;}
    }
}
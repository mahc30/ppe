using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Apartamento
    {
        public int Id { get; set; }
        public string Numero { get; set; }
        public string Piso { get; set; }
        public string Bloque { get; set; }
        public UnidadResidencial Unidad { get; set; }
        public Boolean Estado { get; set; }

    }
}
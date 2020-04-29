using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class UnidadResidencial
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public Ciudad Ciudad { get; set; }
        public int ID_Ciudad {get; set;}
        public Boolean Estado { get; set; }
   }
}
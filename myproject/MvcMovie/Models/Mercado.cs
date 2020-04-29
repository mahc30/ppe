using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Mercado
    {
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime Fecha_Creacion { get; set; }
        public Propietario Propietario { get; set; }
        public Producto[] Productos {get; set;}
        public Boolean Estado { get; set; }
        //TODO Finalizado Cancelado Creado
    }
}
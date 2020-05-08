using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MercadoAngelCalle.Models
{
    public class Mercao
    {
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime FechaCreacion { get; set; }
        public int PropietarioId { get; set; }
        public Propietario Propietario { get; set; }

        public string Estado { get; set; }
    }
}

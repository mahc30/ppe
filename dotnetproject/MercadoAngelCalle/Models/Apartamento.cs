using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MercadoAngelCalle.Models
{
    public class Apartamento
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public int Piso { get; set; }
        public int Bloque { get; set; }
        public int UnidadResidencialId { get; set; }
        public UnidadResidencial UnidadResidencial { get; set; }

        public Boolean Estado { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MercadoAngelCalle.Models;

namespace Mercado.Data
{
    public class MercadoAngelCalleContext : DbContext
    {
        public MercadoAngelCalleContext(DbContextOptions<MercadoAngelCalleContext> options)
            : base(options)
        {
        }
        public DbSet<Pais> Pais { get; set; }
        public DbSet<Departamento> Departamento { get; set; }
        public DbSet<Ciudad> Ciudad { get; set; }
        public DbSet<UnidadResidencial> UnidadResidencial { get; set; }
        public DbSet<Apartamento> Apartamento { get; set; }
        public DbSet<Propietario> Propietario { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Mercao> Mercado { get; set; }
        public DbSet<Compra> Compra { get; set; }
    }
}


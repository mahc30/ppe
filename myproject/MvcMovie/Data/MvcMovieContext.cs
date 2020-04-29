using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;

namespace MvcMovie.Data
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext (DbContextOptions<MvcMovieContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }

        public DbSet<MvcMovie.Models.Ciudad> Ciudad { get; set; }

        public DbSet<MvcMovie.Models.Apartamento> Apartamento { get; set; }

        public DbSet<MvcMovie.Models.Compra> Compra { get; set; }

        public DbSet<MvcMovie.Models.Departamento> Departamento { get; set; }

        public DbSet<MvcMovie.Models.Pais> Pais { get; set; }

        public DbSet<MvcMovie.Models.Producto> Producto { get; set; }

        public DbSet<MvcMovie.Models.Mercado> Mercado { get; set; }

        public DbSet<MvcMovie.Models.Propietario> Propietario { get; set; }
    }
}
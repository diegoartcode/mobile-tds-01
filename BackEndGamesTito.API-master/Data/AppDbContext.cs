using Microsoft.EntityFrameworkCore;
using BackEndGamesTito.API.Data.Models;

namespace BackEndGamesTito.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Jogo> Jogos { get; set; }
    }
}
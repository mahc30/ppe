using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Data;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
    public class MercadoController : Controller
    {
        private readonly MvcMovieContext _context;

        public MercadoController(MvcMovieContext context)
        {
            _context = context;
        }

        // GET: Mercado
        public async Task<IActionResult> Index()
        {
            return View(await _context.Mercado.ToListAsync());
        }

        // GET: Mercado/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercado = await _context.Mercado
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mercado == null)
            {
                return NotFound();
            }

            return View(mercado);
        }

        // GET: Mercado/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Mercado/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Fecha_Creacion,Estado")] Mercado mercado)
        {
            if (ModelState.IsValid)
            {
                _context.Add(mercado);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(mercado);
        }

        // GET: Mercado/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercado = await _context.Mercado.FindAsync(id);
            if (mercado == null)
            {
                return NotFound();
            }
            return View(mercado);
        }

        // POST: Mercado/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Fecha_Creacion,Estado")] Mercado mercado)
        {
            if (id != mercado.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(mercado);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MercadoExists(mercado.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(mercado);
        }

        // GET: Mercado/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercado = await _context.Mercado
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mercado == null)
            {
                return NotFound();
            }

            return View(mercado);
        }

        // POST: Mercado/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var mercado = await _context.Mercado.FindAsync(id);
            _context.Mercado.Remove(mercado);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MercadoExists(int id)
        {
            return _context.Mercado.Any(e => e.Id == id);
        }
    }
}

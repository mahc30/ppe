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
    public class ApartamentoController : Controller
    {
        private readonly MvcMovieContext _context;

        public ApartamentoController(MvcMovieContext context)
        {
            _context = context;
        }

        // GET: Apartamento
        public async Task<IActionResult> Index()
        {
            return View(await _context.Apartamento.ToListAsync());
        }

        // GET: Apartamento/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var apartamento = await _context.Apartamento
                .FirstOrDefaultAsync(m => m.Id == id);
            if (apartamento == null)
            {
                return NotFound();
            }

            return View(apartamento);
        }

        // GET: Apartamento/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Apartamento/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Numero,Piso,Bloque,Estado")] Apartamento apartamento)
        {
            if (ModelState.IsValid)
            {
                _context.Add(apartamento);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(apartamento);
        }

        // GET: Apartamento/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var apartamento = await _context.Apartamento.FindAsync(id);
            if (apartamento == null)
            {
                return NotFound();
            }
            return View(apartamento);
        }

        // POST: Apartamento/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Numero,Piso,Bloque,Estado")] Apartamento apartamento)
        {
            if (id != apartamento.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(apartamento);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ApartamentoExists(apartamento.Id))
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
            return View(apartamento);
        }

        // GET: Apartamento/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var apartamento = await _context.Apartamento
                .FirstOrDefaultAsync(m => m.Id == id);
            if (apartamento == null)
            {
                return NotFound();
            }

            return View(apartamento);
        }

        // POST: Apartamento/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var apartamento = await _context.Apartamento.FindAsync(id);
            _context.Apartamento.Remove(apartamento);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ApartamentoExists(int id)
        {
            return _context.Apartamento.Any(e => e.Id == id);
        }
    }
}

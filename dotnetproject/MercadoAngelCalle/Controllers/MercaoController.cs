using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Mercado.Data;
using MercadoAngelCalle.Models;

namespace MercadoAngelCalle.Controllers
{
    public class MercaoController : Controller
    {
        private readonly MercadoAngelCalleContext _context;

        public MercaoController(MercadoAngelCalleContext context)
        {
            _context = context;
        }

        // GET: Mercao
        public async Task<IActionResult> Index()
        {
            var mercadoAngelCalleContext = _context.Mercado.Include(m => m.Propietario);
            return View(await mercadoAngelCalleContext.ToListAsync());
        }

        // GET: Mercao/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercao = await _context.Mercado
                .Include(m => m.Propietario)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mercao == null)
            {
                return NotFound();
            }

            return View(mercao);
        }

        // GET: Mercao/Create
        public IActionResult Create()
        {
            ViewData["PropietarioId"] = new SelectList(_context.Propietario, "Id", "Id");
            return View();
        }

        // POST: Mercao/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,FechaCreacion,PropietarioId,Estado")] Mercao mercao)
        {
            if (ModelState.IsValid)
            {
                _context.Add(mercao);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["PropietarioId"] = new SelectList(_context.Propietario, "Id", "Id", mercao.PropietarioId);
            return View(mercao);
        }

        // GET: Mercao/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercao = await _context.Mercado.FindAsync(id);
            if (mercao == null)
            {
                return NotFound();
            }
            ViewData["PropietarioId"] = new SelectList(_context.Propietario, "Id", "Id", mercao.PropietarioId);
            return View(mercao);
        }

        // POST: Mercao/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,FechaCreacion,PropietarioId,Estado")] Mercao mercao)
        {
            if (id != mercao.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(mercao);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MercaoExists(mercao.Id))
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
            ViewData["PropietarioId"] = new SelectList(_context.Propietario, "Id", "Id", mercao.PropietarioId);
            return View(mercao);
        }

        // GET: Mercao/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mercao = await _context.Mercado
                .Include(m => m.Propietario)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mercao == null)
            {
                return NotFound();
            }

            return View(mercao);
        }

        // POST: Mercao/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var mercao = await _context.Mercado.FindAsync(id);
            _context.Mercado.Remove(mercao);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MercaoExists(int id)
        {
            return _context.Mercado.Any(e => e.Id == id);
        }
    }
}

// render/RenderSecciones.js

import { generarProductoHTML } from "../Components/Cardproducto.js";

export function renderSecciones(categorias, productosPorCategoria, contenedor) {
  const html = categorias
    .map(cat => {
      const productos = productosPorCategoria[cat.id] || [];
      if (!productos.length) return "";

      // Generamos HTML de los productos visibles inicialmente
      const productosHTML = productos
        .slice(0, 3)
        .map(prod => generarProductoHTML(prod, prod.globalIndex))
        .join("");

      return `
        <section id="${cat.id}" class="categoria-section">
          <div class="productos-grid">
            ${productosHTML}
          </div>
        </section>
      `;
    })
    .join("");

  contenedor.innerHTML = html;

  // --- Aplicar CSS Grid responsive y botón "Ver más" ---
  document.querySelectorAll(".categoria-section").forEach(section => {
    const grid = section.querySelector(".productos-grid");
    if (!grid) return;

    const productos = productosPorCategoria[section.id] || [];

    const updateLayout = () => {
      const width = window.innerWidth;
      let columnas = 1;
      let limiteProductos = 1; // Para mostrar el botón

      if (width >= 1024) { // Desktop
        columnas = Math.min(productos.length, 3);
        limiteProductos = 3;
      } else if (width >= 768) { // Tablet
        columnas = Math.min(productos.length, 2);
        limiteProductos = 2;
      } else { // Móvil
        columnas = 1;
        limiteProductos = 2;
      }

      grid.style.display = "grid";
      grid.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
      grid.style.gap = "16px";

      // Agregar botón "Ver más" si hay más productos que el límite
      let verMas = section.querySelector(".btn-ver-mas");
      if (productos.length > limiteProductos) {
        if (!verMas) {
          verMas = document.createElement("a");
          verMas.classList.add("btn-ver-mas");
          verMas.href = `/categoria.html?id=${section.id}`;
          verMas.textContent = "Ver más";
          section.appendChild(verMas);
        }
      } else if (verMas) {
        verMas.remove();
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
  });
}

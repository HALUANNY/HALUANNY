// render/RenderSecciones.js

import { generarProductoHTML } from "../Components/Cardproducto.js";

export function renderSecciones(categorias, productosPorCategoria, contenedor) {
  const html = categorias
    .map(cat => {
      const productos = productosPorCategoria[cat.id] || [];
      if (!productos.length) return "";

      return `
        <section class="categoria-section">
          <div class="productos-grid">
            ${productos.map(generarProductoHTML).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  contenedor.innerHTML = html;
}

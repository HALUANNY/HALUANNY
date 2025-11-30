// render/RenderSecciones.js

import { generarProductoHTML } from "../Components/Cardproducto.js";

export function renderSecciones(categorias, productosPorCategoria, contenedor) {
  const html = categorias
    .map(cat => {
      const productos = productosPorCategoria[cat.id] || [];
      if (!productos.length) return "";

      return `
        <section id="${cat.id}" class="categoria-section">
          <div class="productos-grid">
            ${productos
              .map(prod => generarProductoHTML(prod, prod.globalIndex))
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  contenedor.innerHTML = html;
}

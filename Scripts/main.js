import { categorias, productosDestacados } from "../Data/catalogo.js";

// ==============================
// RENDER CATEGORÍAS (con overlay)
// ==============================
const categoriaList = document.querySelector("#categoria-list");

categoriaList.innerHTML = categorias
  .map(cat => `
    <article class="category-item">
      <img src="${cat.img}" alt="${cat.nombre}">
      <div class="category-overlay">
        <span>${cat.nombre}</span>
      </div>
    </article>
  `)
  .join("");



// ==============================
// 1. Agrupar productos por categoría
// ==============================
const productosPorCategoria = {};
productosDestacados.forEach(prod => {
  if (!productosPorCategoria[prod.categoria]) {
    productosPorCategoria[prod.categoria] = [];
  }
  productosPorCategoria[prod.categoria].push(prod);
});

// ==============================
// 2. Contenedor principal de todas las secciones
// ==============================
const contenedorSecciones = document.querySelector("#contenedor-secciones");

// ==============================
// 3. Función para generar un producto HTML
// ==============================
function generarProductoHTML(prod) {
  return `
    <article class="producto-card product-detail">
      <div class="detail-img">
        <img src="${prod.img}" alt="${prod.nombre}">
      </div>

      <h3 class="producto-nombre">${prod.nombre}</h3>

      <p class="price">$${prod.precio.toLocaleString()}</p>

      <ul class="specs">
        <li><strong>Color:</strong> ${prod.color}</li>
        <li><strong>Tallas:</strong> ${prod.tallas.join(", ")}</li>
        <li><strong>Material:</strong> ${prod.material}</li>
      </ul>

      <button class="cta">Has tu Pedido</button>
    </article>
  `;
}

// ==============================
// 4. Función para generar una sección por categoría
// ==============================
function generarSeccionCategoria(cat, productos) {
  return `
    <section class="categoria-section">
      <div class="productos-grid">
        ${productos.map(generarProductoHTML).join("")}
      </div>
    </section>
  `;
}

// ==============================
// 5. Render final de todas las secciones
// ==============================
contenedorSecciones.innerHTML = categorias
  .map(cat => {
    const productos = productosPorCategoria[cat.id] || [];
    if (productos.length === 0) return "";
    return generarSeccionCategoria(cat, productos);
  })
  .join("");



  
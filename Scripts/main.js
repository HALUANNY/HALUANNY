import { categorias, productosDestacados } from "./Data/catalogo.js";
// ==============================
// RENDER CATEGORÍAS
// ==============================
const categoriaList = document.querySelector("#categoria-list");

categoriaList.innerHTML = categorias
  .map(cat => `
    <article class="category-item">
      <img src="${cat.img}" alt="${cat.nombre}">
      <h3>${cat.nombre}</h3>
    </article>
  `)
  .join("");

  // ==============================
// RENDER PRODUCTOS DESTACADOS
// ==============================
const productList = document.querySelector("#product-list");

productList.innerHTML = productosDestacados
  .map(prod => `
    <section class="product-detail" id="${prod.categoria}">
      
      <div class="detail-img">
        <img src="${prod.img}" alt="${prod.nombre}">
      </div>

      <h2>${prod.nombre}</h2>
      <p class="price">$ ${prod.precio.toLocaleString("es-CO")}</p>
      <p>${prod.descripcion}</p>

      <ul class="specs">
        <li><strong>Color:</strong> ${prod.color}</li>
        <li><strong>Tallas:</strong> ${prod.tallas.join(", ")}</li>
        <li><strong>Material:</strong> ${prod.material}</li>
      </ul>

      <a href="#" class="cta">Haz tu pedido</a>
      <div class="qr">QR</div>

    </section>
  `)
  .join("");

  
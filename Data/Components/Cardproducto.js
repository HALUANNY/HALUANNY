// components/CardProducto.js

export function generarProductoHTML(prod, index) {
  const imgs = prod.img
    .map((src, i) =>
      `<img src="${src}" alt="${prod.nombre} ${i + 1}" loading="lazy" draggable="false">`
    )
    .join("");

  const indicadores = prod.img
    .map((_, i) =>
      `<span class="carousel-dot" data-prod="${index}" data-img="${i}"></span>`
    )
    .join("");

  const tallas = prod.tallas
    .map(t => `<button type="button" class="talla-btn" data-talla="${t}">${t}</button>`)
    .join("");

  return `
    <article class="producto-card product-detail">

      <div class="detail-img">
        <div class="detail-img-track" data-prod="${index}">
          ${imgs}
        </div>
      </div>

      <div class="carousel-indicators">
        ${indicadores}
      </div>

      <h3 class="producto-nombre">${prod.nombre}</h3>
      <p class="price">$${prod.precio.toLocaleString()}</p>

      <ul class="specs">
        <li><strong>Color:</strong> ${prod.color}</li>
        <li><strong>Material:</strong> ${prod.material}</li>
        <li class="talla-item">
          <strong>Talla:</strong>
          <div class="tallas-container">${tallas}</div>
        </li>
      </ul>

      <button class="cta" data-index="${index}">Haz tu Pedido</button>
    </article>
  `;
}

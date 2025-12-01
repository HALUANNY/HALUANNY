// Data/Components/CardProducto.js
export function generarProductoHTML(prod, index) {
  const colorInicial = Object.keys(prod.colores)[0];
  const imagenes = prod.colores[colorInicial];

  const dots = imagenes
    .map((_, i) => `<span class="carousel-dot" data-img="${i}"></span>`)
    .join("");

  const botonesColores = Object.keys(prod.colores)
    .map(
      (color) => `
      <button 
        class="color-btn" 
        data-color="${color}"
        style="background:${color};">
      </button>
    `
    )
    .join("");

  return `
    <article class="producto-card" data-index="${index}">

      <div class="detail-img-container">
        <div class="detail-img-track" data-color="${colorInicial}">
          ${imagenes
            .map(
              (src, i) =>
                `<img src="${src}" alt="${prod.nombre} ${
                  i + 1
                }" loading="lazy">`
            )
            .join("")}
        </div>

        <div class="carousel-indicators">${dots}</div>
      </div>

      <h3>${prod.nombre}</h3>
      <div class="tela-description"> <p>${prod.material}</p></div>
      <p class="precio">$${prod.precio.toLocaleString("es-CO")}</p>

      

      <div class="colores-container">
        ${botonesColores}
      </div>

      <div class="tallas-container">
        ${prod.tallas
          .map(
            (t) => `<button class="talla-btn" data-talla="${t}">${t}</button>`
          )
          .join("")}
      </div>

      <button class="cta">Realizar Compra</button>

    </article>
  `;
}

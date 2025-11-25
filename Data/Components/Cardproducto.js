// Data/Components/CardProducto.js

export function generarProductoHTML(prod, index) {

  // Asegurar estructura de colores
  if (!prod.colores || typeof prod.colores !== "object") {
    console.error("El producto no tiene 'colores' definido:", prod);
    return "";
  }

  // Primer color como inicial
  const colorInicial = Object.keys(prod.colores)[0];
  const imagenes = prod.colores[colorInicial];

  if (!Array.isArray(imagenes)) {
    console.error(`No hay imágenes para el color ${colorInicial} del producto ${prod.nombre}`);
    return "";
  }

  // Dots del carrusel
  const dots = imagenes
    .map((_, i) => `<span class="carousel-dot" data-img="${i}"></span>`)
    .join("");

  // Botones de colores
  const botonesColores = Object.keys(prod.colores)
    .map(
      (color) => `
        <button 
          class="color-btn" 
          data-color="${color}"
          title="${color}"
          style="background:${color};">
        </button>
      `
    )
    .join("");

  // HTML final de la tarjeta
  return `
    <article class="producto-card" data-index="${index}">

      <div class="detail-img-container">
        <div class="detail-img-track" data-color="${colorInicial}">
          ${imagenes
            .map(
              (src, i) =>
                `<img src="${src}" alt="${prod.nombre} ${i + 1}" loading="lazy" draggable="false">`
            )
            .join("")}
        </div>

        <div class="carousel-indicators">${dots}</div>
      </div>

      <h3>${prod.nombre}</h3>
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

      <button class="cta">Consultar</button>
    </article>
  `;
}

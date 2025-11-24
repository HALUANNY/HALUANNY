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

function generarProductoHTML(prod, index) {
  const imgs = prod.img.map((src, i) =>
    `<img src="${src}" alt="${prod.nombre} ${i+1}" loading="lazy" draggable="false">`
  ).join("");

  const indicadores = prod.img.map((_, i) =>
    `<span class="carousel-dot" data-prod="${index}" data-img="${i}" aria-hidden="true"></span>`
  ).join("");

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
      </ul>
      <li class="talla-item">
      <strong>Talla:</strong>
      <div class="tallas-container">
     ${prod.tallas.map(t => `<button type="button" class="talla-btn" data-talla="${t}">${t}</button>`).join('')}
     </div>
     </li>

      <button class="cta" data-index="${index}">Haz tu Pedido</button>
    </article>
  `;
}
// ==============================
// 3. API WHATSAPP
// ==============================

document.addEventListener("click", function(e) {
  // Selección de talla
  if (e.target.matches(".talla-btn")) {
    const container = e.target.parentElement;
    container.querySelectorAll(".talla-btn").forEach(btn => btn.classList.remove("selected"));
    e.target.classList.add("selected");
  }

  // Botón WhatsApp
  if (e.target.matches(".cta")) {
    const tarjeta = e.target.closest(".producto-card");
    if (!tarjeta) return;

    const productoIndex = parseInt(e.target.dataset.index);
    const producto = productosDestacados[productoIndex];
    if (!producto) return;

    const tallaBtn = tarjeta.querySelector(".talla-btn.selected");
    const talla = tallaBtn ? tallaBtn.dataset.talla : "No seleccionada";

    const mensaje = `Hola, estoy interasad@ en la prenda: ${producto.nombre}, en la Talla: ${talla}.`;

    console.log("Mensaje generado:", mensaje); // <- revisar consola

    const numero = "573002550081"; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  }
});




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


// ==============================
// 6. Lógica del carrusel de imágenes en los productos
// ==============================

// 2) Renderizar
function renderProducts(productos) {
  const contenedor = document.querySelector(".featured-products");
  if (!contenedor) return console.warn("No se encontró .featured-products");
  contenedor.innerHTML = productos.map((p, i) => generarProductoHTML(p, i)).join("");
}

// 3) Init carruseles: detectar la imagen visible por el centro
function initCarruselesScroll() {
  const tracks = document.querySelectorAll(".detail-img-track");
  if (!tracks.length) return;

  tracks.forEach(track => {
    const container = track.parentElement; // .detail-img viewport
    const productCard = track.closest(".product-detail");
    const dots = Array.from(productCard.querySelectorAll(".carousel-dot"));
    const imgs = Array.from(track.querySelectorAll("img"));
    if (!dots.length || !imgs.length) return;

    // marcar primero activo
    dots.forEach((d,i)=> d.classList.toggle("active", i===0));

    // Función que encuentra la imagen cuyo centro está más cerca del centro del container
    function updateActiveDotByCenter() {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDist = Infinity;

      imgs.forEach((img, i) => {
        const r = img.getBoundingClientRect();
        const imgCenter = r.left + r.width / 2;
        const dist = Math.abs(imgCenter - centerX);
        if (dist < minDist) { minDist = dist; closestIndex = i; }
      });

      dots.forEach((d,i) => d.classList.toggle("active", i === closestIndex));
    }

    // RAF-throttle for scroll
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveDotByCenter();
          ticking = false;
        });
        ticking = true;
      }
    }

    container.addEventListener("scroll", onScroll, { passive: true });

    // también al soltar (para asegurar estado final)
    let endTimer = null;
    function onScrollEndTrigger() {
      if (endTimer) clearTimeout(endTimer);
      endTimer = setTimeout(() => updateActiveDotByCenter(), 120); // espera snap
    }
    container.addEventListener("pointerup", onScrollEndTrigger);
    container.addEventListener("touchend", onScrollEndTrigger);

    // resize -> recalcular
    window.addEventListener("resize", () => {
      // esperas un frame para que layout se estabilice
      requestAnimationFrame(updateActiveDotByCenter);
    });

    // cuando las imágenes carguen, recalcula (caso lazy)
    imgs.forEach(img => {
      if (!img.complete) {
        img.addEventListener("load", updateActiveDotByCenter, { once: true });
        img.addEventListener("error", updateActiveDotByCenter, { once: true });
      }
    });

    // primer calculo (pequeño delay para que DOM pinte)
    setTimeout(updateActiveDotByCenter, 60);
  });
}

// Uso: (asegúrate de ejecutar tras DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(productosDestacados);
  initCarruselesScroll();
});

// ==============================
// Loggica scroll pc
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.detail-images');
    if (!el) return;
    let isDown = false, startX, scrollLeft;
    el.addEventListener('mousedown', e => {
        isDown = true;
        el.classList.add('dragging');
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
    });
    window.addEventListener('mouseleave', () => isDown = false);
    window.addEventListener('mouseup', () => isDown = false);
    el.addEventListener('mousemove', e => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - startX;
        const walk = x; // sensibilidad
        el.scrollLeft = scrollLeft - walk;
    });
});



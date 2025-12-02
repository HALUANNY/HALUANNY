import { categorias, productosDestacados } from "../Data/catalogo.js";
import { generarCategorias } from "../Data/Components/Categoria.js";

// ============================================
// ASIGNAR ÍNDICE GLOBAL A CADA PRODUCTO
// ============================================
productosDestacados.forEach((p, i) => {
  p.globalIndex = i;
});

// ============================================
// RENDER BANNER
// ============================================
window.addEventListener("DOMContentLoaded", () => {
  const bannerVideo = document.getElementById("bannerVideo");
  const bannerSource = document.getElementById("bannerSource");
  if (!bannerVideo || !bannerSource) return;

  const basePath = "Assets/IMG/Banner";

  function seleccionarVideo() {
    const ancho = window.innerWidth;
    let srcVideo = "";

    if (ancho >= 1024) srcVideo = `${basePath}/BANNER1.mp4`;
    else if (ancho >= 768) srcVideo = `${basePath}/BANNER1.mp4`;
    else srcVideo = `${basePath}/BANNER2.mp4`;

    if (bannerSource.getAttribute("src") !== srcVideo) {
      bannerSource.setAttribute("src", srcVideo);
      bannerVideo.load();
      bannerVideo.play().catch(() => {});
    }
  }

  seleccionarVideo();
  window.addEventListener("resize", seleccionarVideo);

  // ============================================
  // RENDER CATEGORÍAS (visible al inicio)
  // ============================================
  document.querySelector("#categoria-list").innerHTML = generarCategorias(categorias);

  // ============================================
  // POSTERGAR COMPONENTES SECUNDARIOS
  // ============================================
  import("../Data/Components/Cardproducto.js").then(({ generarProductoHTML }) => {
    import("../Data/Render/Secciones.js").then(({ renderSecciones }) => {
      const productosPorCategoria = productosDestacados.reduce((acc, prod) => {
        (acc[prod.categoria] ||= []).push(prod);
        return acc;
      }, {});

      renderSecciones(
        categorias,
        productosPorCategoria,
        document.querySelector("#contenedor-secciones")
      );
    });
  });

  import("../Data/Components/Footer.js").then(({ Footer }) => {
    document.querySelector("#app-footer").innerHTML = Footer();
  });

  import("../Data/Components/Carrusel.js").then(({ initCarruseles }) => {
    initCarruseles();
  });

  import("../Data/Services/WhatsAppService.js").then(({ enviarWhatsApp }) => {
    // Eventos de WhatsApp quedan aquí
    document.addEventListener("click", (e) => {
      if (!e.target.matches(".cta")) return;
      const tarjeta = e.target.closest(".producto-card");
      const indexGlobal = tarjeta.dataset.index;
      const producto = productosDestacados[indexGlobal];
      const talla = tarjeta.querySelector(".talla-btn.selected")?.dataset.talla || "No seleccionada";
      const color = tarjeta.querySelector(".color-btn.selected")?.dataset.color || "No seleccionado";
      enviarWhatsApp(producto, talla, color);
    });
  });

  import("../Data/Components/ColorController.js").then(({ actualizarColorProducto }) => {
    // Eventos de selección de color
    document.addEventListener("click", (e) => {
      if (!e.target.matches(".color-btn")) return;
      const tarjeta = e.target.closest(".producto-card");
      const indexGlobal = tarjeta.dataset.index;
      const nuevoColor = e.target.dataset.color;
      const contenedorColores = tarjeta.querySelector(".colores-container");
      contenedorColores.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("selected"));
      e.target.classList.add("selected");
      actualizarColorProducto(indexGlobal, nuevoColor);
    });
  });

  // Eventos de selección de talla
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".talla-btn")) return;
    const contenedor = e.target.closest(".tallas-container");
    contenedor.querySelectorAll(".talla-btn").forEach(btn => btn.classList.remove("selected"));
    e.target.classList.add("selected");
  });

  // Scroll a secciones de productos
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".category-item");
    if (!item) return;
    const target = item.dataset.target;
    const section = document.querySelector(target);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

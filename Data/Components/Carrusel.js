// Data/Components/Carrusel.js

export function initCarruseles() {
  const tracks = document.querySelectorAll(".detail-img-track");
  if (!tracks.length) return;

  tracks.forEach((track) => {
    const container = track.parentElement;
    const card = track.closest(".producto-card");
    if (!card) return;

    // --- Función para obtener referencias dinámicas ---
    const updateRefs = () => ({
      imgs: [...track.querySelectorAll("img")],
      dots: [...card.querySelectorAll(".carousel-dot")],
    });

    // --- FORZAR INICIO ---
    container.scrollLeft = 0;

    // --- Actualizar dot activo según imagen visible ---
    function updateDot() {
      const { imgs, dots } = updateRefs();
      if (!imgs.length || !dots.length) return;

      const cRect = container.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;

      let closest = 0;
      let minDist = Infinity;

      imgs.forEach((img, i) => {
        const r = img.getBoundingClientRect();
        const imgCenter = r.left + r.width / 2;
        const dist = Math.abs(imgCenter - centerX);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      dots.forEach((d, i) => d.classList.toggle("active", i === closest));
    }

    // --- Esperar a que termine el scroll (función híbrida) ---
    function waitScrollEnd(callback, delay = 50) {
      let lastScroll = container.scrollLeft;
      const check = () => {
        const current = container.scrollLeft;
        if (Math.abs(current - lastScroll) < 1) {
          callback();
        } else {
          lastScroll = current;
          requestAnimationFrame(check);
        }
      };
      requestAnimationFrame(check);
    }

    // --- Scroll listener ---
    container.addEventListener("scroll", () => {
      waitScrollEnd(updateDot);
    });

    // --- Touchend para móviles ---
    container.addEventListener("touchend", () => {
      waitScrollEnd(updateDot);
    });

    // --- Click en dots ---
    const { dots } = updateRefs();
    dots.forEach((dot, i) => {
      dot.onclick = () => {
        const { imgs } = updateRefs();
        container.scrollLeft = i * imgs[0].clientWidth;
        updateDot();
      };
    });

    // --- IntersectionObserver para detectar imagen activa ---
    const { imgs } = updateRefs();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imgs.indexOf(entry.target);
            const { dots } = updateRefs();
            dots.forEach((d, i) => d.classList.toggle("active", i === index));
          }
        });
      },
      {
        root: container,
        threshold: 0.5, // al menos 50% visible
      }
    );

    imgs.forEach((img) => observer.observe(img));

    // --- Recalibrar al iniciar ---
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", updateDot, { once: true });
      }
    });

    setTimeout(() => {
      container.scrollLeft = 0;
      updateDot();
    }, 50);

    // --- MOUSE DRAG para PC ---
    let isDown = false;
    let startX, scrollLeftStart;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeftStart = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("dragging");
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("dragging");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - startX;
      container.scrollLeft = scrollLeftStart - x * 1.3;
    });
  });
}

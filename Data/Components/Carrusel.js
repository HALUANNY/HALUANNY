export function initCarruseles() {
  const tracks = document.querySelectorAll(".detail-img-track");
  if (!tracks.length) return;

  tracks.forEach(track => {
    const container = track.parentElement;

    // Buscar tarjeta contenedora
    const card = track.closest(".producto-card");
    if (!card) return;

    const dots = [...card.querySelectorAll(".carousel-dot")];
    const imgs = [...track.querySelectorAll("img")];

    if (!dots.length || !imgs.length) return;

    /* 🔥 1) FORZAR SIEMPRE INICIO EN LA PRIMERA IMAGEN */
    container.scrollLeft = 0;
    dots.forEach(d => d.classList.remove("active"));
    dots[0].classList.add("active");

    function updateDot() {
      const cRect = container.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;

      let closest = 0;
      let min = Infinity;

      imgs.forEach((img, i) => {
        const r = img.getBoundingClientRect();
        const imgCenter = r.left + r.width / 2;
        const dist = Math.abs(imgCenter - centerX);

        if (dist < min) {
          min = dist;
          closest = i;
        }
      });

      dots.forEach((d, i) => d.classList.toggle("active", i === closest));
    }

    /* 🔥 2) ACTUALIZAR DOTS EN SCROLL */
    let ticking = false;
    container.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateDot();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Recalibrar cuando cargan las imágenes
    imgs.forEach(img => {
      if (!img.complete) {
        img.addEventListener("load", updateDot, { once: true });
      }
    });

    // Recalibrar al iniciar
    setTimeout(() => {
      container.scrollLeft = 0;
      updateDot();
    }, 50);

    /* 🔥 3) MOUSE DRAG PARA PC */
    let isDown = false;
    let startX, scrollLeftStart;

    container.addEventListener("mousedown", e => {
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

    container.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.3; // Velocidad del drag
      container.scrollLeft = scrollLeftStart - walk;
    });
  });
}

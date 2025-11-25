// components/Carrusel.js

export function initCarruseles() {
  const tracks = document.querySelectorAll(".detail-img-track");
  if (!tracks.length) return;

  tracks.forEach(track => {
    const container = track.parentElement;
    const card = track.closest(".product-detail");
    const dots = [...card.querySelectorAll(".carousel-dot")];
    const imgs = [...track.querySelectorAll("img")];

    if (!dots.length) return;

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

    imgs.forEach(img => {
      if (!img.complete) {
        img.addEventListener("load", updateDot, { once: true });
      }
    });

    setTimeout(updateDot, 80);
  });
}

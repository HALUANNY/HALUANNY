export function initCarruseles(root = document) {
const tracks = root.querySelectorAll
? root.querySelectorAll(".detail-img-track")
: document.querySelectorAll(".detail-img-track");

tracks.forEach((track) => {
const container = track.parentElement;
if (container.dataset.carruselInit === "1") return;
container.dataset.carruselInit = "1";

const updateRefs = () => ({
  imgs: [...track.querySelectorAll("img")],
  dots: [...container.querySelectorAll(".carousel-dot")],
});

container.scrollLeft = 0;

// --- Actualizar dot según porcentaje visible ---
function updateDot(threshold = 0.5) {
  const { imgs, dots } = updateRefs();
  if (!imgs.length || !dots.length) return;

  let maxVisible = 0;
  let activeIndex = 0;

  imgs.forEach((img, i) => {
    const rect = img.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
    const visibleRatio = Math.max(0, visibleWidth / rect.width);

    if (visibleRatio > maxVisible && visibleRatio >= threshold) {
      maxVisible = visibleRatio;
      activeIndex = i;
    }
  });

  dots.forEach((d, i) => d.classList.toggle("active", i === activeIndex));
}

function waitScrollEnd(callback) {
  let lastScroll = container.scrollLeft;
  const check = () => {
    const current = container.scrollLeft;
    if (Math.abs(current - lastScroll) < 1) callback();
    else {
      lastScroll = current;
      requestAnimationFrame(check);
    }
  };
  requestAnimationFrame(check);
}

container.addEventListener("scroll", () => waitScrollEnd(() => updateDot(0.5)));
container.addEventListener("touchend", () => waitScrollEnd(() => updateDot(0.5)));

const { dots } = updateRefs();
dots.forEach((dot, i) => {
  dot.onclick = () => {
    const { imgs } = updateRefs();
    container.scrollLeft = i * imgs[0].clientWidth;
    updateDot(0.5);
  };
});

const { imgs } = updateRefs();
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const index = imgs.indexOf(entry.target);
      const { dots } = updateRefs();
      dots.forEach((d, i) => d.classList.toggle("active", i === index && entry.intersectionRatio >= 0.5));
    });
  },
  { root: container, threshold: [0.5] }
);
imgs.forEach((img) => observer.observe(img));

imgs.forEach((img) => {
  if (!img.complete) img.addEventListener("load", () => updateDot(0.5), { once: true });
});

setTimeout(() => { container.scrollLeft = 0; updateDot(0.5); }, 50);

// --- Drag mouse para desktop ---
let isDown = false, startX, scrollLeftStart;
container.addEventListener("mousedown", (e) => { isDown = true; container.classList.add("dragging"); startX = e.pageX - container.offsetLeft; scrollLeftStart = container.scrollLeft; });
container.addEventListener("mouseleave", () => { isDown = false; container.classList.remove("dragging"); });
container.addEventListener("mouseup", () => { isDown = false; container.classList.remove("dragging"); });
container.addEventListener("mousemove", (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - startX; container.scrollLeft = scrollLeftStart - x * 1.3; });

});
}
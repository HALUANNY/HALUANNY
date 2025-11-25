// components/Categoria.js

export function generarCategorias(categorias) {
  return categorias
    .map(cat => `
      <article class="category-item">
        <img src="${cat.img}" alt="${cat.nombre}">
        <div class="category-overlay">
          <span>${cat.nombre}</span>
        </div>
      </article>
    `)
    .join("");
}

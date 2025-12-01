// components/Categoria.js

export function generarCategorias(categorias) {
  return categorias
    .map(
      (cat) => `
      <article class="category-item" data-target="#${cat.id}">
        <img src="${cat.img}" alt="${cat.nombre}">
        <div class="category-overlay">
          <span>${cat.nombre}</span>
        </div>
      </article>
    `
    )
    .join("");
}

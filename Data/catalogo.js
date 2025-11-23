// ==============================
// CATEGORÍAS
// ==============================
export const categorias = [
  {
    id: "vestidos",
    nombre: "Vestidos",
    img: "./Assets/IMG/Categories/VestidoCategories.jpg"
  },
  {
    id: "blusas",
    nombre: "Blusas",
    img: "./Assets/IMG/Categories/BlusaCategories.jpg"
  },
  {
    id: "pantalon",
    nombre: "Pantalón",
    img: "./Assets/IMG/Categories/PantalonCategories.jpg"
  },
  {
    id: "conjuntos",
    nombre: "Conjuntos",
    img: "./Assets/IMG/Categories/ConjuntoCategories.jpg"
  }
];




// ==============================
// PRODUCTOS DESTACADOS POR CATEGORÍA
// ==============================
export const productosDestacados = [
  // Vestidos
  {
    categoria: "vestidos",
    nombre: "Vestido Lino Corte A",
    precio: 249000,
    descripcion: "Diseño en lino 100% con caída natural.",
    color: "Beige",
    tallas: ["S", "M", "L"],
    material: "Lino",
    img: "assets/img/productos/vestido-lino.jpg"
  },
  {
    categoria: "vestidos",
    nombre: "Vestido Seda Floral",
    precio: 269000,
    descripcion: "Seda ligera con estampado floral elegante.",
    color: "Rosa",
    tallas: ["S", "M", "L"],
    material: "Seda",
    img: "assets/img/productos/vestido-seda-floral.jpg"
  },

  // Blusas
  {
    categoria: "blusas",
    nombre: "Blusa Seda Minimal",
    precio: 199000,
    descripcion: "Seda suave en diseño minimalista.",
    color: "Marfil",
    tallas: ["S", "M", "L"],
    material: "Seda natural",
    img: "assets/img/productos/blusa-seda.jpg"
  },
  {
    categoria: "blusas",
    nombre: "Blusa Lino Manga Larga",
    precio: 179000,
    descripcion: "Lino fresco con corte holgado y elegante.",
    color: "Celeste",
    tallas: ["S", "M", "L"],
    material: "Lino",
    img: "assets/img/productos/blusa-lino.jpg"
  },

  // Conjuntios
  {
    categoria: "conjuntos",
    nombre: "Chaqueta Corte Sastre",
    precio: 399000,
    descripcion: "Corte clásico con acabados modernos.",
    color: "Topo",
    tallas: ["M", "L"],
    material: "Lino + Algodón",
    img: "assets/img/productos/chaqueta-sastre.jpg"
  },
  {
    categoria: "conjuntos",
    nombre: "Chaqueta Oversize Denim",
    precio: 359000,
    descripcion: "Denim lavada con diseño relajado y moderno.",
    color: "Azul",
    tallas: ["S", "M", "L", "XL"],
    material: "Algodón",
    img: "assets/img/productos/chaqueta-denim.jpg"
  },

  // Pantalones
  {
    categoria: "pantalon",
    nombre: "Pantalón Palazzo",
    precio: 179000,
    descripcion: "Cintura alta, amplio y fresco.",
    color: "Negro",
    tallas: ["S", "M", "L", "XL"],
    material: "Lino liviano",
    img: "assets/img/productos/palazzo.jpg"
  },
  {
    categoria: "pantalon",
    nombre: "Pantalón Chino Slim",
    precio: 159000,
    descripcion: "Corte slim, cómodo y elegante para oficina o casual.",
    color: "Beige",
    tallas: ["S", "M", "L", "XL"],
    material: "Algodón stretch",
    img: "assets/img/productos/pantalon-chino.jpg"
  }
];


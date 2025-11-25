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
    id: "pantalones",
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
     img: [
        "Assets/IMG/Products/Vestidos/VestidoBeige (2).jpg",
        "Assets/IMG/Products/Vestidos/VestidoBeige (1).jpg",
    ]
  },
  {
    categoria: "vestidos",
    nombre: "Vestido Seda Floral",
    precio: 269000,
    descripcion: "Seda ligera con estampado floral elegante.",
    color: "Rosa",
    tallas: ["S", "M", "L"],
    material: "Seda",
    img: [
        "Assets/IMG/Products/Vestidos/VestidoNegro (4).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (1).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (3).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (2).jpg"
    ]
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
    img: [
        "Assets/IMG/Products/Blusas/BlusaAzul (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (3).jpg"
    ] 
  },
  {
    categoria: "blusas",
    nombre: "Blusa Lino Manga Larga",
    precio: 179000,
    descripcion: "Lino fresco con corte holgado y elegante.",
    color: "Celeste",
    tallas: ["S", "M", "L"],
    material: "Lino",
    img: [
        "Assets/IMG/Products/Blusas/BlusaNegra (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (3).jpg"
    ] 
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
    img: [
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (3).jpg"
     ] 
  },
  {
    categoria: "conjuntos",
    nombre: "Chaqueta Oversize Denim",
    precio: 359000,
    descripcion: "Denim lavada con diseño relajado y moderno.",
    color: "Azul",
    tallas: ["S", "M", "L", "XL"],
    material: "Algodón",
    img: [
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (3).jpg"
     ] 
  },

  // Pantalones
  {
    categoria: "pantalones",
    nombre: "Pantalón Palazzo",
    precio: 179000,
    descripcion: "Cintura alta, amplio y fresco.",
    color: "Negro",
    tallas: ["S", "M", "L", "XL"],
    material: "Lino liviano",
    img: [
        "Assets/IMG/Products/Pantalones/PantalonBlanco (1).jpg",
        "Assets/IMG/Products/Pantalones/PantalonBlanco (2).jpg",
        "Assets/IMG/Products/Pantalones/PantalonBlanco (3).jpg"
        
    ]
  },
  {
    categoria: "pantalones",
    nombre: "Pantalón Chino Slim",
    precio: 159000,
    descripcion: "Corte slim, cómodo y elegante para oficina o casual.",
    color: "Beige",
    tallas: ["S", "M", "L", "XL"],
    material: "Algodón stretch",
    img: 
    [
        "Assets/IMG/Products/Pantalones/PantalonNegro (3).jpg",
        "Assets/IMG/Products/Pantalones/PantalonNegro (1).jpg",
        "Assets/IMG/Products/Pantalones/PantalonNegro (2).jpg"
    ]
  }
];

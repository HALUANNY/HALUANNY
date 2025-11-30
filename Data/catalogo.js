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
    tallas: ["S", "M", "L"],
    material: "Lino",
    colores: {
      beige: [
        "Assets/IMG/Products/Vestidos/VestidoBeige (2).jpg",
        "Assets/IMG/Products/Vestidos/VestidoBeige (1).jpg"
      ],
      black: [
        "Assets/IMG/Products/Vestidos/VestidoNegro (4).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (1).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (3).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (2).jpg"
      ]
    }
  },


  // Blusas
  {
    categoria: "blusas",
    nombre: "Blusa Seda Minimal",
    precio: 199000,
    descripcion: "Seda suave en diseño minimalista.",
    tallas: ["S", "M", "L"],
    material: "Seda natural",
    colores: {
      lightblue: [
        "Assets/IMG/Products/Blusas/BlusaAzul (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (3).jpg"
      ],
      black: [
        "Assets/IMG/Products/Blusas/BlusaNegra (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (3).jpg"
      ]
    }
  },
  

  // Conjuntos
  {
    categoria: "conjuntos",
    nombre: "Conjunto Danna",
    precio: 399000,
    descripcion: "Corte clásico con acabados modernos.",
    tallas: ["M", "L"],
    material: "Lino + Algodón",
    colores: {
      lightblue: [
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (3).jpg"
      ],
      navy: [
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (3).jpg"
      ]
    }
  },

  // Pantalones
  {
    categoria: "pantalones",
    nombre: "Pantalón Palazzo",
    precio: 179000,
    descripcion: "Cintura alta, amplio y fresco.",
    tallas: ["S", "M", "L", "XL"],
    material: "Lino liviano",
    colores: {
  white: [
    "Assets/IMG/Products/Pantalones/PantalonBlanco (1).jpg",
    "Assets/IMG/Products/Pantalones/PantalonBlanco (2).jpg",
    "Assets/IMG/Products/Pantalones/PantalonBlanco (3).jpg"
  ],
  beige: [
    "Assets/IMG/Products/Pantalones/PantalonNegro (1).jpg",
    "Assets/IMG/Products/Pantalones/PantalonNegro (2).jpg",
    "Assets/IMG/Products/Pantalones/PantalonNegro (3).jpg"
  ]
}

  }
]  
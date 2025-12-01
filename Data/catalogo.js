// ==============================
// CATEGORÍAS
// ==============================
export const categorias = [
  {
    id: "vestidos",
    nombre: "Vestidos",
    img: "./Assets/IMG/Categories/VestidoCategories.jpg",
  },
  {
    id: "blusas",
    nombre: "Blusas",
    img: "./Assets/IMG/Categories/BlusaCategories.jpg",
  },
  {
    id: "pantalones",
    nombre: "Pantalón",
    img: "./Assets/IMG/Categories/PantalonCategories.jpg",
  },
  {
    id: "conjuntos",
    nombre: "Conjuntos",
    img: "./Assets/IMG/Categories/ConjuntoCategories.jpg",
  },
];

// ==============================
// PRODUCTOS DESTACADOS POR CATEGORÍA
// ==============================
export const productosDestacados = [
  // Vestidos
  {
    categoria: "vestidos",
    nombre: " VESTIDO MARCELA",
    precio: 73000,
    descripcion: "Diseño en lino 100% con caída natural.",
    tallas: ["S", "M", "L"],
    material: "Tela Hermes",
    colores: {
      "rgba(234, 214, 214, 1)": [
        "Assets/IMG/Products/Vestidos/VestidoBeige (2).jpg",
        "Assets/IMG/Products/Vestidos/VestidoBeige (1).jpg",
      ],
      black: [
        "Assets/IMG/Products/Vestidos/VestidoNegro (4).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (1).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (3).jpg",
        "Assets/IMG/Products/Vestidos/VestidoNegro (2).jpg",
      ],
    },
  },

  // Blusas
  {
    categoria: "blusas",
    nombre: "BLUSA SANDRA",
    precio: 60000,
    descripcion: "Seda suave en diseño minimalista.",
    tallas: ["S", "M", "L"],
    material: "Tela Satin",
    colores: {
      "hsla(213, 92%, 24%, 1.00)": [
        "Assets/IMG/Products/Blusas/BlusaAzul (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaAzul (3).jpg",
      ],
      black: [
        "Assets/IMG/Products/Blusas/BlusaNegra (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaNegra (3).jpg",
      ],
    },
  },

  {
    categoria: "blusas",
    nombre: "BLUSA DANNA",
    precio: 55000,
    descripcion: "Seda suave en diseño minimalista.",
    tallas: ["S", "M", "L"],
    material: "Tela Popelina",
    colores: {
      "rgba(249, 245, 245, 1)": [
        "Assets/IMG/Products/Blusas/BlusaDanna.jpg",
        "Assets/IMG/Products/Blusas/BlusaDannaClara (1).jpg",
        "Assets/IMG/Products/Blusas/BlusaDannaClara (2).jpg",
      ],
      "rgba(162, 117, 88, 1)": [
        "Assets/IMG/Products/Blusas/BlusaDannaBeige (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaDannaBeige (1).jpg",
      ],
      "rgba(33, 30, 35, 1)": [
        "Assets/IMG/Products/Blusas/BlusaDannaOscura (2).jpg",
        "Assets/IMG/Products/Blusas/BlusaDannaOscura (1).jpg",
      ],
    },
  },

  // Conjuntos
  {
    categoria: "conjuntos",
    nombre: "SET KAROL",
    precio: 185000,
    descripcion: "Corte clásico con acabados modernos.",
    tallas: ["S", "M", "L"],
    material: "Tela Vengalina",
    colores: {
      "rgba(98, 119, 150, 1)": [
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoClaro (3).jpg",
      ],
      "rgba(35, 41, 64, 1)": [
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (3).jpg",
      ],
    },
  },

  {
    categoria: "conjuntos",
    nombre: "ZAFARI",
    precio: 140000,
    descripcion: "Corte clásico con acabados modernos.",
    tallas: ["S", "M", "L"],
    material: "Tela Dril",
    colores: {
      "rgba(237, 213, 184, 1)": [
        "Assets/IMG/Products/Conjuntos/ConjuntoZafari (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoZafari (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoZafari (3).jpg",
      ],
      "rgba(185, 144, 99, 1)": [
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (2).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (1).jpg",
        "Assets/IMG/Products/Conjuntos/ConjuntoOscuro (3).jpg",
      ],
    },
  },

  // Pantalones
  {
    categoria: "pantalones",
    nombre: "PANTALÓN MELANY",
    precio: 85000,
    descripcion: "Cintura alta, amplio y fresco.",
    tallas: ["S", "M", "L"],
    material: "Tela Hermes",
    colores: {
      "rgba(226, 220, 215, 1)": [
        "Assets/IMG/Products/Pantalones/PantalonBlanco (1).jpg",
        "Assets/IMG/Products/Pantalones/PantalonBlanco (2).jpg",
        "Assets/IMG/Products/Pantalones/PantalonBlanco (3).jpg",
      ],
      "rgba(188, 145, 111, 1)": [
        "Assets/IMG/Products/Pantalones/PantalonNegro (1).jpg",
        "Assets/IMG/Products/Pantalones/PantalonNegro (2).jpg",
        "Assets/IMG/Products/Pantalones/PantalonNegro (3).jpg",
      ],
    },
  },
];

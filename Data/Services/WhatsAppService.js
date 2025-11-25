
export function enviarWhatsApp(producto, talla) {
  const numero = "573002550081";

  const mensaje = `Hola, estoy interasad@ en la prenda: ${producto.nombre}, en la Talla: ${talla}.`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}


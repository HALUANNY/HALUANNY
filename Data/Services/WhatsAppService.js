// Data/Services/WhatsAppService.js

export function enviarWhatsApp(producto, talla, color) {
  const numero = "573153750438";

  const mensaje = `Hola, estoy interesad@ en la prenda: ${producto.nombre}, Color: ${color}, Talla: ${talla}.`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

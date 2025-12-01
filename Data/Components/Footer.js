export function Footer() {
  return `
    <footer class="footer-container">

      <!-- 1. Descripción general -->
      <div class="footer-section footer-description">
        <h3>Bienvenida a HALUANNY</h3>
        <p>Somos una marca independiente que celebra la elegancia y el estilo femenino a través de prendas cuidadosamente seleccionadas.</p>
        <p>Nuestro propósito es ofrecer una experiencia cálida, confiable y cercana en cada compra.</p>
      </div>

      <!-- 2. Envios y entregas -->
      <div class="footer-section footer-envios">
        <h3>Envios y entregas</h3>
        <p>En Haluanny realizamos envíos a Cali y a todo el país, cuidando cada detalle para que tus prendas lleguen en perfectas condiciones.</p>
        <p>Si te encuentras en Cali, puedes optar por pago parcial al realizar tu pedido:</p>
        <ul>
          <li>20% del valor total para compras menores a $100,000</li>
          <li>40% del valor total para compras iguales o superiores a $100,000</li>
        </ul>
        <p>Para otras ciudades de Colombia, manejamos envíos con pago anticipado, garantizando así una entrega segura y confiable.</p>
        <p>Cada envío es preparado con amor y dedicación, porque sabemos que detrás de cada pedido hay una ilusión</p>
      </div>

      <!-- 3. Políticas de cambios -->
      <div class="footer-section footer-cambios">
        <h3>Políticas de cambios</h3>
        <ul>
          <li>Realizamos cambios únicamente por talla</li>
          <li>No se realizan cambios por modelo o referencia diferente</li>
          <li>El cambio debe solicitarse dentro de los 2 días hábiles posteriores a la entrega</li>
          <li>La prenda debe estar nueva, sin uso, sin lavar y con sus etiquetas originales</li>
          <li>Los costos de envío por cambio corren por cuenta del cliente</li>
        </ul>
        <p>En caso de que el error sea nuestro — por ejemplo, si recibes una talla o color diferente al solicitado —, Haluanny cubrirá los costos de envío correspondientes, será revisado con el pedido para verificar que el pedido se despachó erróneamente.</p>
      </div>

      <!-- Contenedor para bloques pequeños: pagos, contacto y compromiso -->
      <div class="footer-info-container">
        
        <!-- Métodos de pago -->
        <div class="footer-section footer-pagos">
          <h3>Métodos de pago</h3>
          <div class="payment-methods">
            <img src="Assets/Icons/Bancolombia.svg" alt="Bancolombia">
            <img src="Assets/Icons/bre-b.svg" alt="Bancolombia Llaves">
            <img src="Assets/Icons/nequi.png" alt="Nequi">
          </div>
        </div>

        <!-- Contáctanos -->
        <div class="footer-section footer-contacto">
         <h3>Contáctanos</h3>

         <div class="contact-item">
         <img src="Assets/Icons/Whatsapp.png" alt="WhatsApp" class="png">
         <span>+57 3160410345</span>
         </div>

  <div class="contact-item">
    <img src="Assets/Icons/Instagram_logo.svg" alt="Instagram" class="icon">
    <span>@Haluanny</span>
  </div>

  <div class="contact-item">
    <img src="Assets/Icons/Tiktok_icon.svg" alt="Tiktok" class="icon">
    <span>@Haluanny</span>
  </div>
</div>


        <!-- Compromiso -->
        <div class="footer-section footer-compromiso">
          <h3>Compromiso</h3>
          <p>En Haluanny cuidamos cada detalle: desde la elección de las telas hasta la forma en que recibes tu pedido.</p>
          <p>Queremos que disfrutes la experiencia tanto como la prenda misma.</p>
        </div>

      </div>

    </footer>
  `;
}

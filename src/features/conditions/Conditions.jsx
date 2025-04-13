import Container from "react-bootstrap/Container";
import "./conditions.css";

export default function Conditions() {
  return (
    <main>
      <Container>
        <div className="backgroundSection conditions">
          <h1>Condiciones de Arriendo</h1>
          <section>
            <h2 className="section-titles">Arriendo por hora</h2>
            <article>
              <h3>Cuenta y Sedes</h3>
              <hr />
              <p>
                Debes crear una cuenta para poder reservar un box, esto lo
                puedes hacer en la página “mi cuenta” o en la página del
                “checkout” antes de finalizar tu primera reserva. Ambas sedes
                tienen un funcionamiento independiente, por lo tanto, debes
                crear la cuenta en la sede que quieres reservar. Si quieres
                reservar en ambas sedes puedes crear una cuenta en cada una.
              </p>
            </article>
            <article>
              <h3>Reservas</h3>
              <hr />
              <p>
                Las reservas se hacen mediante nuestra página web a través de
                los calendarios online, al agregar una hora al carrito de
                compras dispondrás de un tiempo limitado para hacer el pago y
                concretar tu reserva, pasado ese tiempo el pedido “expirará” y
                la hora estará nuevamente disponible para ser reservada por
                cualquier persona.
              </p>
              <p>
                Cada vez que agregues una nueva hora al carro, se renueva el
                tiempo de expiración del pedido, es decir, la cuenta regresiva
                comienza nuevamente.
              </p>
            </article>
            <article>
              <h3>Pagos</h3>
              <hr />
              <p>
                Los pagos se hacen a través de nuestra plataforma de pagos
                online.
              </p>
            </article>
            <article>
              <h3>Cancelación de Reservas</h3>
              <hr />
              <p>
                Puedes cancelar tus reservas en la página “mi cuenta” sección
                “reservas” haciendo click en el botón “cancelar” que se
                encuentra al lado derecho la hora que quieres cancelar.
              </p>
              <p>
                El plazo máximo para cancelar tus reservas es 24 horas antes de
                la hora de tu reserva, pasado este tiempo, no será posible
                cancelar la hora y la opción de «cancelar» ya no estará
                disponible en la página «mis reservas».
              </p>
            </article>
            <article>
              <h3>Reembolso</h3>
              <hr />
              <p>
                Al cancelar una hora aparecerá un mensaje ofreciéndote solicitar
                un reembolso equivalente al valor que pagaste por esa reserva.
                Al solicitarlo, automáticamente se generará un cupón (código de
                descuento) equivalente al dinero que pagaste y que podrás usar
                en cualquier momento y reserva.
              </p>
              <p>
                El cupón puede ser utilizado una única vez, es decir, si
                cancelas una reserva pagada con un cupón, no recibirás un nuevo
                cupón.
              </p>
              <p>
                Pero, ten presente que el cupón aplica como descuento para los
                “pedidos” y no para las “reservas”, por lo tanto, si usas un
                cupón para pagar varias horas, el descuento se “reparte” en cada
                una de ellas.
              </p>

              <h4>Ejemplos:</h4>
              <ul>
                <li>
                  Si usas un cupón de $5.500 para un pedido de 1 hora, no
                  tendrás que pagar nada ($0).
                </li>
                <li>
                  Si cancelas esa nueva hora reservada, no obtendrás un nuevo
                  cupón ya que el pago que hiciste por ella fue $0.
                </li>
                <li>
                  Si usas un cupón de $5.500 para un pedido de 2 horas
                  ($11.000), tendrás que pagar solo $5.500. Si cancelas una de
                  esas horas, obtendrás un nuevo cupón por $2.750.
                </li>
              </ul>
            </article>
          </section>
          <section>
      <h2 className="section-titles">Arriendo por Jornada</h2>

      <article>
        <h3>Fecha de Pago</h3>
        <hr />
        <p>Si arriendas por jornada debes pagar tu reserva a más, el último día del mes anterior.</p>
      </article>

      <article>
        <h3>Cancelación de Reserva</h3>
        <hr />
        <p>Las jornadas se reservan de manera indefinida por lo que debes avisarnos con anticipación cuando quieras dejar una jornada reservada. El plazo máximo para avisar que dejarás una jornada es el día 5 del mes anterior (Por ejemplo, si vas a dejar de arrendar en febrero, debes avisarnos a más tardar el 5 de enero).</p>
        <p>La forma de dar aviso es por correo electrónico de la sede en la que estás reservando:</p>
        <ul>
          <li><a href="mailto:contacto.espaciobox@gmail.com">contacto.espaciobox@gmail.com</a></li>
          <li><a href="mailto:contacto.espaciobox@gmail.com">contacto.espaciobox@gmail.com</a></li>
        </ul>
      </article>
    </section>
    <section>
      <h2 className="section-titles">Condiciones Generales</h2>

      <article>
        <h3>Acceso a la Oficina</h3>
        <hr />
        <p>Las oficinas cuentan con una cerradura inteligente (con contraseña) en su puerta de acceso principal. Cuando realizas un pedido recibirás un correo de confirmación en el cual se encuentra la clave para que puedas acceder a la oficina.</p>
        <p>Puedes ver un ejemplo del correo con la ubicación de la clave de acceso en esta imagen: <em>¿Dónde recibo la clave de acceso?</em></p>
      </article>

      <article>
        <h3>Puntualidad</h3>
        <hr />
        <p>Debes prestar especial atención de desocupar el box a la hora, ya que al extenderte en el tiempo podrías estar perjudicando al siguiente arrendatario.</p>
        <p>Si ya comenzó tu hora y el arrendatario anterior aún no ha desocupado el box, siéntete con el derecho de tocar la puerta para avisarle que estás esperando, eso sí, te pedimos que lo hagas con respeto.</p>
        <p>También te pedimos que te asegures de que estás en el box y horario que te corresponde antes de interrumpir una sesión.</p>
      </article>

      <article>
        <h3>Espacios Comunes</h3>
        <hr />
        <p>Ayúdanos a mantener el orden, limpieza y tranquilidad en las salas de espera, baño y cocina. Procura mantener silencio y transmite a tus pacientes la importancia de guardar silencio mientras esperan.</p>
      </article>

      <article>
        <h3>Limpieza</h3>
        <hr />
        <p>Tenemos un servicio de aseo profesional que limpia regularmente la consulta, pero el resto del tiempo necesitamos tu colaboración para limpiar las tazas, vasos y cualquier otro implemento que uses.</p>
      </article>

      <article>
        <h3>Cuidado del Lugar</h3>
        <hr />
        <p>Al finalizar tu trabajo, puede ser que te corresponda a ti apagar las luces del lugar, apagar equipos eléctricos que se hayan utilizado y cerrar la oficina. Es responsabilidad de los arrendatarios.</p>
      </article>
    </section>
    <section>
      <h2 className="section-titles">Nuestro Espíritu</h2>
      <p>Finalmente queremos que sepas que somos un lugar diferente al resto de los espacios que hay para arrendar. Nuestras oficinas han sido diseñadas con cariño y dedicación por psicólogos que saben cuáles son las necesidades de un terapeuta para sentirse cómodo.</p>
      <p>Procuramos siempre evolucionar para entregarte las mejores condiciones. Queremos que sientas nuestra oficina como si fuera tuya, que te sientas como en casa y que de la misma manera procures cuidarla.</p>
      <p>Nuestro sello se basa en la relación de respeto y colaboración entre todos los que compartimos la oficina. Si quieres trabajar con nosotros te pedimos que lo hagas con el mismo espíritu.</p>
    </section>
        </div>
      </Container>
    </main>
  );
}

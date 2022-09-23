import { Link } from "react-router-dom"
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="contenedorFooter">
        <div>
          <p>Navegación</p>
          <ul>
            <Link to={'/'}><li>Inicio</li></Link>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div>
          <p>Contactanos</p>
          <p>Telefono: 2342 45-6749 </p>
          <p>e-mail: mcdermocosmeticos@gmail.com </p>
          <p>Ubicacion: Conesa 247, Bragado, Buenos Aires</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
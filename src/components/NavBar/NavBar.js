import logo from '../../asset/image/logo.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {

    return (

        <nav className="Contenedor-navbar">
            <a href="#">
                <img className="Logo" src={logo} alt="logo"></img>
            </a>
            <ul className="Enlaces-menu">
                <li><a href="#">HOME</a></li>
                <li><a href="#">PRODUCTOS</a></li>
                <li><a href="#">CONTACTO</a></li>
            </ul>
            <CartWidget />
            <button className="Ham" type="button">
                <span className="br-1"></span>
                <span className="br-2"></span>
                <span className="br-3"></span>
            </button>

        </nav>

    )
}


export default NavBar;
import { NavLink } from 'react-router-dom';
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
                <li>
                    <NavLink
                        to={'/category/lineaFacial'}
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'white' }
                                : { color: 'black' }
                        }
                    >Linea Facial</NavLink>

                </li>
                <li>
                    <NavLink
                        to={'/category/manos'}
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'white' }
                                : { color: 'black' }
                        }
                    >Manos</NavLink>

                </li>
                <li>
                    <NavLink
                        to={'/contacto'}
                        style={({ isActive }) =>
                            isActive
                                ? { color: 'white' }
                                : { color: 'black' }
                        }
                    >Contacto</NavLink>

                </li>

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
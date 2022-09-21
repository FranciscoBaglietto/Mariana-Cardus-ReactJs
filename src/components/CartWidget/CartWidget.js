// agregar una img del carrito
import { Link } from 'react-router-dom';
import imgCarrito from '../../asset/image/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return <Link to={'/cart'}><img src={imgCarrito} alt="carrito" className='carritoImg'></img></Link>
};

export default CartWidget; 
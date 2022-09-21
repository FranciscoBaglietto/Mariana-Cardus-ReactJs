// agregar una img del carrito
import { Link } from 'react-router-dom';
import imgCarrito from '../../asset/image/carrito.png'
import Cart from '../Cart/Cart';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
    const {cart} = useContext(CartContext)

    return (
        <div>
            <Link to={'/cart'}><img src={imgCarrito} alt="carrito" className='carritoImg'></img></Link>
            <span className='spanCarrito'>{cart.length}</span>
        </div>
    )

};

export default CartWidget; 
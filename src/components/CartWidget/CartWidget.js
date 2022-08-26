// agregar una img del carrito
import imgCarrito from '../../asset/image/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return <img src={imgCarrito} alt="carrito" className='carritoImg'></img>
};

export default CartWidget;
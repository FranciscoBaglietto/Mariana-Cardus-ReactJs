import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"
import '../Cart/Cart.css'

const Cart = () => {
    const { cart, addToCart, removeItem } = useContext(CartContext);
    console.log('cart', cart)

    return (
        <>
            <h1>Carrito de Compra</h1>

            <div className="mainCart">
                {cart.length === 0 ? (
                    <div>
                        <h2>No hay productos en carrito</h2>
                        <Link to={'/'}>Volver a Comprar</Link>
                    </div>
                ) : (
                    <>
                        {cart.map((item) => (

                            <div className="contenedorCart" key={item.id}>
                                <img className="imgCarrito" src={item.img} width='100'></img>
                                <h3 className="nombreProducto">{item.nombre}</h3>
                                <p>${item.precio}</p>
                                <p>{item.cantidad}</p>
                                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                <p>Total: ${item.cantidad * item.precio}</p>
                            </div>

                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default Cart
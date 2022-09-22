import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"

const Cart = () => {
    const { cart, addToCart, removeItem } = useContext(CartContext);
    console.log('cart', cart)

    return (
        <div>
            <h1>Carrito de Compra</h1>
            {cart.length === 0 ? (
                <>
            <h2>No hay productos en tu carrito</h2>
            <Link to={'/'}>Volver a Comprar</Link>
                </>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <img src={item.img} width='100'></img>
                            <h3>{item.nombre}</h3>
                            <p>${item.precio}</p>
                            <p>{item.cantidad}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                            <p>Total: ${item.cantidad * item.precio}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart
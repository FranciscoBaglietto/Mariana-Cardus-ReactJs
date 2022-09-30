import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"
import '../Cart/Cart.css'
import moment from "moment/moment";
import { collection, addDoc, firestore, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);

    const createOrder = () => {
        const db = getFirestore();
        const order = {
            buyer: {
                name: 'Juan',
                phone: '12346',
                email: 'juantest@gmail.com'
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.precio * valorActual.cantidad), 0),
            date: moment().format(),
        };
        const query = collection(db, 'orders');
        addDoc(query, order).then(({ id }) => alert('Felicidades por tu compra'))
            .catch(() => alert('Tu compra no pudo ser realizada'))

    };

    return (
        <>
            <h1 className="tituloCarritoCompras">Carrito de Compra</h1>

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
                                <button className="botones" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                <p>Total: ${item.cantidad * item.precio}</p>
                            </div>


                        ))}
                    </>
                )}
                <div>
                    <button onClick={createOrder}>Crear orden</button>
                </div>
            </div>
        </>
    )
}

export default Cart
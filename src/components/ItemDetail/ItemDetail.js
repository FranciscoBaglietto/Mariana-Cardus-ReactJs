import { useState, useContext } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Swal from "sweetalert2";



const ItemDetail = ({ item }) => {
    const [items, setItems] = useState(0);
    const { addToCart } = useContext(CartContext);
    const [irCarrito, setIrCarrito] = useState(true);


    function onAdd(item) {
        addToCart(item, items)
        setIrCarrito(false)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto se agrego al carrito!',
            showConfirmButton: false,
            timer: 800
        })
    }

    return (
        <div className="main-detail">
            <div className="containerDetail">
                <img className='img-producto-detail' src={item.img} />
                <h1 className="nombre-producto">{item.nombre}</h1>
                <p className="descripcion-producto">{item.descripción}</p>
                <ItemCount setItems={setItems} items={items} />
                {
                    (irCarrito) ? <button className="botones" onClick={() => onAdd(item)}>Agregar al carrito</button>
                        : <div className="contenedorIrAlCarrito">
                            <button className="botonIrAlCarrito" onClick={() => onAdd(item)}>Agregar al carrito</button>
                            <Link className="botonIrAlCarrito" to={'/cart'}>Ir al carrito</Link>
                        </div>
                }


            </div>
        </div>
    )
}

export default ItemDetail
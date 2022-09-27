import { useState, useContext } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";



const ItemDetail = ({ item }) => {
    const [items, setItems] = useState(0);
    const {addToCart} = useContext(CartContext);
    const [irCarrito, setIrCarrito] = useState(true);


    function onAdd ( item){
        addToCart(item[0], items)
        setIrCarrito(false)
    }

    return (
        <div className="main-detail">
            <div className="containerDetail">
                <img className='img-producto' src={item[0].img} />
                <h1 className="nombre-producto">{item[0].nombre}</h1>
                <p className="descripcion-producto">{item[0].descripcion}</p>
                <ItemCount setItems={setItems} items={items} />
                {
                    (irCarrito) ? <button className="botones" onClick={() => onAdd(item)}>Agregar al carrito</button> : <Link to={'/cart'}>Ir al carrito</Link>
                }
                
                
            </div>
        </div>
    )
}

export default ItemDetail
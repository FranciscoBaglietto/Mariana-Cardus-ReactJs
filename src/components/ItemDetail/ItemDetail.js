import { useEffect, useState } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [items, setItems] = useState(0);

    const handleClick = () =>{
        console.log(items)
    }

    return (
        <div className="containerDetail">
            <img className='img-producto' src={item[0].img} />
            <h1 className="nombre-producto">{item[0].nombre}</h1>
            <p className="descripcion-producto">{item[0].descripcion}</p>
            <ItemCount setItems={setItems} items={items}/>
            <Link to={'/cart'} onClick={handleClick}>Ir al carrito</Link>
        </div>
    )
}

export default ItemDetail
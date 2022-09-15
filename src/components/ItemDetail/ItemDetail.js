import { useEffect } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
    return (
        <div className="containerDetail">
            <img className='img-producto' src={item[0].img} />
            <p className="nombre-producto">{item[0].nombre}</p>
            <p className="descripcion-producto">{item[0].descripcion}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetail
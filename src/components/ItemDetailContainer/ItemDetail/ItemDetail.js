import { useEffect } from "react"


const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item[1].id}</h1>
            <img className='img-producto' src={item[1].img} />
            <p>{item[1].nombre}</p>
            <p>{item[1].precio}</p>
            <p>{item[1].stock}</p>

        </div>
    )
}

export default ItemDetail
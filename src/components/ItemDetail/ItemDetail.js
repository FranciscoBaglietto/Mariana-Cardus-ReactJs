import { useEffect } from "react"


const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item[0].id}</h1>
            <img className='img-producto' src={item[0].img} />
            <p>{item[0].nombre}</p>
            <p>{item[0].precio}</p>
            <p>{item[0].stock}</p>

        </div>
    )
}

export default ItemDetail
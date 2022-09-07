import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <>
            <h1>{data.id}</h1>
            <img className='img-producto' src={data.img}/>
            <p>{data.nombre}</p>
            <p>{data.precio}</p>
            <p>{data.stock}</p>

        </>
    )
}

export default Item
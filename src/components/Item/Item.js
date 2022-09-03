import React from 'react'

const Item = ({ data }) => {
    return (
        <>
            <h1>{data.id}</h1>
            <img src={data.img}/>
            <p>{data.nombre}</p>
            <p>{data.precio}</p>
            <p>{data.stock}</p>

        </>
    )
}

export default Item
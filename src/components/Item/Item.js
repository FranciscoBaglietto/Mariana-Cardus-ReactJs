import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <div className='containerItem'>
            <img className='img-producto' src={data.img}/>
            <p className='text-item'>{data.nombre}</p>
            <p className='text-item precio-item'>${data.precio}</p>
            <p className='text-item'>Stock: {data.stock}</p>

        </div>
    )
}

export default Item
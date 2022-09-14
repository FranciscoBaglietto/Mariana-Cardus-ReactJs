import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const ItemList = ({ productos }) => {
  return (
    <div className='listContainer'>
      {productos.map((producto) => (
        <Link
          to={'/detail/' + producto.id}
          key={producto.id}>
          <Item
            data={producto}
          />
        </Link>
      ))}
    </div>
  )
}

export default ItemList
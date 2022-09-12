

const ItemDetail = ({ item }) => {
    return (
        <div>
            <img className='img-producto' src={data.img} />
            <p>{data.nombre}</p>
            <p>{data.precio}</p>
        </div>
    )
}

export default ItemDetail
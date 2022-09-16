import './ItemCount.css';

const ItemCount = ( {setItems, items}) => {
    const stock = 10;

    const sumar = () => items <= stock - 1 ? setItems(items + 1) : alert('Es el limite.')
    const restar = () => items > 0 ? setItems(items - 1) : alert('No se puede numeros negativos.')

    return (
        <>
            <div className="contenedor-items">
                <div className="texto">Tengo {items} items.</div>
                <button className="boton" onClick={sumar}>+</button>
                <button className="boton" onClick={restar}>-</button>
                <p className="texto">Stock {stock}</p>
            </div>

        </>
    )
}

export default ItemCount;
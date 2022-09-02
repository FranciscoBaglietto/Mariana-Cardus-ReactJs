import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemCount/>
        </>
    )
};

export default ItemListContainer;
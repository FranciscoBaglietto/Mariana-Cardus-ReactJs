import ItemDetail from './ItemDetail/ItemDetail'
import Data from '../Data/Data';
import { useEffect, useState } from 'react';


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    return (
        <>

        {
            loading ? <span>Cargando...</span> :
                <ItemDetail item={data}></ItemDetail>
        }

    </>
    )
}

export default ItemDetailContainer
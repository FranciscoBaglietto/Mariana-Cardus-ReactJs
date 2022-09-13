import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    //promesa
    const getFetch = new Promise((res, rej) => {
        let condition = true

        if (condition) {
            setTimeout(() => {
                res(Data)
            }, 2000);
        }
        else {
            rej(console.log("No hay datos de productos"))
        }

    })


    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch((err) => setData(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemCount />

            {
                loading ? <span>Cargando...</span> :
                    <ItemList productos={data}></ItemList>
            }

        </>
    )
};

export default ItemListContainer;
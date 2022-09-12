import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ItemListContainer = () => {
    const [data, setData] = useState([])

    //promesa
    const getItem = new Promise((res, rej) => {
        let condition = true

        if (condition) {
            setTimeout(() => {
                res(Data[0])
            }, 2000);
        }
        else {
            rej(console.log("No hay datos de productos"))
        }

    })

    useEffect(() => {
        getItem
            .then((resp) => setData(resp))
            .catch((err) => setData(err))
    }, [])

const ItemDetailContainer = () => {
  return (
    <div><ItemList productos={data}></ItemList></div>
  )
}

export default ItemDetailContainer
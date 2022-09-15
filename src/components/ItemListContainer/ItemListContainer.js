import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryName } = useParams()

    

   


    //promesa
    const getFetch = new Promise((res, rej) => {
        let condition = true

        if (condition) {
            setTimeout(() => {
                res(Data)
            }, 2000);
        }
    })


    useEffect(() => {
        getFetch
            .then((resp) => {
                if(categoryName){
                    const response = resp.filter((response) => response.category === categoryName)
                    setData(response);
                }else{
                    setData(resp)
                }
            })
            .catch((err) => setData(err))
            .finally(() => setLoading(false))
    }, [categoryName])


    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            {
                loading ? <span>Cargando...</span> :
                    <ItemList productos={data}></ItemList>
            }
            <ItemCount />

        </>
    )
};

export default ItemListContainer;
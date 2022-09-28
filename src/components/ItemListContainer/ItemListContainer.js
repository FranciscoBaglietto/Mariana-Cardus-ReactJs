import './ItemListContainer.css'
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"





const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryName } = useParams()



    //promesa
    const getFetch = new Promise((res, rej) => {
        let condition = true

        if (condition) {
            setTimeout(() => {
                const db = getFirestore();
                const querySnapshot = collection(db, 'items')
                const queryFilter = query(querySnapshot, where("categotyId", "==", categoryName))
                if(categoryName) {
                    getDocs(queryFilter).then((res) => {
                        const list = res.docs.map((productos) => {
                            return { id: productos.id, ...productos.data() }
                        });
                        setData(list);
                    })
                } else{
                    getDocs(querySnapshot).then((res) => {
                        const list = res.docs.map((productos) => {
                            return { id: productos.id, ...productos.data() }
                        });
                        setData(list);
                    })
                }
                
                
            }, 2000);
        }
    })


    useEffect(() => {
        getFetch
            .then((resp) => {
                if (categoryName) {
                    const response = resp.filter((response) => response.category === categoryName)
                    setData(response);
                } else {
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


        </>
    )
};

export default ItemListContainer;
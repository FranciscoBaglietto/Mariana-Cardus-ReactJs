import './ItemListContainer.css'
//import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"





const ItemListContainer = ({ greeting }) => {
    const [productoLista, setProductosLista] = useState([])
    const { categoryName } = useParams()



    //promesa
    const getFetch = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items')
        if (categoryName) {
            const queryFilter = query(querySnapshot, where("categotyId", "==", categoryName))
            if (categoryName) {
                getDocs(queryFilter).then((res) => {
                    const list = res.docs.map((productos) => {
                        return { id: productos.id, ...productos.data() }
                    });
                    setProductosLista(list);
                })
            } else {
                getDocs(querySnapshot).then((res) => {
                    const list = res.docs.map((productos) => {
                        return { id: productos.id, ...productos.data() }
                    });
                    setProductosLista(list);
                })
            }


        }
    }


    useEffect(() => {
        getFetch();
        /*  .then((resp) => {
              if (categoryName) {
                  const response = resp.filter((response) => response.category === categoryName)
                  setData(response);
              } else {
                  setData(resp)
              }
          })
          .catch((err) => setData(err))
          .finally(() => setLoading(false))*/
    }, [categoryName])


    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList productos={productoLista}></ItemList>

        </>
    )
};

export default ItemListContainer;
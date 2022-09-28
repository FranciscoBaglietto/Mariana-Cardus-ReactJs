import ItemDetail from '../ItemDetail/ItemDetail'
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)


    const dataBase = getFirestore()

    const queryDoc = doc(dataBase, 'items', id);

   

    const getProduct = new Promise((resolve) => {
        setTimeout(() => {
           /* resolve(Data.filter((prod) => prod.id === id))*/
           getDoc(queryDoc)
           .then((res) => {
               setProductos(res.data())
           })
           .catch((err) => console.log(err));
       
           console.log(data);
        }, 2000)
    })

    useEffect(() => {
        getProduct
            .then((resp) => setData(resp))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);

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
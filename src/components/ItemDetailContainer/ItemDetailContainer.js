import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    const dataBase = getFirestore();
    const queryDoc = doc(dataBase, 'items', id);


    const getProduct = () => {

        getDoc(queryDoc).then((res) => {
            setProductos({ id: res.id, ...res.data() });
        }).catch((err) => console.log(err));
    }



    useEffect(() => {
        getProduct()
        /*.then((resp) => setData(resp))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))*/
    });

    return (
        <>
            <ItemDetail item={productos}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer
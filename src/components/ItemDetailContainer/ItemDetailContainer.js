import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    const db = getFirestore();
    const queryDoc = doc(db, 'items', id);


    const getProduct = () => {

        getDoc(queryDoc).then((res) => {
            setProductos({ id: res.id, ...res.data() });
        }).catch((err) => console.log(err));
    }



    useEffect(() => {
        getProduct()
    });

    return (
        <>
            <ItemDetail item={productos}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer
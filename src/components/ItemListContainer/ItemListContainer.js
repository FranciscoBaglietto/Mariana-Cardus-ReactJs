import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"





const ItemListContainer = ({ greeting }) => {
    const [productoLista, setProductosLista] = useState([])
    const { categoryName } = useParams()


    useEffect(() => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');

        if (categoryName) {
            const queryFilter = query(querySnapshot, where("categoryId", "==", categoryName));
            getDocs(queryFilter).then((res) => {
                setProductosLista(
                    res.docs.map((product) => ({ id: product.id, ...product.data() }))
                )
            });
        } else {
            getDocs(querySnapshot).then((res) =>
                setProductosLista(
                    res.docs.map((product) => ({ id: product.id, ...product.data() }))
                )
            )
        }

    }, [categoryName])


    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList productos={productoLista}></ItemList>
        </>
    )
};

export default ItemListContainer;
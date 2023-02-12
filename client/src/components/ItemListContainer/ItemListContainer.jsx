import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { FaAngleRight } from 'react-icons/fa'

const ItemListContainer = () => {

    const [prods, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'products');
        const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

        getDocs(ref)
            .then(res => {
                const products = res.docs.map(prod => {
                    return {
                        id: prod.id, ...prod.data(),
                    }
                });
                setProducts(products)
            })
            .catch(eror => console.log(eror))
            .finally(() => setLoading(false))
    }, [categoryName])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className='contCategoryName'>
                {categoryName === undefined ? <h1 className='categoryName'>Todos nuestros productos</h1> : <h1 className='categoryName'>{prods[0].categoryName}</h1>}
            </div>
            <div className='d-flex align-items-center gap-2 my-4 container'>
                <Link to={'/'} className='spanDivider text-dark text-decoration-none'>Inicio</Link>
                <FaAngleRight className='dividerAngle' />
                <Link to={'/category'} className='spanDivider text-dark text-decoration-none'>Categorias</Link>
                <FaAngleRight className='dividerAngle' />
                {categoryName !== undefined && <span className='spanDivider'>{prods[0].categoryName}</span>}
            </div>
            <div className='mb-5'>
                <ItemList products={prods} />
            </div>
        </>
    )
}

export default ItemListContainer;
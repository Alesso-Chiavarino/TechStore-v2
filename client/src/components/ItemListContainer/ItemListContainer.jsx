import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'
import { useItemListContainer } from './useItemListContainer';

const ItemListContainer = () => {

    const { products, categoryName, loading } = useItemListContainer()

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className='contCategoryName'>
                {categoryName === undefined ? <h1 className='categoryName'>Todos nuestros productos</h1> : <h1 className='categoryName'>{products[0]?.categoryName}</h1>}
            </div>
            <div className='d-flex align-items-center gap-2 my-4 container'>
                <Link to={'/'} className='spanDivider text-dark text-decoration-none'>Inicio</Link>
                <FaAngleRight className='dividerAngle' />
                <Link to={'/category'} className='spanDivider text-dark text-decoration-none'>Categorias</Link>
                <FaAngleRight className='dividerAngle' />
                {categoryName !== undefined && <span className='spanDivider'>{products[0]?.categoryName}</span>}
            </div>
            <div className='mb-5'>
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer;
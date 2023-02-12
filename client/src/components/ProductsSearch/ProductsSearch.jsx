import './ProductsSearch.css'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import Item from '../Item/Item'
import Loader from '../Loader/Loader';

const ProductsSearch = () => {

    const { search, text, loader } = useContext(SearchContext)

    if (loader) {
        return <Loader />
    }

    return (
        <>
            <div className='container'>
                <div className='contSearchResultMessage'>
                    <h1 className='resultMessage mt-3'>Resultado de: "{text}"</h1>
                    <h5 className='quantityMessage mt-3'>Cantidad de resultados: {search.length}</h5>
                </div>
                <ul className='d-flex p-0 flex-wrap justify-content-center mt-5'>
                    {search.map(prod => <Item key={prod.id} {...prod} />)}
                </ul>
            </div>
        </>
    )
}

export default ProductsSearch
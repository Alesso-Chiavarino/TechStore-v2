import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { ProductsService } from '../../services/products.service';

export const useItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    const productsService = new ProductsService();

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true)
                const filteredProducts = await productsService.getProductByCategoryName(categoryName)
                setProducts(filteredProducts)
            } catch (err) {
                throw new Error('Error getting products', err)
            }
            finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [categoryName])



    return {
        products,
        loading,
        categoryName
    }
}


import { ProductsService } from "../../services/products.service"
import { useSearch } from "../../context/SearchContext"
import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"

export const useInputSearch = () => {

    const productsService = new ProductsService()

    const { searchProducts, writeText, putLoader } = useSearch()
    const [query, setQuery] = useState('')
    const inputRef = useRef(null)

    const getProducts = async () => {
        try {
            putLoader(true);
            const products = await productsService.getProducts()
            const filteredProds = products.filter(prod => prod.title.includes(query) || prod.category.includes(query) || prod.categoryName.includes(query));
            const notFound = products.filter(prod => prod.title === 'notFound')
            const ref = query === '' ? notFound : filteredProds;
            searchProducts(ref);
        } catch (err) {
            throw new Error('Error getting products', err)
        }
        finally {
            putLoader(false)
        }
    }

    const getSearch = () => {
        getProducts()
        writeText(inputRef.current.value)
        inputRef.current.value = ''
    }

    const handleInputSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    const navigate = useNavigate()

    const getSearchEnter = (e) => {
        //if i press enter
        if (e.keyCode === 13) {
            getProducts();
            window.scroll(0, 0);
            writeText(inputRef.current.value)
            inputRef.current.value = ''
            navigate('/search')
        }
    }

    return {
        inputRef,
        getSearchEnter,
        handleInputSearch,
        getSearch
    }
}
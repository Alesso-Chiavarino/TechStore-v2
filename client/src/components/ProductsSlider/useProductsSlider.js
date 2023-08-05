import { useState, useEffect } from "react"
import { ProductsService } from "../../services/products.service"

export const useProductsSlider = (beg, fin) => {
    const [prodsShow, setProdsShow] = useState([])

    const productsService = new ProductsService()

    useEffect(() => {
        const getProducts = async () => {
            const filteredProducts = await productsService.getProductsByOrder(beg, fin)
            setProdsShow(filteredProducts)
        }
        getProducts()

    }, [beg, fin])

    return {
        prodsShow
    }
}
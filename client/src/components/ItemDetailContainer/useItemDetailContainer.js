import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductsService } from "../../services/products.service"

export const useItemDetailContainer = () => {

    const productsService = new ProductsService()

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true)
                const res = await productsService.getProductById(itemId)
                setProduct(res)
            } catch (err) {
                throw new Error('Error getting product', err)
            }
            finally {
                setLoading(false)
            }
        }
        getProduct()
    }, [itemId])

    return {
        product,
        loading
    }
}
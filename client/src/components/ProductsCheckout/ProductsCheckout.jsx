import './ProductsCheckout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductsCheckout = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            {cart.map(prod => {
                return (
                    <li style={{ listStyle: 'none', display: 'contents' }} key={prod.id}>
                        <article className='mx-5 checkoutProd'>
                            <img style={{ width: '100px' }} src={prod.image} alt={prod.title} />
                            <span className='checkoutProdTitle'>{prod.title}</span>
                            <span className='checkoutProdPrice'>${prod.price}</span>
                        </article>
                        <hr className='w-100 p-0 m-0 my-3' />
                    </li>
                )
            })}
        </>
    )
}

export default ProductsCheckout
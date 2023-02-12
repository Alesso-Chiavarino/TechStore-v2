import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (amount, item) => {
        const product = { quantity: amount, ...item }

        if (isInCart(product.id)) {
            addAmount(product)
        } else {
            setCart([...cart, product])
        }

    }

    const deleteToCart = (id) => {
        const filteredProds = cart.filter(prod => prod.id !== id)
        setCart(filteredProds)
    }

    const deleteAllToCart = () => setCart([])

    const isInCart = id => cart.some(prod => prod.id === id)

    const addAmount = (prod) => {
        const uptdatedCart = cart.map(prodInCart => {
            if (prodInCart.id === prod.id) {
                const updatedProduct = {
                    ...prodInCart,
                    quantity: prod.quantity
                }
                return updatedProduct;
            } else {
                return prodInCart;
            }
        })
        setCart(uptdatedCart)
    }

    const cartItemCounter = () => {
        let acc = 0;
        cart.map(prod => acc += prod.quantity)
        return acc;
    }

    const totalPrice = () => {
        let acc = 0;
        cart.map(prod => acc += prod.quantity * prod.price)
        return acc;
    }

    const subtractQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if ((prod.id === id && prod.quantity > 1)) {
                const updatedProduct = {
                    ...prod, quantity: prod.quantity - 1
                }
                return updatedProduct;
            } else {
                return prod;
            }
        })
        setCart(updatedCart)
    }

    const addQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if ((prod.id === id && prod.quantity < prod.stock)) {
                const updatedProduct = {
                    ...prod, quantity: prod.quantity + 1
                }
                return updatedProduct;
            } else {
                return prod;
            }
        })
        setCart(updatedCart)
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteToCart, deleteAllToCart, cartItemCounter, totalPrice, subtractQuantity, addQuantity, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
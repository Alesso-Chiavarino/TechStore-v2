import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const isInCart = (id, cart) => {
        if (cart) {
            return cart.some(prod => prod.id === id)
        }
    }

    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART': {
                const { amount, item } = action.payload
                const product = { quantity: amount, ...item }

                if (isInCart(product.id, state)) {
                    addAmount(product)
                } else {
                    return [...state, product]
                }
                return product
            }

            case 'DELETE_TO_CART': {
                const { id } = action.payload
                const filteredProds = state.filter(prod => prod.id !== id)
                return filteredProds
            }

            case 'DELETE_ALL_TO_CART': {
                return []
            }

            case 'ADD_AMOUNT': {
                const { product } = action.payload

                const uptdatedCart = state.map(prodInCart => {
                    if (prodInCart.id === product.id) {
                        const updatedProduct = {
                            ...prodInCart,
                            quantity: product.quantity
                        }
                        return updatedProduct;
                    } else {
                        return prodInCart;
                    }
                })
                return uptdatedCart
            }

            case 'SUBTRACT_QUANTITY': {

                const { id } = action.payload

                const updatedCart = state.map(prod => {
                    if ((prod.id === id && prod.quantity > 1)) {
                        const updatedProduct = {
                            ...prod, quantity: prod.quantity - 1
                        }
                        return updatedProduct;
                    } else {
                        return prod;
                    }
                })
                return updatedCart
            }

            case 'ADD_QUANTITY': {

                const { id } = action.payload

                const updatedCart = state.map(prod => {
                    if ((prod.id === id && prod.quantity < prod.stock)) {
                        const updatedProduct = {
                            ...prod, quantity: prod.quantity + 1
                        }
                        return updatedProduct;
                    } else {
                        return prod;
                    }
                })
                return updatedCart
            }

            default: return state
        }
    }

    const [cart, dispatch] = useReducer(cartReducer, [])

    const addToCart = (amount, item) => {
        dispatch({ type: 'ADD_TO_CART', payload: { amount, item } })
    }

    const deleteToCart = (id) => {
        dispatch({ type: 'DELETE_TO_CART', payload: { id } })
    }

    const deleteAllToCart = () => {
        dispatch({ type: 'DELETE_ALL_TO_CART' })
    }

    const addAmount = (prod) => {
        dispatch({ type: 'ADD_AMOUNT', payload: { prod } })
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
        dispatch({ type: 'SUBTRACT_QUANTITY', payload: { id } })
    }

    const addQuantity = (id) => {
        dispatch({ type: 'ADD_QUANTITY', payload: { id } })
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
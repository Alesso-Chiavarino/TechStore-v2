import './Cart.css'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import axios from 'axios';

const Cart = () => {

  const { cart, deleteToCart, deleteAllToCart, totalPrice } = useContext(CartContext)

  const goToChekout = async () => {
    const newCart = cart.map((prod) => {
      return {
        id: prod.id,
        title: prod.title,
        description: prod.description.substring(0, 250),
        unit_price: prod.price,
        currency_id: "ARS",
        quantity: prod.quantity,
        picture_url: prod.image,
      }
    })
    const response = await axios.post('http://localhost:4000/api/checkout', newCart)
    window.location.href = response.data
  }

  if (cart.length === 0) {
    return (
      <div className='contCartEmpty container mb-5' >
        <div className=''>
          <h2 className='cartMessage'>El carrito esta vacio!</h2>
          <h2 className='cartMessage2'>Puedes agregar productos desde el botón añadir al carrito en el catálogo.</h2>
          <Link to={'/category'} ><button className='btn btn-dark'>Ir al Catálogo</button></Link>
        </div>
        <img className='imgErorCart' src="./img/emptyCart.svg" alt="notFoundIcon" />
      </div>
    )
  }

  return (
    <section className='cartContainer container my-0 d-flex flex-column mb-5'>
      <span className='cartTitle' > <FontAwesomeIcon className='cartIconCart' icon={faCartShopping} /> <h3>Carrito de compras</h3> </span>
      <ul className="d-flex flex-wrap">
        {cart.map((prod) =>
          <CartItem key={prod.id} prod={prod} deleteToCart={deleteToCart} />
        )}
      </ul>
      <span className='my-3 fw-bold mx-5'>Precio Total: ${totalPrice()}</span>
      <div className='d-flex justify-content-between mb-4'>
        <button className='btn btn-danger w-25 mx-5' onClick={deleteAllToCart} >Eliminar todo</button>
        <button onClick={() => {
          // window.scroll(0, 0);
          goToChekout()
        }} className='btn btn-success w-25 mx-5'>Checkout</button>
        {/* <Link onClick={() => window.scroll(0, 0)} to={'/checkout'} className='btn btn-success w-25 mx-5'>Checkout</Link> */}
      </div>
    </section>
  )
}

export default Cart
import { Link } from 'react-router-dom';
import CartItemCount from '../CartItemCount/CartItemCount';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.scss'

const CartItem = ({ prod, deleteToCart }) => {
    return (
        <article className='w-100'>
            <li className='contProdCart' >
                <div className='contProdLeftCart' > <img className='imgProdCart' src={prod.image} alt={prod.title} /> </div>
                <div className='contProdCenterCart' > <Link className='text-decoration-none text-dark' to={`/item/${prod.id}`}> <h3>{prod.title}</h3> </Link> </div>
                <div className='contProdCenter2Cart' > <CartItemCount prod={prod} /> <span className='availabilitySpan'>{prod.stock} disponibles</span> </div>
                <div className='contProdCenter3Cart' > <span>${prod.price * prod.quantity}</span> </div>
                <div className='contProdRightCart' > <button className='btnElimarCart' onClick={() => deleteToCart(prod.id)} > <FontAwesomeIcon icon={faTrash} /> </button> </div>
            </li>
            <hr className='w-100 mb-4' />
        </article>
    )
}

export default CartItem
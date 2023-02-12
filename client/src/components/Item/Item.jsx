import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ title, price, image, id, stock }) => {

  if (stock === 0) {
    return (
      <Card className='cardOutOfStock'>
        <div className='contCardImg'>
          <Card.Img className='cardImg' variant="top" src={image} />
        </div>
        <hr />
        <Card.Body>
          <Card.Title className='cardTitle mb-5'> {title} </Card.Title>
          <Card.Text className='cardText'>
            <span className='fw-bold'>No hay stock</span>
            <span className='d-block fw-bold' >{' $' + price}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Link onClick={() => window.scroll(0, 0)} className='linkItemCard' to={`/item/${id}`}>
      <Card className='card'>
        <div className='contCardImg'>
          <Card.Img className='cardImg' variant="top" src={image} />
        </div>
        <hr />
        <Card.Body>
          <Card.Title className='cardTitle mb-5'> {title} </Card.Title>
          <Card.Text className='cardText'>
            <span className='d-block fw-bold' >{' $' + price}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
export default Item
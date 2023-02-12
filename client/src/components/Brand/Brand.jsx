import './Brand.css'
import { Link } from 'react-router-dom';

const Brand = ({ img, title }) => {
    return (
        <div className='contIcono'>
            <Link className='linkBrand' to={'/'}>
                <img className='icono' src={img} alt={title + ' icon'} /><h3 className='brand'> {title} </h3>
            </Link>
        </div>
    );
};

export default Brand;
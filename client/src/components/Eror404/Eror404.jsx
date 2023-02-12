import { Link } from 'react-router-dom';
import './Eror404.css'

const Eror404 = () => {
    return (
        <div className='containerEror' >
            <div className='contTextEror'>
                <h3 className='erorType' >Error 404</h3>
                <h3>Not Found</h3>
                <span className='erorDesc' >No pudimos encontrar la pagina que estabas buscando. </span>
                <Link className='btn btn-dark d-block w-25 mt-3' to='/'> Ir a Inicio </Link>
            </div>
            <div>
                <img className='imgEror' src="./img/notfound.svg" alt="notFoundIcon" />
            </div>
        </div>
    )
}
export default Eror404;
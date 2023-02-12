import ProgressBar from 'react-bootstrap/ProgressBar';
import './SloganProducts.css'

const SloganProducts = ({ title, porcent }) => {
    return (
        <div className='container containerShow' >
            <h3 className='title1' > {title} </h3>
            <ProgressBar className='progressBar' variant='dark' animated now={porcent} />
        </div>
    )
}
export default SloganProducts;
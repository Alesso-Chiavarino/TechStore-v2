import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import './NavBar.css'
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';
import NavbarCollapse from '../NavbarCollapse/NavbarCollapse';


const NavBar = () => {

    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore" />
                    <InputSearch />
                    <Link className='cartIcon' to="/cart"> <span style={{ color: "#fff" }}> <CartWidget /> <Counter /> </span> </Link>

                </Container>
            </Navbar>

            <NavbarCollapse />
        </>
    );
}
export default NavBar; 
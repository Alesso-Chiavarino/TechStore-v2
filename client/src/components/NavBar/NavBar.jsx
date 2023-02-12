import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
import Counter from '../Counter/Counter';
import { FaSearch } from 'react-icons/fa'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { CartContext } from '../../context/CartContext';
import DropdownMenuList from '../DropdownMenuList/DropdownMenuList';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig';


const NavBar = () => {

    const menuCategories = [{
        section: "Placas de video",
        route: "/category/placas-de-video"
    },
    {
        section: "Procesadores",
        route: "/category/procesadores"
    },
    {
        section: "Placas madre",
        route: "/category/placas-madre"
    },
    {
        section: "Fuentes",
        route: "/category/fuentes"
    },
    {
        section: "Discos rigidos",
        route: "/category/discos-rigidos"
    },
    ]

    //traigo contexto
    const { searchProducts, writeText, putLoader } = useContext(SearchContext)

    const [query, setQuery] = useState('')
    const inputRef = useRef(null)

    const prodCollection = collection(db, 'products');

    const getProducts = () => {
        putLoader(true);
        getDocs(prodCollection)
            .then(res => {
                const products = res.docs.map(prod => {
                    return {
                        id: prod.id, ...prod.data()
                    }
                })
                const filteredProds = products.filter(prod => prod.title.includes(query) || prod.category.includes(query) || prod.categoryName.includes(query));
                //para que no de error el map
                const notFound = products.filter(prod => prod.title === 'notFound')
                const ref = query === '' ? notFound : filteredProds;
                searchProducts(ref);
            })
            .catch(eror => console.log(eror))
            .finally(() => putLoader(false))
    }

    const getSearch = () => {
        getProducts()
        writeText(inputRef.current.value)
        inputRef.current.value = ''
    }

    const navigate = useNavigate()
    const getSearchEnter = (e) => {
        //si presiono enter...
        if (e.keyCode === 13) {
            getProducts();
            window.scroll(0, 0);
            writeText(inputRef.current.value)
            inputRef.current.value = ''
            navigate('/search')
        }
    }

    // para contador de carrito dinamico
    const { cartItemCounter } = useContext(CartContext);

    //dropdown
    const [dropdown, setDropdown] = useState(false);


    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore" />

                    <div className='d-flex align-items-center'>
                        <input
                            ref={inputRef}
                            onKeyUp={getSearchEnter}
                            onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            placeholder="Buscá lo que desees!"
                            className="me-2 navSearch form-control"
                            aria-label="Search"
                        />
                        <Link to={'/search'} >
                            <FaSearch className='searchIcon' onClick={getSearch} />
                        </Link>
                    </div>
                    <Link className='cartIcon' to="/cart"> <span style={{ color: "#fff" }}> <CartWidget /> <Counter value={cartItemCounter()} /> </span> </Link>

                </Container>
            </Navbar>

            <nav className='container-fluid navCategory' >
                <div className='d-flex gap-1 align-items-center contSpanCategories' onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}  > <span className='spanCategories'>Categorias</span> {dropdown ? <FaChevronDown className='arrow' /> : <FaChevronUp className='arrow' />} </div>
                <ul className='d-flex ulMenuCategories justify-content-center m-0'>
                    {menuCategories.map((cat, i) => <MenuList key={i} section={cat.section} route={cat.route} />)}
                </ul>
            </nav>
            {dropdown &&
                <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="contCategoriesList" >
                    <ul className='contDropdownCategories'>
                        <DropdownMenuList setDropdown={setDropdown} />
                    </ul>
                </div>
            }
        </>
    );
}
export default NavBar; 
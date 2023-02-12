import './DropdownMenuList.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const DropdownMenuList = ({ setDropdown }) => {

    const [subcategory1, setSubcategory1] = useState(false);
    const [subcategory2, setSubcategory2] = useState(false);
    const [subcategory3, setSubcategory3] = useState(false);
    const [subcategory4, setSubcategory4] = useState(false);

    const components = [{
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
    {
        section: "Discos solidos",
        route: "/category/discos-solidos"
    },
    {
        section: "Coolers",
        route: "/category/coolers"
    },
    {
        section: "Discos M2",
        route: "/category/discos-m2"
    },
    {
        section: "Memorias RAM",
        route: "/category/memorias-ram"
    },
    ]

    const notebooks = [{
        section: "Asus",
        route: "/category/notebooks-asus"
    },
    {
        section: "Lenovo",
        route: "/category/notebooks-lenovo"
    },
    ]

    const peripherals = [{
        section: "Teclados",
        route: "/category/teclados"
    },
    {
        section: "Monitores",
        route: "/category/monitores"
    },
    {
        section: "Mouses",
        route: "/category/mouses"
    },
    {
        section: "Mousepads",
        route: "/category/mousepads"
    }
    ]

    const phones = [{
        section: "Apple",
        route: "/category/apple"
    },
    {
        section: "Samsung",
        route: "/category/celulares-samsung"
    }
    ]

    return (
        <>
            <div className='d-flex flex-row' onMouseOver={() => setSubcategory1(true)} onMouseLeave={() => setSubcategory1(false)}>
                <li className='LiDrowpdownLinkCategory w-100' >
                    <Link className="DrowpdownlinkCategory" to=""> Componentes de PC <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory1 && <ul className='contSubcategory'>{components.map((comp, i) => <li key={i} onClick={() => { setSubcategory1(false); setDropdown(false) }} className='LisubcategoryLink'><Link to={`${comp.route}`} className='subcategoryLink'>{comp.section}</Link></li>)}</ul>}
            </div>
            <div className='d-flex flex-row' onMouseOver={() => setSubcategory2(true)} onMouseLeave={() => setSubcategory2(false)}>
                <li className='LiDrowpdownLinkCategory w-100' >
                    <Link className="DrowpdownlinkCategory" to=""> Notebooks <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory2 && <ul className='contSubcategory'>{notebooks.map((note, i) => <li key={i} onClick={() => { setSubcategory2(false); setDropdown(false) }} className='LisubcategoryLink'><Link to={`${note.route}`} className='subcategoryLink'>{note.section}</Link></li>)}</ul>}
            </div>
            <div className='d-flex flex-row' onMouseOver={() => setSubcategory3(true)} onMouseLeave={() => setSubcategory3(false)}>
                <li className='LiDrowpdownLinkCategory w-100' >
                    <Link className="DrowpdownlinkCategory" to=""> Periféricos <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory3 && <ul className='contSubcategory'>{peripherals.map((peri, i) => <li key={i} onClick={() => { setSubcategory3(false); setDropdown(false) }} className='LisubcategoryLink'><Link to={`${peri.route}`} className='subcategoryLink'>{peri.section}</Link></li>)}</ul>}
            </div>
            <div className='d-flex flex-row' onMouseOver={() => setSubcategory4(true)} onMouseLeave={() => setSubcategory4(false)}>
                <li className='LiDrowpdownLinkCategory w-100' >
                    <Link className="DrowpdownlinkCategory" to=""> Celulares y Telefonía <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory4 && <ul className='contSubcategory'>{phones.map((phone, i) => <li key={i} onClick={() => { setSubcategory3(false); setDropdown(false) }} className='LisubcategoryLink'><Link to={`${phone.route}`} className='subcategoryLink'>{phone.section}</Link></li>)}</ul>}
            </div>
        </>
    );
}

export default DropdownMenuList;
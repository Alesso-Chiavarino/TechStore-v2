import { useState } from 'react'
import { menuCategories } from '../../data/menuData';
import DropdownMenuList from '../DropdownMenuList/DropdownMenuList';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import MenuList from '../MenuList/MenuList';

const NavbarCollapse = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className='container-fluid navCategory' >
                <div className='d-flex gap-1 align-items-center contSpanCategories' onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}  > <span className='spanCategories'>Categorias</span> {dropdown ? <FaChevronDown className='arrow' /> : <FaChevronUp className='arrow' />} </div>
                <ul className='d-flex ulMenuCategories justify-content-center m-0'>
                    {menuCategories.map((cat, i) => <MenuList key={i} section={cat.section} route={cat.route} />)}
                </ul>
            </nav>
            {
                dropdown &&
                <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="contCategoriesList" >
                    <ul className='contDropdownCategories'>
                        <DropdownMenuList setDropdown={setDropdown} />
                    </ul>
                </div>

            }
        </>
    )
}

export default NavbarCollapse
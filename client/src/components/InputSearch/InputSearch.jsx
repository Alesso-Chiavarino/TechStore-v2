import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useInputSearch } from './useInputSearch'

const InputSearch = () => {

    const { getSearch, getSearchEnter, handleInputSearch, inputRef } = useInputSearch()

    return (
        <div className='d-flex align-items-center'>
            <input
                ref={inputRef}
                onKeyUp={getSearchEnter}
                onChange={handleInputSearch}
                placeholder="Buscá lo que desees!"
                className="me-2 navSearch form-control"
                aria-label="Search"
            />
            <Link to={'/search'} >
                <FaSearch className='searchIcon' onClick={getSearch} />
            </Link>
        </div>
    )
}

export default InputSearch
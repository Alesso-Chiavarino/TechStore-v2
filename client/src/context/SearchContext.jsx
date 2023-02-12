import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState([])
    const [text, setText] = useState('')
    const [loader, setLoader] = useState(false)

    const searchProducts = (prods) => {
        setSearch(prods)
    }

    const writeText = (text) => {
        setText(text)
    }

    const putLoader = (loader) => {
        setLoader(loader)
    }

    return (
        <SearchContext.Provider value={{ search, searchProducts, writeText, text, putLoader, loader }} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
import './ItemCount.css'
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc'
import { useEffect, useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd, getCounter }) => {

    const [counter, setCounter] = useState(initial)

    const add = () => {
        counter < stock && setCounter(counter + 1)
    }

    const subtract = () => {
        counter > 1 && setCounter(counter - 1)
    }

    //eror solution
    useEffect(() => {
        getCounter(counter)
    })

    return (
        <>
            <div className="contIC">
                <div className='leftSideCounterIC'>
                    <span className="counterIC" >{counter}</span>
                </div>
                <div className='rightSideCounterIC'>
                    <button className="btnIC" disabled={counter === stock} > <VscTriangleUp className='arrowIC' onClick={() => {
                        add()
                    }} />
                    </button>
                    <button className="btnIC" disabled={counter === 1} > <VscTriangleDown className='arrowIC' onClick={() => {
                        subtract()
                        if (counter > 1) {
                            subtract()
                        }
                    }} />
                    </button>
                </div>
            </div>
            <button className='btn btn-dark btnAddToCart mb-3 float-end' onClick={() => onAdd(counter)} >Añadir al carrito</button>
        </>
    )
}

export default ItemCount;
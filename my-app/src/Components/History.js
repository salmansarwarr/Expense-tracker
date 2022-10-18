import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../Redux/actions"

function History() {
    const { history } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <section className='history flex'>
            <div className='container card'>
                <h2>History</h2>
                {
                    history.length === 0 ?
                        <p className='none'>You haven't created any transactions yet!</p>
                        : <ul>
                            {
                                history.map((item, index) => {
                                    return (
                                        <li className='flex' key={index}>
                                            <button
                                                className='flex'
                                                onClick={() => dispatch(remove(item))}
                                            >
                                                x
                                            </button>
                                            <p className='name'>{item.name}</p>
                                            {
                                                item.price.toString().charAt(0) === "-" ?
                                                    <p>{item.price.toString().charAt(0)}${item.price.toString().slice(1)}</p> :
                                                    <p>${item.price}</p>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                }

            </div>
        </section>
    )
}

export default History

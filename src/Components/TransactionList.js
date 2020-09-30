import React, {useContext} from 'react'
import {TransactionsContext} from '../Context/GlobalState'

export const TransactionList = () => {
    let [, , [trans, setTrans]] = useContext(TransactionsContext)
    
    console.log()
    

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {trans.map((n)=>(
                    <li key={n.desc}>
                        {n.desc} <span>{n.amount}</span>
                        <button className="delete-btn" onClick={() => setTrans(trans.filter(({desc})=> desc !== n.desc))}>x</button>
                    </li>
                ))}
                
            </ul>
        </>
    )
}

import React, {useContext } from 'react'
import { TransactionsContext } from '../Context/GlobalState'

export const AddTransaction = () => {
    let [[text, setText], [amount, setAmount], [trans, setTrans]] = useContext(TransactionsContext) 
    return (
    <> 
    <h3>Add new transaction</h3>
   
        <div className="form-control">
          <label>Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
            <label
            >Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick = {() => setTrans(trans.concat({amount, desc: text}))}>Add transaction</button>
     
     </>
    )
}


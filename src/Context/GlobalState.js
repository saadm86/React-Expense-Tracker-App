import React, { createContext, useState } from 'react'

const transactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
  ]
  
export const TransactionsContext = createContext(transactions);

const Transprovider = ({children}) => {
    
    let [text, setText] = useState("")
    let [amount, setAmount] = useState("")
    let [trans, setTrans] = useState(transactions)

    return (
        <TransactionsContext.Provider value= {[[text, setText], [amount, setAmount], [trans, setTrans]]}>
            {children}
        </TransactionsContext.Provider>
    )

}

export default Transprovider
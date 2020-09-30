import React, {useContext} from 'react'
import { TransactionsContext } from '../Context/GlobalState'

export const Balance = () => {

    const [, , [trans]] = useContext(TransactionsContext)
    const amount = trans.map(trans => Number(trans.amount))
    const _balance = amount.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>Rs {_balance}</h1>
        </>
    )
}

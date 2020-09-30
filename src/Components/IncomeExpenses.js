import React, {useContext} from 'react'
import { TransactionsContext } from '../Context/GlobalState'

export const IncomeExpenses = () => {
  const [, , [trans]] = useContext(TransactionsContext)
  const amount = trans.map(trans => Number(trans.amount))
  const positive = amount.filter(income => income > 0)
  const negative = amount.filter(expense => expense < 0)
  const income = positive.reduce((acc, item) => (acc += item),0).toFixed(2);
  const expenses = negative.reduce((acc, item) => (acc += item),0).toFixed(2);

  // const delete = trans.filter(trans => trans < 0)

  return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+Rs {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-Rs {-expenses}</p>
        </div>
      </div>

  )   
}

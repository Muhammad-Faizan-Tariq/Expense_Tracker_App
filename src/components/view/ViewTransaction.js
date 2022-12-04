import {GlobalContext} from '../../contextAPI/GlobalState';
import { useContext } from 'react';
import Transaction from './Transaction'
import './view.css'


function ViewTransaction() {

  const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <h3>View Transactions</h3>
        <ul className='list'>
        {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
        </ul>
    </div>
  )
}

export default ViewTransaction
import { useState, useContext } from 'react'
import {GlobalContext} from '../../contextAPI/GlobalState';
import './add.css'

function AddTransaction() {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
        setDescription("");
        setTransactionAmount("");

    }

  return (
    <div>
        <h3>Add Transactions</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='description'> Description </label>
                <input type="text"
                        id='description'
                        placeholder="Detail of Transaction"
                        required="required"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label htmlFor='transactionAmount'> Amount </label>
                <input type="number"
                        id='transactionAmount'
                        placeholder='Enter value'
                        required="required"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}/>
                        </div>

            <button className='btn'>
                Add Transactions
            </button>
        </form>
    </div>
  )
}

export default AddTransaction
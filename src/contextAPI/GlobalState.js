import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';


const initialState = {
    transactions: []
}
export const GlobalContext = createContext(initialState);

export const GlobalState = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);


        function delTransaction(id) {
            dispatch({ type: 'DELETE_TRANSACTION', payload: id })
        };


        function addTransaction(transaction) {
            dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
        };

    return (
        <GlobalContext.Provider value={{
                transactions: state.transactions,
                delTransaction,
                addTransaction}
        }>
            {children}
        </GlobalContext.Provider>
    );

}
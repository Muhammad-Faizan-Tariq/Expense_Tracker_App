import './App.css'

import Title from "./components/header/Title"
import Balance from "./components/header/Balance"
import AccountSummary from "./components/header/AccountSummary"
import ViewTransaction from "./components/view/ViewTransaction"
import AddTransaction from "./components/add/AddTransaction"

import {GlobalState} from './contextAPI/GlobalState';


function App() {
  return (
    <GlobalState>
        <Title/>
        <div className="container">
          <Balance/>
          <AccountSummary/>
          <ViewTransaction/>
          <AddTransaction/>
        </div>
    </GlobalState>
  );
}

export default App;

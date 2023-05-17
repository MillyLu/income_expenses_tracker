import "./App.css";
import { Header } from "./components/header/Header";
import { Balance } from "./components/balance/Balance";
import { Income } from "./components/income/Income";
import { BalanceList } from "./components/balanceList/BalanceList";
import { AddNewItem } from "./components/addNewItem/AddNewItem";
import { BalanceProvider } from "./Context";

function App() {
  return (
    <BalanceProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <BalanceList />
        <AddNewItem />
      </div>
    </BalanceProvider>
  );
}

export default App;

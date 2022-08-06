

import Balance from "./components/Balance.jsx";
import Dashboard from "./components/Dashboard";
import './App.css'

function App() {


  return (
    <div className="App">
      <Balance amount={921.48} />
        <Dashboard percentage={2.4} totalAmount={478.83} />
    </div>
  )
}

export default App

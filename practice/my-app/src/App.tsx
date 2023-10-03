import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useCallback } from "react"
import CallbackTester from "./component/CallbackTester"

function App() {
  const onTest = useCallback(() => {
    console.log("하이")
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <br /> <br /> <br />
        <br /> <br /> <br />
        <div>
          test용
          <div>
            <CallbackTester />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App

import ComponentA from "./components/compa"
import "./App.css"

import { createContext, useReducer } from "react"

export const userContext = createContext("Dhanish")

const adddingValue = (inputValue) => {
  console.log(inputValue)
}

const initialValue = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <userContext.Provider
      value={{ data: "Some data is coming from outside", fun: adddingValue }}
    >
      <div className="App">
        <ComponentA />
        <p>{count}</p>
        <button id="btn_1" onClick={() => dispatch("increment")}>
          Inc
        </button>
        <button id="btn_2" onClick={() => dispatch("decrement")}>
          Dec
        </button>
      </div>
    </userContext.Provider>
  )
}

export default App

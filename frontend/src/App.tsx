import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <button>UNCANNY</button>
       <button>ANGRY</button>
       <button>CANNY</button>
    </div>
  )
}

export default App

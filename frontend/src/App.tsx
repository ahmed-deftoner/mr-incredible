import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="flex justify-center mt-56 flex-col gap-3 md:flex-row">
        <button>UNCANNY</button>
        <button>ANGRY</button>
        <button>CANNY</button>
      </div>
  )
}

export default App

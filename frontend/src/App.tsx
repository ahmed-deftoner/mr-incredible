import { Link, Outlet } from 'react-router-dom'

function App() {
  

  return (
      <div className="flex justify-center mt-56 flex-col gap-3 md:flex-row">
          <Link to="/uncanny">UNCANNY</Link>
          <Link to="/angry">ANGRY</Link>
          <Link to="/canny">CANNY</Link>
          <Outlet/>
      </div>
  )
}

export default App

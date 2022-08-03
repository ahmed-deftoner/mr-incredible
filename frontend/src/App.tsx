import { Link, Outlet } from 'react-router-dom'

function App() {
  

  return (
      <div className="flex justify-center mt-56 flex-col gap-3 md:flex-row">
          <Link className="bg-zinc-800 px-8 py-5 text-white" to="/uncanny">UNCANNY</Link>
          <Link className="bg-zinc-800 px-8 py-5 text-white" to="/angry">ANGRY</Link>
          <Link className="bg-zinc-800 px-8 py-5 text-white" to="/canny">CANNY</Link>
          <Outlet/>
      </div>
  )
}

export default App

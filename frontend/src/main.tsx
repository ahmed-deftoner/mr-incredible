import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Angry from './routes/angry'
import Uncanny from './routes/uncanny'
import Canny from './routes/canny'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="angry" element={<Angry />} />
        <Route path="canny" element={<Canny />} />
        <Route path="uncanny" element={<Uncanny />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

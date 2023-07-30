import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Login from './Component/Login';

import SIgnup from './Component/SIgnup'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  >
          <Route path="/" element={<SIgnup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
           
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

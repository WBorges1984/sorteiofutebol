import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicial from "./src/Pages/Inicial/Inicial"

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicial />} />                                       
        </Routes>
    </BrowserRouter>
    
  )
}

export default Routers
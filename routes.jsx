import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicial from "./src/Pages/Inicial/Inicial"
import Principal from "./src/Pages/Principal/Principal"
import Times from "./src/Pages/Times/Times"

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicial />} />                                       
            <Route path='/principal' element={<Principal />} />                                       
            <Route path='/times' element={<Times />} />                                       
        </Routes>
    </BrowserRouter>
    
  )
}

export default Routers
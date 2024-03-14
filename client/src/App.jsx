import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contact/>}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App

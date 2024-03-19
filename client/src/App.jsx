import {BrowserRouter, Route, Routes} from "react-router-dom"

// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import UserLogin from "./pages/UserLogin"
import AdminLogin from "./pages/AdminLogin"
import Layout from "./Layout"
import Account from "./pages/Account"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
        <Route path="/contact" element={<Contact/>}  />
        <Route path="/studentlogin" element={<UserLogin/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/account" element={<Account/>} />
       
    </Routes>
    </BrowserRouter>
  )
}

export default App

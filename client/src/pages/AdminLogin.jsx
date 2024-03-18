import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [email,setEmail]=useState('');
  const [passwd,setPasswd]=useState('');

  
  function loginAdmin(event){
    event.preventDefault();
    console.log(email,passwd);
    axios.post("http://localhost:4000/adminlogin",{
      email,
      passwd
    })
  }

  return (
    <>
    <header className="w-full font-body text-xl shadow-md shadow-stone-300  text-black p-6 top-0">
        <div className="flex justify-between items-center h-1/3 px-12">
          <Link to="/">
            <p>
            IIIT Allahabad
            </p>
          </Link>
          <div className="flex gap-8">
            <div><Link to='/studentlogin'>Student Login</Link></div>
            <div><Link to='/adminlogin'>Admin Login</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
          </div>
        </div>
      </header>
    
    <div className="flex items-center justify-center h-dvh">

    <div className="w-1/2 flex items-center justify-center h-full">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"        
        alt="Phone image" />
    </div>


    <div className="w-1/2 h-full flex items-center justify-center">
    <form onSubmit={loginAdmin} className="flex flex-col items-center justify-center gap-3 w-[60%] h-2/3 px-8 shadow-lg shadow-stone-400">
      <p className="font-semibold text-xl my-5">Admin Login</p>
      
      <input type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2 w-full px-2 py-1"/>
      <input type="password" placeholder="Your Password" value={passwd} onChange={(e)=>{setPasswd(e.target.value)}} className="border-2 w-full  px-2 py-1 "/>
      <button className="border-2 rounded-lg bg-blue-400 text-white px-2 py-2 w-full my-4">

      <div className="flex items-center justify-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
      </svg>


  <p>Login</p>
</div>
</button>
      
    </form>
    </div>
  </div>
  </>
  )
}

export default AdminLogin

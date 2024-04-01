import { useState } from "react"
import axios from "axios";
import HeaderNoPic from "../components/HeaderNoPic"
function UserLogin() {
  const [email,setEmail]=useState('');
  const [passwd,setPasswd]=useState('');

  
  async function loginUser(event){
    event.preventDefault();
    console.log(email,passwd);
    await axios.post("http://localhost:4000/studentlogin",{
      email,
      passwd
    })
  }


  return (
    <>
    <HeaderNoPic/>
    
    <div className="flex items-center justify-center">

    <div className="w-1/2 flex items-center justify-center h-full">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"        
        alt="Phone image" />
    </div>


    <div className="w-1/2 flex items-center justify-center">
      <form onSubmit={loginUser} className="flex flex-col items-center justify-center gap-3 w-[60%] py-8 px-8 shadow-lg shadow-stone-400">
        <p className="font-semibold text-2xl my-5">Student Login</p>
        
        <input type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2 w-full px-2 py-1"/>
        <input type="password" placeholder="Your Password" value={passwd} onChange={(e)=>{setPasswd(e.target.value)}} className="border-2 w-full  px-2 py-1 "/>

        <button className="border-2 rounded-lg bg-blue-400 text-white px-2 py-2 w-full my-4">
        <div className="flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
          </svg>
            <p>
              Login
            </p>
        </div>
        </button>
        
      </form>
    </div>
  </div>
  </>
  )
}

export default UserLogin

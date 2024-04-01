import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
      <header className="w-full font-body text-xl shadow-md shadow-stone-300 nav h-[300px] text-white">
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
        <div className="h-2/3 flex flex-col items-center justify-center gap-5 pb-8">
          <div className="text-4xl">Grievance Redressal Portal</div>
          <div>
            <button className="px-3 py-1 border bg-blue-400 rounded-lg">Lodge complaint</button>
          </div>  
        </div>
      </header>
    </div>
  )
}

export default Header

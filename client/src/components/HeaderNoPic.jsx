import { Link } from "react-router-dom"
function HeaderNoPic() {
  return (
    <div>
        <header className="w-full font-body text-xl shadow-md shadow-stone-300  text-black p-6 top-0">
        <div className="flex justify-between items-center h-1/3 px-12">
          <Link to="/">
            <p>
            IIIT Allahabad
            </p>
          </Link>
          <div className="flex gap-8">
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HeaderNoPic

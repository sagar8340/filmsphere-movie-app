
import Surchbar from './Surchbar'
import { Link } from 'react-router-dom'
import Togglebtn from './Togglebtn'
import Logo from './Logo'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navbar = ({ text, setText, mode, setMode }) => {
  const [sidebar, setSidebar] = useState(false)
  const sidebarFun = () => {
    if (sidebar === true) {
      setSidebar(false)
    } else {
      setSidebar(true);
    }
  }
  return (
    <>
      <div className=' h-18 w-full  flex justify-between pl-10 pr-5 items-center bg-[#fc00d8ed] mt-0 fixed z-50'>

        <div>
          <div className="absolute top-6 left-2 md:hidden">
            {/* Sidebar menu */}
            <Sidebar mode={mode} setMode={setMode}sidebar={sidebar}
            />
            {/* sidebar button */}
            <button onClick={sidebarFun} className={`${sidebar ? 'ml-50 top-0 ' : 'ml-0'} cursor-pointer`}>
              {sidebar ? <X size={25} /> : <Menu size={23} />}
            </button>
          </div>
          <div className='flex items-center left-6 h-20 '>
            <Logo />
          </div>
        </div>
        {/* Navbar */}
        <div>
          <ul className='flex gap-28 items-center font-bold font-serif'>
            <Link className='hidden md:block' to="/">Home</Link>
            <Link className='hidden md:block' to="/watchlist">Watchlist</Link>
            <Surchbar text={text} setText={setText} />
            <Togglebtn className='hidden md:block' mode={mode} setMode={setMode} />
          </ul>
        </div>
      </div>
    </>
  )
}
export default navbar

import { NavLink, Link } from 'react-router-dom'
import { LuAperture, LuSearch } from 'react-icons/lu'

function Navbar() {
  const normalLink = 'px-5 py-2 rounded-full text-gray-400 hover:text-white'
  const activeLink = 'px-5 py-2 rounded-full bg-orange-500 text-white font-bold'

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
            <LuAperture size={28} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white leading-6">عدسة</p>
            <p className="text-sm text-orange-500">عالم التصوير الفوتوغرافي</p>
          </div>
        </Link>

        
        <div className="flex items-center gap-1 border border-neutral-800 rounded-full p-2">
          <NavLink to="/" end className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            المدونة
          </NavLink>
          <span className="px-5 py-2 text-gray-400">من نحن</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/blog" className="text-gray-400 hover:text-white">
            <LuSearch size={22} />
          </Link>
          <Link
            to="/blog"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-4"
          >
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
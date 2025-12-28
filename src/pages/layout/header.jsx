import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [open, setOpen] = useState(false)

  const Link = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-sky-800 border-b-2 border-sky-800 pb-1"
          : "text-gray-700 hover:text-sky-800"
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  )

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-sky-800">Hope Hands</div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
             Menu
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t">
          <div className="px-4 py-3 flex flex-col space-y-2">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

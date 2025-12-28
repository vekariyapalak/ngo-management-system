import { Route, Routes } from "react-router-dom"

import Home from "../pages/public/home"
import About from "../pages/public/about"
import Blog from "../pages/public/blog"
import Contact from "../pages/public/contact"
import Donate from "../pages/public/donate"
import Events from "../pages/public/events"

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
      </Routes>
  )
}

export default AppRoutes

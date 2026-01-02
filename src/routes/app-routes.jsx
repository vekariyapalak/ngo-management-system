import { Route, Routes } from "react-router-dom"

import Home from "../pages/public/home"
import About from "../pages/public/about"
import Blog from "../pages/public/blog"
import Contact from "../pages/public/contact"
import Donate from "../pages/public/donate"
import Events from "../pages/public/events"
import VolunteerRegister from "../pages/public/volunteer-register"
import DonorRegister from "../pages/public/donor-register"
import MemberRegister from "../pages/public/member-register"
import Login from "../pages/public/login"
import Layout from "../pages/client-layout/layout"
import AdminLayout from "../pages/admin-layout"
import Dashboard from "../pages/private/dashboard/dashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer-register" element={<VolunteerRegister />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/member-register" element={<MemberRegister />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

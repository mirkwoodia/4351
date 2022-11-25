// This page is the "shell" of the website.
// Since our website is a SPA (single page app), we want to render the rest of the "pages" inside this page.
// This way it's easy to save user information and keep the navbar and other such stuff.

import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"

const ShellPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default ShellPage
// This page is the "shell" of the website.
// Since our website is a SPA (single page app), we want to render the rest of the "pages" inside this page.
// This way it's easy to save user information and keep the navbar and other such stuff.

import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"
import { PropTypes } from 'prop-types'

const ShellPage = ({ token }) => {
  return (
    <div>
      <NavBar token={token}/>
      <Outlet/>
    </div>
  )
}

ShellPage.propTypes = {
  token: PropTypes.shape({
    setToken: PropTypes.func.isRequired,
    userToken: PropTypes.shape({
      userId: PropTypes.string.isRequired,
      loggedIn: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired
}

export default ShellPage
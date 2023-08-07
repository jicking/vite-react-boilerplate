import {Link } from 'react-router-dom'
import nv from "./Nav.module.css"

export function NavbarLink(){
    return(
        <nav className={nv.navbar}>
          <ul className={nv.navlinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contacts">Contact us</Link>
            </li>
          </ul>
        </nav>
    )

}

export default NavbarLink;
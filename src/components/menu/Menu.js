import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg"
import DemoBtn from "../../demoBtn/DemoBtn"
import MenuCSS from "./Menu.module.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Menu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div>
      <div className={MenuCSS.menu}>
        <Link to="/">
          <Logo className={MenuCSS.menuLogo} alt="logo" />
        </Link>
        <div className={MenuCSS.menuBtn}>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <AiOutlineClose
                style={{ color: "#fbfcfe", width: "30px", height: "20px" }}
              />
            ) : (
              <AiOutlineMenu
                style={{ color: "#1b262f", width: "30px", height: "20px" }}
              />
            )}
          </button>
        </div>
        <nav>
          <ul
            className={`${MenuCSS.menuList} ${
              navbarOpen ? `${MenuCSS.showMenu}` : ""
            }`}
          >
            <li>
              <Link
                className={MenuCSS.menuLinks}
                to="/pricing"
                onClick={() => closeMenu()}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className={MenuCSS.menuLinks}
                to="/about"
                onClick={() => closeMenu()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={MenuCSS.menuLinks}
                to="/contact"
                onClick={() => closeMenu()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => closeMenu()}>
                <DemoBtn />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu

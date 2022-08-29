import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg"

import { ReactComponent as Facebook } from "../../assets/shared/desktop/facebook.svg"
import { ReactComponent as Twitter } from "../../assets/shared/desktop/twitter.svg"
import { ReactComponent as Linkedin } from "../../assets/shared/desktop/linkedin.svg"
// // import styles
import FooterCSS from "./Footer.module.css"

const Footer = () => {
  return (
    <section className={FooterCSS.footer}>
      <footer className="wrapper">
        <div>
          <Link to="/">
            <Logo className={FooterCSS.footerLogo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className={FooterCSS.footerMenu}>
            <li>
              <Link className={FooterCSS.footerMenuLink} to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className={FooterCSS.footerMenuLink} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={FooterCSS.footerMenuLink} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={FooterCSS.social}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook alt="facebook" className={FooterCSS.socialIcons} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Twitter alt="twitter" className={FooterCSS.socialIcons} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin alt="linkedin" className={FooterCSS.socialIcons} />
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer

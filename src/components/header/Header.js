import React from "react"
import HeaderCSS from "./Header.module.css"
import EmailInput from "../emailInput/EmailInput"
// import HeroImage from "../../assets/home/desktop/illustration-phone-mockup.svg"
import HeroImage from "../../assets/home/desktop/mobile-imgds.svg"
import Menu from "../menu/Menu"

const Header = () => {
  return (
    <section className={HeaderCSS.headWrap}>
      <div className="wrapper">
        <div className={HeaderCSS.headPadding}>
          <Menu />
          <div className={HeaderCSS.headerTwoCol}>
            <div className={HeaderCSS.leftCol}>
              <h1 className={HeaderCSS.heroTitle}>
                Start building with our APIs for absolutely free.
              </h1>
              <div className={HeaderCSS.emailWrap}>
                <EmailInput />
              </div>
              <p className={HeaderCSS.heroText}>
                Have any questions?{" "}
                <span style={{ fontWeight: "bold" }}>Contact Us</span>
              </p>
            </div>
            <div className={HeaderCSS.rightCol}>
              <img className={HeaderCSS.heroImg} src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header

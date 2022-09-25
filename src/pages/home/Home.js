import React from "react"
import Header from "../../components/header/Header"
import ReadyToStart from "../../components/readyToStart/ReadyToStart"
import Companies from "../../components/whoWeWorkWith/Companies"

// CSS
import ThreeColCSS from "./Home.module.css"
import HomeCSS from "./Home.module.css"

// images
import pf from "../../assets/home/desktop/icon-personal-finances.svg"
import bc from "../../assets/home/desktop/icon-banking-and-coverage.svg"
import cp from "../../assets/home/desktop/icon-consumer-payments.svg"
import uiux from "../../assets/home/desktop/illustration-simple-ui.svg"
import imp from "../../assets/home/desktop/impl-imgds.svg"
// import imp from "../../assets/home/desktop/illustration-easy-to-implement.svg"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Companies />
      <section>
        <div className="wrapper">
          <div className={HomeCSS.twoColimp}>
            <div className={HomeCSS.implementLeft}>
              <img src={imp} className={HomeCSS.uiImg} alt="easy-implement" />
            </div>
            <div className={HomeCSS.ImplementRight}>
              <h2 className={HomeCSS.uiTitle}>Easy to implement</h2>
              <p className={HomeCSS.uiText}>
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Simple UI & UX section */}
      <section className={HomeCSS.uiux}>
        <div className="wrapper">
          <div className={HomeCSS.twoColumns}>
            <div className={HomeCSS.uiLeft}>
              <h2 className={HomeCSS.uiTitle}>Simple UI & UX</h2>
              <p className={HomeCSS.uiText}>
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.{" "}
              </p>
            </div>
            <div className={HomeCSS.uiRight}>
              <img src={uiux} className={HomeCSS.uiImg} alt="simple-ui-ux" />
            </div>
          </div>
        </div>
      </section>
      {/* three column section */}
      <div className="wrapper">
        <section className={ThreeColCSS.threeColumns}>
          <div className={ThreeColCSS.col}>
            <img className={ThreeColCSS.img} src={pf} alt="" />
            <h3 className={ThreeColCSS.title}>Personal Finances</h3>
            <p className={ThreeColCSS.text}>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>
          <div className={ThreeColCSS.col}>
            <img src={bc} alt="" />
            <h3 className={ThreeColCSS.title}>Banking & Coverage</h3>
            <p className={ThreeColCSS.text}>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className={ThreeColCSS.col}>
            <img src={cp} alt="" />
            <h3 className={ThreeColCSS.title}>Consumer Payments</h3>
            <p className={ThreeColCSS.text}>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </section>
      </div>
      <ReadyToStart />
      <Footer />
    </>
  )
}

export default Home

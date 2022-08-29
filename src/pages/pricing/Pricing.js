import React from "react"
import Menu from "../../components/menu/Menu"
import PricingCSS from "./Pricing.module.css"
import { Link } from "react-router-dom"
import ReadyToStart from "../../components/readyToStart/ReadyToStart"
import Footer from "../../components/footer/Footer"

const Pricing = () => {
  return (
    <section className={PricingCSS.priceBg}>
      <div className="wrapper">
        <div className={PricingCSS.pricePad}>
          <Menu />
          <h2 className={PricingCSS.title}>Pricing</h2>
          <div className={PricingCSS.threeCol}>
            <div className={PricingCSS.col}>
              <h3 className={PricingCSS.plan}>Free Plan</h3>
              <p className={PricingCSS.desc}>
                Build and test using our core set of products with up to 100 API
                requests{" "}
              </p>
              <p className={PricingCSS.price}>£0.00</p>
              <div className="center">
                <div className={PricingCSS.listWrap}>
                  <ul className={PricingCSS.list}>
                    <li>
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Transactions
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Auth
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Identity
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Investments
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Assets
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Liabilities
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Income
                    </li>
                  </ul>
                </div>
              </div>
              <div className={PricingCSS.btnWrap}>
                <Link to="/about" className={PricingCSS.btn}>
                  Request Access
                </Link>
              </div>
            </div>
            {/* END 1st Col */}
            <div className={PricingCSS.col}>
              <h3 className={PricingCSS.plan}>Basic Plan</h3>
              <p className={PricingCSS.desc}>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <p className={PricingCSS.price}>£249.00</p>
              <div className="center">
                <div className={PricingCSS.listWrap}>
                  <ul className={PricingCSS.list}>
                    <li>
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Transactions
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Auth
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Identity
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Investments
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Assets
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Liabilities
                    </li>
                    <li className={PricingCSS.listNa}>
                      {" "}
                      <i
                        aria-hidden="true"
                        style={{ marginRight: "3.6rem" }}
                      ></i>
                      Income
                    </li>
                  </ul>
                </div>
              </div>
              <div className={PricingCSS.btnWrap}>
                <Link to="/about" className={PricingCSS.btn}>
                  Request Access
                </Link>
              </div>
            </div>
            <div className={PricingCSS.col}>
              <h3 className={PricingCSS.plan}>Premium Plan</h3>
              <p className={PricingCSS.desc}>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <p className={PricingCSS.price}>£499.00</p>
              <div className="center">
                <div className={PricingCSS.listWrap}>
                  <ul className={PricingCSS.list}>
                    <li>
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Transactions
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Auth
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Identity
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Investments
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Assets
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Liabilities
                    </li>
                    <li>
                      {" "}
                      <i
                        class="fa fa-check"
                        aria-hidden="true"
                        style={{ marginRight: "2rem", color: "#BA4270" }}
                      ></i>
                      Income
                    </li>
                  </ul>
                </div>
              </div>
              <div className={PricingCSS.btnWrap}>
                <Link to="/about" className={PricingCSS.btn}>
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ReadyToStart />
      </div>
      <Footer />
    </section>
  )
}

export default Pricing

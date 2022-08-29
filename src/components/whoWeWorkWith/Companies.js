import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Tesla } from "../../assets/shared/desktop/tesla.svg"
import { ReactComponent as Microsoft } from "../../assets/shared/desktop/microsoft.svg"
import { ReactComponent as Hewlett } from "../../assets/shared/desktop/hewlett-packard.svg"
import { ReactComponent as Oracle } from "../../assets/shared/desktop/oracle.svg"
import { ReactComponent as Google } from "../../assets/shared/desktop/google.svg"
import { ReactComponent as Nvidia } from "../../assets/shared/desktop/nvidia.svg"

import CompaniesCSS from "./Companies.module.css"

const Companies = () => {
  return (
    <section className={CompaniesCSS.bg}>
      <div className="wrapper">
        <div className={CompaniesCSS.companyWrap}>
          <div className={CompaniesCSS.twoCol}>
            <div className={CompaniesCSS.leftCol}>
              <h2 className={CompaniesCSS.title}>Who we work with</h2>
              <p className={CompaniesCSS.description}>
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.{" "}
              </p>
              <Link className={CompaniesCSS.btn} to="/about">
                About us
              </Link>
            </div>
            <div className={CompaniesCSS.rightCol}>
              <Tesla className={CompaniesCSS.img} alt="Tesla" />
              <Microsoft className={CompaniesCSS.img} alt="Microsoft" />
              <Hewlett className={CompaniesCSS.img} alt="Hewlett" />
              <Oracle className={CompaniesCSS.img} alt="oracle" />
              <Google className={CompaniesCSS.img} alt="google" />
              <Nvidia className={CompaniesCSS.img} alt="Nvidia" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies

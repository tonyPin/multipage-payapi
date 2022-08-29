import React from "react"
import Menu from "../../components/menu/Menu"
import AboutCSS from "./About.module.css"
import deskhero from "../../assets/about/desktop/image-team-members.jpg"
import tablethero from "../../assets/about/tablet/image-team-members.jpg"
import mobilehero from "../../assets/about/mobile/image-team-members.jpg"
import ReadyToStart from "../../components/readyToStart/ReadyToStart"

const About = () => {
  return (
    <>
      <div className={AboutCSS.bgPtn}>
        <div className="wrapper">
          <header className={AboutCSS.header}>
            <Menu />
          </header>
          <section className={AboutCSS.aboutSec}>
            <h1 className={AboutCSS.heading}>
              We empower innovators by delivering access to the financial system
            </h1>
            <div className={AboutCSS.twoCol}>
              <div className={AboutCSS.col}>
                <h2 className={AboutCSS.title}>Our Vision</h2>
                <p className={AboutCSS.description}>
                  Our main goal is to build beautiful consumer experiences along
                  with developer-friendly infrastructure. The result is an
                  intelligent tool that gives everyone the ability to create
                  amazing products that solve big problems. We are deeply
                  focused on democratizing financial services through
                  technology.{" "}
                </p>
              </div>
              <div className={AboutCSS.col}>
                <h1 className={AboutCSS.title}>Our Business</h1>
                <p className={AboutCSS.description}>
                  At the core of our platform is the technical infrastructure
                  APIs that connect consumers. Our innovative product provides
                  key insights for businesses and individuals, as well as robust
                  reporting for traditional financial institutions and
                  developers.{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className={AboutCSS.bgPtn2}>
        <div className="wrapper">
          <div className={AboutCSS.desktopHero}>
            <img src={deskhero} alt="" />
          </div>
          <div className={AboutCSS.tabletHero}>
            <img src={tablethero} alt="" />
          </div>
          <div className={AboutCSS.mobileHero}>
            <img src={mobilehero} alt="" />
          </div>
        </div>
      </section>

      <div className="wrapper">
        <section>
          <div className={AboutCSS.threeColWrap}>
            <div className={AboutCSS.threeCol}>
              <div className={AboutCSS.numCol}>
                <h3 className={AboutCSS.titleH3}>Team Members</h3>
                <p className={AboutCSS.num}>300 +</p>
              </div>
              <div className={AboutCSS.numCol}>
                <h3 className={AboutCSS.titleH3}>Offices in the US</h3>
                <p className={AboutCSS.num}>3</p>
              </div>
              <div className={AboutCSS.numCol}>
                <h3 className={AboutCSS.titleH3}>Transactions analyzed</h3>
                <p className={AboutCSS.num}>10M+</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="wrapper">
        <section className={AboutCSS.aboutSec}>
          <div className={AboutCSS.twoCol}>
            <div className={AboutCSS.col}>
              <h2 className={AboutCSS.title}>The Culture</h2>
              <p className={AboutCSS.description}>
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className={AboutCSS.col}>
              <h1 className={AboutCSS.title}>The People</h1>
              <p className={AboutCSS.description}>
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
      <ReadyToStart />
    </>
  )
}

export default About

import React from "react"
import EmailInput from "../emailInput/EmailInput"
import ReadyCSS from "./ReadyToStart.module.css"

const ReadyToStart = () => {
  return (
    <section className="wrapper">
      <div className={ReadyCSS.start}>
        <h2 className={ReadyCSS.title}>Ready to start?</h2>
        <EmailInput />
      </div>
    </section>
  )
}

export default ReadyToStart

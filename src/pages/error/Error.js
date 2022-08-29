import React from "react"
import { Link } from "react-router-dom"
import ErrorCSS from "./Error.module.css"

const Error = () => {
  return (
    <div className={ErrorCSS.container}>
      <h1 className={ErrorCSS.heading}>404</h1>
      <p className={ErrorCSS.desc}>page not found</p>
      <Link className={ErrorCSS.text} to="/">
        Back home
      </Link>
    </div>
  )
}

export default Error

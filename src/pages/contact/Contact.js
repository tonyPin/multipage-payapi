import React from "react"
import Menu from "../../components/menu/Menu"
import ContactCSS from "./Contact.module.css"
import { useFormik } from "formik"
import cx from "classnames"

import { ReactComponent as Tesla } from "../../assets/shared/desktop/tesla.svg"
import { ReactComponent as Microsoft } from "../../assets/shared/desktop/microsoft.svg"
import { ReactComponent as Hewlett } from "../../assets/shared/desktop/hewlett-packard.svg"
import { ReactComponent as Oracle } from "../../assets/shared/desktop/oracle.svg"
import { ReactComponent as Google } from "../../assets/shared/desktop/google.svg"
import { ReactComponent as Nvidia } from "../../assets/shared/desktop/nvidia.svg"
import ReadyToStart from "../../components/readyToStart/ReadyToStart"
import Footer from "../../components/footer/Footer"

const initialValues = {
  name: "",
  email: "",
  companyName: "",
  title: "",
  message: "",
  stay: false,
}

const onSubmit = (values, actions) => {
  actions.resetForm(values)
}

const validate = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = "This field cannot be empty"
  }

  if (!values.email) {
    errors.email = "This field cannot be empty"
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format"
  }

  if (!values.message) {
    errors.message = "This field cannot be empty"
  }

  return errors
}

const Contact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  // multiple classnames using css modules
  let classNamesName = cx(
    ContactCSS.inputText,
    formik.errors.name && formik.touched.name ? ContactCSS.errors : ""
  )
  let classNamesEmail = cx(
    ContactCSS.inputText,
    formik.errors.email && formik.touched.email ? ContactCSS.errors : ""
  )
  let classNamesMessage = cx(
    ContactCSS.inputText,
    formik.errors.message && formik.touched.message ? ContactCSS.errors : ""
  )

  return (
    <div className={ContactCSS.bgPtn}>
      <div className="wrapper">
        <header className={ContactCSS.contactWrap}>
          <div className={ContactCSS.contactMenu}>
            <Menu />
          </div>
          <h1 className={ContactCSS.contactHeading}>
            Submit a help request and we’ll get in touch shortly.
          </h1>
        </header>
        <section>
          <div>
            <div className={ContactCSS.companyWrap}>
              <div className={ContactCSS.twoCol}>
                <div className={ContactCSS.leftCol}>
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-control">
                        <input
                          type="text"
                          className={classNamesName}
                          name="name"
                          placeholder="Name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className={ContactCSS.error}>
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          className={classNamesEmail}
                          name="email"
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className={ContactCSS.error}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          className={ContactCSS.inputText}
                          name="companyName"
                          placeholder="Company Name"
                          onChange={formik.handleChange}
                          value={formik.values.companyName}
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          className={ContactCSS.inputText}
                          name="title"
                          placeholder="Title"
                          onChange={formik.handleChange}
                          value={formik.values.title}
                        />
                      </div>
                      <div className="form-control">
                        <textarea
                          name="message"
                          className={classNamesMessage}
                          placeholder="Message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message ? (
                          <div className={ContactCSS.error}>
                            {formik.errors.message}
                          </div>
                        ) : null}
                      </div>
                      <div className={ContactCSS.checkwrap}>
                        <input
                          id="stayInTouch"
                          type="checkbox"
                          name="stay"
                          onChange={formik.handleChange}
                          value={formik.values.stay}
                        />{" "}
                        <label htmlFor="stayInTouch">
                          Stay up-to-date with company announcements and updates
                          to our API
                        </label>
                      </div>
                      <div>
                        <button type="submit" className={ContactCSS.btn}>
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <h2 className={ContactCSS.innovators}>
                    Join the thousands of innovators already building with us
                  </h2>
                  <div className={ContactCSS.rightCol}>
                    <Tesla className={ContactCSS.img} alt="Tesla" />
                    <Microsoft className={ContactCSS.img} alt="Microsoft" />
                    <Hewlett className={ContactCSS.img} alt="Hewlett" />
                    <Oracle className={ContactCSS.img} alt="oracle" />
                    <Google className={ContactCSS.img} alt="google" />
                    <Nvidia className={ContactCSS.img} alt="Nvidia" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ReadyToStart />
      <Footer />
    </div>
  )
}

export default Contact

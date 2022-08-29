import React from "react"
import EmailCSS from "./EmailInput.module.css"
import { useFormik } from "formik"

const onSubmit = (values, actions) => {
  actions.resetForm(values)
}

const validate = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = "This field cannot be empty"
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format"
  }

  return errors
}

const EmailInput = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validate,
  })
  return (
    <>
      <div className={EmailCSS.emailContainer}>
        <form onSubmit={formik.handleSubmit}>
          <input
            className={EmailCSS.input}
            type="text"
            name="email"
            placeholder="Enter email address"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <button className={EmailCSS.button} type="submit">
            Schedule a Demo
          </button>
          {formik.touched.email && formik.errors.email ? (
            <div className={EmailCSS.error}>{formik.errors.email}</div>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default EmailInput

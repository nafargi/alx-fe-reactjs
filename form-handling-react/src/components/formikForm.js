import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function formikForm() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    email: Yup.string().required("Email is required.")
      .email("Invalid email address.")
      ,
    password: Yup.string().required("Password is required.")
      .min(8, "Password must be at least 8 characters.")
      ,
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted successfully!");
    console.log(values);
    resetForm(); // Reset form fields
  };
  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
    <h2>Registration Form</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label>
            <Field
              name="username"
              type="text"
              style={{ width: "100%", padding: "5px" }}
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <Field
              name="email"
              type="email"
              style={{ width: "100%", padding: "5px" }}
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <Field
              name="password"
              type="password"
              style={{ width: "100%", padding: "5px" }}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default formikForm

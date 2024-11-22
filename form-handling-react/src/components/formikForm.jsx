import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function formikForm() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial values for the form
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    alert(`Registration Successful!\n\n${JSON.stringify(values, null, 2)}`);
    resetForm();
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

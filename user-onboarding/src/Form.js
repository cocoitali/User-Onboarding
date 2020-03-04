import React from "react";
import { withFormik, Form, Field } from "formik";

function Form() {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(Form);

export default FormikForm;
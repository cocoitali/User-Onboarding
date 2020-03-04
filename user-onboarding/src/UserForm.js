import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios";

function UserForm({ errors, touched, values }) {
	return (
		<Form>
			<div>
				{touched.fname && errors.fname && <p>{errors.fname}</p>}
				<Field type='text' name='fname' placeholder='Name' />
			</div>
			<div>
				{touched.email && errors.email && <p>{errors.email}</p>}
				<Field type='email' name='email' placeholder='Email' />
			</div>
			<div>
				{touched.password && errors.password && <p>{errors.password}</p>}
				<Field type='password' name='password' placeholder='Password' />
			</div>
			<label>
				<Field type='checkbox' name='tos' checked={values.tos} />
				Accept terms of service
			</label>
			<button>Submit!</button>
		</Form>
	)
}

const FormikUserForm = withFormik({
	mapPropsToValues({ email, password, fname, tos }) {
		return {
			email: email || '',
			password: password || '',
			fname: fname || '',
			tos: tos || false,
		}
	},

	validationSchema: Yup.object().shape({
		fname: Yup.string(),
		email: Yup.string()
			.email('Email is not valid')
			.required('Email is required to login'),
		password: Yup.string()
			.min(6, 'Password must be 6 characters or longer')
			.required('Password is required'),
		tos: Yup.bool()
			.required('Please check the TOS box to submit the form')
	}),

	handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
		console.log(values)
		// if (values.email === "alreadytaken@atb.dev") {
		//   setErrors({ email: "That email is already taken" });
		// } else {
		  axios
			.post("https://reqres.in/api/users", values)
			.then(res => {
			  console.log(res); // Data was created successfully and logs to console
			  resetForm();
			  setSubmitting(false);
			})
			.catch(err => {
			  console.log(err); // There was an error creating the data and logs to console
			  setSubmitting(false);
			});
		}
	// }
})(UserForm)

export default FormikUserForm

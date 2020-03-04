import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function Form() {
	return (
		<Form>
			<div>
				{touched.email && errors.email && <p>{errors.email}</p>}
				<Field type='email' name='email' placeholder='Email' />
			</div>
			<div>
				{touched.password && errors.password && <p>{errors.password}</p>}
				<Field type='password' name='password' placeholder='Password' />
			</div>
			<button>Submit!</button>
		</Form>
	)
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || ''
		}
	},

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email()
			.required(),
		password: Yup.string()
			.min(6)
			.required()
	}),

	handleSubmit(values) {
		console.log(values)
		//THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
	}
})(Form)

export default FormikForm

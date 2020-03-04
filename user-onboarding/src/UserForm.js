import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function UserForm({ errors, touched }) {
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

const FormikUserForm = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || ''
		}
	},

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email('Email is not valid')
			.required('Email is required to login'),
		password: Yup.string()
			.min(6, 'Password must be 6 characters or longer')
			.required('Password is required')
	}),

	handleSubmit(values) {
		console.log(values)
		//THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
	}
})(UserForm)

export default FormikUserForm

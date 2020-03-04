import React from 'react'
import { withFormik, Form, Field } from 'formik'

const Form = () => {
	return (
		<div className='form'>
			<Form>
				<Field type='text' name='username' placeholder='Username' />
				<Field type='password' name='password' placeholder='Password' />
				<button>Submit!</button>
			</Form>
		</div>
	)
}

export default Form

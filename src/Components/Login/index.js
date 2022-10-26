import React from "react";
import { Formik } from 'formik'
import * as yup from 'yup'
import './style/styleLogin.css';


function LoginApp() {
    const SCHEMA = yup.object().shape({
        password: yup.string().typeError('Must be string').required('Field cannot be empty'),
        email: yup.string().email('Please check the format of email address email').required('Field cannot be empty')
    })

    return (
        <div>
            <section className="login-form-section">
                <h1>LOGIN TO YOUR ACCOUNT</h1>
                <Formik
                    initialValues={{
                        password: '',
                        email: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => { console.log(values) }}
                    validationSchema={SCHEMA}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

                        <div className='form'>

                            <div className="form-div">
                                

                                    <input
                                        className={'input'}
                                        type={`password`}
                                        name={`password`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder='Password'
                                    />
                                    {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}



            

                                    <input
                                        className={'input'}
                                        type={`email`}
                                        name={`email`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='Email'
                                    />
                                    {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                            </div>
                            <div className="checkbox-wrapper">
                                <input type="checkbox" className="check" />
                                <label>Remember Me</label>
                                <a>Forgot Password</a>
                            </div>
                            <button
                                disabled={!isValid || !dirty}
                                onClick={handleSubmit}
                                type={`submit`}
                                className='sub-btn'
                            >LOGIN</button>
                            <button className="google-btn"><b>G</b> Sign up with Google</button>
                        </div>
                    )}
                </Formik>
            </section>
        </div>
    )
}

export default LoginApp
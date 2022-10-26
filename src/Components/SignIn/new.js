import React from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import './style/styleSignInForm.css';
import './style/style.css';
import Paragraph from './paragraphComponent';


function App() {
  const SCHEMA = yup.object().shape({
    name: yup.string().typeError('Must be string').required('Field cannot be empty'),
    secondName: yup.string().typeError('Must be string').required('Field cannot be empty'),
    password: yup.string().typeError('Must be string').required('Field cannot be empty'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password confirmation needs to match original password').required('Field cannot be empty'),
    email: yup.string().email('Please check the format of email address email').required('Field cannot be empty'),
    displayName: yup.string().typeError('Must be string').required('Field cannot be empty')
  })

  return (
    <div>
      <section className="form-wrapper">
                    <article className="form-wrapper-text">
                        <h1>CREATE AN ACCOUNT</h1>
                        <p>We always keep your name and email address private.</p>
                    </article>
                    <Formik
        initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          displayName: ''
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={SCHEMA}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

          <div className='form'>

            <div className="form-div">
              <div className="form-div-special">

                <input
                  className={'input'}
                  type={`text`}
                  name={`name`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder='First Name'
                />
                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

                <input
                  className={'input'}
                  type={`text`}
                  name={`displayName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.displayName}
                  placeholder='Display Name'
                />
                {touched.displayName && errors.displayName && <p className={'error'}>{errors.displayName}</p>}

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


              </div>

              <div className="form-div-special">
                <input
                  className={'input'}
                  type={`text`}
                  name={`secondName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secondName}
                  placeholder='Last Name'
                />
                {touched.secondName && errors.secondName && <p className='error'>{errors.secondName}</p>}

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


                <input
                  className={'input'}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder='Confirm Password'
                />
                {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
              </div>
            </div>
            <div className="radio-wrapper">
              <input type="radio" name="radioButton" />
              <section>
                <h3>Join As a Buyer</h3>
                <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
              </section>
            </div>
            <div className="radio-wrapper">
              <input type="radio" name="radioButton" />
              <section>
                <h3>Join As a Creative or Marketplace Seller</h3>
                <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
              </section>
            </div>
            <div className="checkbox-wrapper">
              <input type="checkbox" className="check" />
              <label>Allow Squadhelp to send marketing/promotional offers from time to time</label>
            </div>
            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={`submit`}
              className='sub-btn'
            >Create account</button>
            <p>By clicking this button, you agree to our <a>Terms of Service</a>.</p>
            <button className="google-btn"><b>G</b> Sign up with Google</button>
          </div>
        )}
       </Formik>
      </section>
      <Paragraph/>
    </div >
  );
}

export default App;

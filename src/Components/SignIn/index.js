import React, { useState } from 'react';
import App from "./new";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginApp from "../Login";
import CONSTANTS from '../../Constants/constants';
const {BUTTONS} = CONSTANTS;
 const {BUTTONSNAME} = CONSTANTS

function SignIn() {
    const [button, setButton] = useState('');  
    const [buttonName, setbuttonName] = useState('Login');

    const clickHandler = () => {
        setButton(
            button === BUTTONS.SIGNIN ? BUTTONS.LOGIN : BUTTONS.SIGNIN
        );
        setbuttonName (
            buttonName === BUTTONSNAME.SIGNIN ? BUTTONSNAME.LOGIN : BUTTONSNAME.SIGNIN
        )
    }
    return (
        <BrowserRouter>
            <section className="sign-in-form">
                <header className="sign-in-form-header">
                    <img src="https://www.squadhelp.com/img/logo.png" />
                    <button onClick={clickHandler}><b><Link to={button}>{buttonName}</Link></b></button>
                </header>
                <Routes>
                    <Route index element={<App />} />
                    <Route path='/login' element={<LoginApp />} />
                    <Route path='/app' element={<App />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
export default SignIn
import React from 'react';
import Logo from './logo.png';

const Card = () =>{
    return(
        <div className = "card">
            <img src={Logo} alt="logo" className="logo" width='250' heigth='250'></img>
            <div className = "heading">
                <p>Forgot Password</p>
            </div>
            <div className = "details">
                Please enter the email associated with your account
            </div>
            <div className = "input">
                <p className = "details"> Email</p>
                <input className = "textbox" type='text'>
                    
                </input>
                <button>Send link</button>
            </div>
            <div className="addons">Back to login</div>

        </div>
    )
}

export default Card;
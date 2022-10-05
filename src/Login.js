import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
    
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        //some fancy firebase shit
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully creates a new user with a password and email
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // do some firebase stuff
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img 
        className='login__logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=''
        />

        
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
                Terms & Conditions Cookies and Privacy Policy.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Nihla Account</button>
        </div>
    </div>
  )
}

export default Login
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function Login() {
    const navigateTo = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user)
                {
                    navigateTo('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user)
                {
                    navigateTo('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="b_logo.png" alt="..." className='login__logo' />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={(e)=>signIn(e)} className='login__signInButton'>Sign-In</button>
                </form>
                <p>
                    By signing in you agree to Amazon fake clone conditions of use & sale. Please see our Privacy notice, our Cookie notice and our Interest-Based Ads.
                </p>
                <button onClick={(e)=>register(e)} className='login__registerButton'>Create your Amazon account </button>
            </div>
        </div>
    );
}

export default Login;

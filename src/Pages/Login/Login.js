import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const {signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleEmailChange = e =>{
    setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
    setPassword(e.target.value);
    }

    const handleRegistration = e => {
    e.preventDefault();
	console.log(email, password);
    const auth = getAuth();
    if(password.length < 6) {
        setError('Password should be at least 6 characters')
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        history.push(redirect_uri);
    })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    return (
        <div>
            <div className=" container body">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div onSubmit={handleRegistration}>
                            <div>
                            <h2>Please Login</h2>
                            </div>
                            <div className="form-group mt-4">
                                <input onBlur={handleEmailChange} type="text" required className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group mt-3">
                                <input onBlur={handlePasswordChange} type="password" required className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group warn">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                                <label htmlFor="" className="text-danger ms-2">Forgot your password?</label>
                            </div>
                            <div className="text-danger">{error}</div>
                            <div className="from-group mt-4">                                
                                <button onClick={handleRegistration} className="btn-in" type="submit">Login</button>
                            </div>
                        </div>
                        <div className="from-group mt-3">
                            <button onClick={handleGoogleLogin} className="btn-in-g" >Log in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

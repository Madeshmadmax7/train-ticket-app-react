import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'Madesh' && password === '12345') {
            navigate('/home');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className='login-container'>
        <div className="login-ring">
            <i style={{ "--clr": "#00ff0a" }}></i>
            <i style={{ "--clr": "#ff0057" }}></i>
            <i style={{ "--clr": "#fffd44" }}></i>
            <div className="login-form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="login-inputBx">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-inputBx">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-inputBx">
                        <input type="submit" value="Sign in" />
                    </div>
                </form>
                <div className="login-links">
                    <a href="#">Forget Password</a>
                    <a href="#">Signup</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
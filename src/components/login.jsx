import React, { useState } from 'react';
import '../styles/login.css';
import userlogo from '../assets/image.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Signed in successfully as: ${email}`);
    };

    return (
        <div className="login-page-container">
            <div className="login-logo-container">
                <img src={userlogo} alt="User Icon" className="login-user-icon" />
            </div>

            <div className="login-card">
                <h1 className="login-title">Sign in</h1>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email or mobile phone number</label>
                        <input
                            type="text"
                            id="email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="password-label-row">
                            <label htmlFor="password">Password</label>
                            <a href="#forgot" className="forgot-password-link">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-submit-btn">
                        Sign in
                    </button>

                    {/* <p className="login-terms">
                        By continuing, you agree to Amazon's <a href="#conditions">Conditions of Use</a> and <a href="#privacy">Privacy Notice</a>.
                    </p> */}

                    {/* <div className="remember-me-row">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Keep me signed in</label>
                    </div> */}
                </form>
            </div>

            <div className="new-to-amazon-divider">
                <h5>New to Amazon?</h5>
            </div>

            <button className="create-account-btn" onClick={() => alert("Create account feature coming soon!")}>
                Create your Amazon account
            </button>
        </div>
    );
};

export default Login;
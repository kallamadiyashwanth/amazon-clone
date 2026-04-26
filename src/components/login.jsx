import './login.css';
import userlogo from '../assets/image.png';

const Login = () => {
    return (
        <>
            <div class="container">
                <form>
                    <img src={userlogo} alt="User Logo" class="user-icon" />
                    <h1 class="title">User Login</h1><br />
                    <label>Username *</label><br />
                    <input class="text-input" type="text" placeholder="Enter your Username" /><br />
                    <label>Password *</label><br />
                    <input class="text-input" type="password" placeholder="Enter your Password" /><br />
                    <input type="checkbox" />
                    <label>Remember me</label><br />
                    <button class="login-btn">LOGIN</button><br />
                    <div class="links">
                        <p>Don't have an Account?</p>
                        <p>Forgot Password?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
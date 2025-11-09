import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., API call)
        // On successful login, navigate to the dashboard
        navigate("/dashboard");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 style={{ color: "pink" }}>Login Darling</h2>
            <p>Please enter your secrets to unlock the fantasy.</p>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" required /><br /><br />
                <input type="password" placeholder="Password" required /><br /><br />
                <button type="submit">Login</button>
            </form>
            <p onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "purple" }}>
                Don't have an account? Register here.
            </p>
        </div>
    );
}

export default Login;

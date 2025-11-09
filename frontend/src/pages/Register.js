import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Perform registration logic here (e.g., API call)
        // On successful registration, navigate to the dashboard page

        navigate("/dashboard");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 style={{ color: "red" }}>Register Dear</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" required /><br /><br />
                <input type="password" placeholder="Password" required /><br /><br />
                <button type="submit">Register</button>
            </form>
            <p onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "blue" }}>
                Already have an account? Login here.
            </p>
        </div>
    );
}

export default Register;

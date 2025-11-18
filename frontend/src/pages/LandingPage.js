import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {

    const [showButtons, setShowButtons] = useState(false);
    const navigate = useNavigate();

    //show buttons after title animation (2 seconds)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to VTaSk Manager</h1>

            {showButtons && (
                <div className="landing-buttons">
                    <button onClick={() => navigate("/login")} className="btn landing-btn">LOGIN</button>
                    <button onClick={() => navigate("/register")} className="btn landing-btn">REGISTER</button>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
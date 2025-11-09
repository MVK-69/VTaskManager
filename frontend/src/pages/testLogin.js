import React, { useEffect } from "react";

function TestLogin() {
    useEffect(() => {
        // Simulate a login process to test the backend connection
        fetch('http://localhost:8080/hello')
            .then(response => response.text())
            .then(data => console.log("Backend response:", data))
            .catch(error => console.error("Error connecting to backend:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Testing Login Page</h2>
            <p>Check the console for backend connection status.</p>
        </div>
    );
}

export default TestLogin;


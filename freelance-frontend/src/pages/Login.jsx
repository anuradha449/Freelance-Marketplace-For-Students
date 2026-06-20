import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }
        try {
            const response = await API.post("/auth/login", { email, password });

            if (response.data === "Login Successful") {
                // ✅ FETCH THE USER'S ROLE FROM THE DATABASE
                const userRes = await API.get("/users");
                const allUsers = userRes.data;
                const currentUser = allUsers.find(user => user.email === email);

                if (currentUser) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("role", currentUser.role); // Save role!
                    setIsLoggedIn(true);
                    navigate("/");
                } else {
                    setError("User data not found.");
                }
            } else {
                setError(response.data || "Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            setError("Login failed.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>🔐 Login</h1>
                {error && <div className="alert alert-error">{error}</div>}
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState("");
    const [role, setRole] = useState(""); // Automatically filled by buttons
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name || !email || !password || !role) {
            setError("Please fill all fields and select a role.");
            return;
        }
        try {
            const response = await API.post("/auth/register", {
                name,
                email,
                password,
                skills,
                role,
            });
            if (response.data === "Registration Successful") {
                setMessage(`✅ Account created as ${role}! Redirecting to login...`);
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setError(response.data);
            }
        } catch (err) {
            console.error(err);
            setError("Server error. Check console.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>📝 Register</h1>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-error">{error}</div>}

                <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input placeholder="Skills (comma separated)" onChange={(e) => setSkills(e.target.value)} />

                {/* ✅ TWO BIG ROLE BUTTONS */}
                <div style={{ display: "flex", gap: "15px", margin: "20px 0" }}>
                    <button
                        type="button"
                        onClick={() => setRole("Freelancer")}
                        style={{
                            flex: 1,
                            padding: "12px",
                            borderRadius: "12px",
                            border: role === "Freelancer" ? "3px solid #667eea" : "2px solid #ddd",
                            background: role === "Freelancer" ? "#eef2ff" : "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                            color: role === "Freelancer" ? "#667eea" : "#666"
                        }}
                    >
                        👨‍💻 Freelancer
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("Client")}
                        style={{
                            flex: 1,
                            padding: "12px",
                            borderRadius: "12px",
                            border: role === "Client" ? "3px solid #667eea" : "2px solid #ddd",
                            background: role === "Client" ? "#eef2ff" : "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                            color: role === "Client" ? "#667eea" : "#666"
                        }}
                    >
                        🏢 Client
                    </button>
                </div>

                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Register;
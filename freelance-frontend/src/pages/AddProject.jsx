import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddProject() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [status, setStatus] = useState("Open");
    const [postedBy, setPostedBy] = useState(localStorage.getItem("email") || "");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !budget) {
            setError("Title, Description, and Budget are required");
            return;
        }
        try {
            const response = await API.post("/projects", {
                title,
                description,
                budget: parseFloat(budget),
                status,
                postedBy,
            });
            setMessage("✅ Project Added Successfully!");
            console.log(response.data);
            setTimeout(() => {
                navigate("/projects");
            }, 1500);
        } catch (err) {
            console.error(err);
            setError("Failed to add project. Check console.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>➕ Add Project</h1>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" placeholder="Budget ($)" value={budget} onChange={(e) => setBudget(e.target.value)} />
                    <input type="text" placeholder="Status (e.g. Open)" value={status} onChange={(e) => setStatus(e.target.value)} />
                    <input type="text" placeholder="Posted By (Email)" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />
                    <button type="submit">Add Project</button>
                </form>
            </div>
        </div>
    );
}

export default AddProject;
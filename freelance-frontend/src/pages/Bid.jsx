import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Bid() {
    const [bidAmount, setBidAmount] = useState("");
    const [proposal, setProposal] = useState("");

    // Dropdown state
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // ✅ Step 1: Get the currently logged-in user
    const loggedInEmail = localStorage.getItem("email");

    useEffect(() => {
        const fetchProjectsAndUser = async () => {
            try {
                // Fetch all projects for the dropdown
                const projectRes = await API.get("/projects");
                setProjects(projectRes.data);
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        };
        fetchProjectsAndUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!selectedProjectId || !bidAmount || !proposal) {
            setError("Please select a project and fill in all fields.");
            return;
        }

        try {
            setError("");
            setMessage("");

            // ✅ Step 2: Fetch the REAL User ID from the database using their email
            const userRes = await API.get("/users");
            const allUsers = userRes.data;
            const currentUser = allUsers.find(user => user.email === loggedInEmail);

            if (!currentUser) {
                setError("❌ Could not verify your identity. Please log in again.");
                return;
            }

            const realUserId = currentUser.id;

            // ✅ Step 3: Check if this user already bid on this project
            const bidsRes = await API.get("/bids");
            const allBids = bidsRes.data;

            const existingBid = allBids.find(
                (bid) =>
                    (bid.user?.id === realUserId || bid.userId === realUserId) &&
                    (bid.project?.id === parseInt(selectedProjectId) || bid.projectId === parseInt(selectedProjectId))
            );

            if (existingBid) {
                setError("❌ You have already placed a bid on this project!");
                return;
            }

            // ✅ Step 4: Submit the new unique bid using the REAL User ID
            const response = await API.post("/bids", {
                bidAmount: parseFloat(bidAmount),
                proposal,
                status: "Pending",
                user: { id: realUserId },
                project: { id: parseInt(selectedProjectId) },
            });

            setMessage("✅ Bid Placed Successfully!");
            console.log(response.data);
            setTimeout(() => navigate("/bids"), 1000);
        } catch (err) {
            console.error(err);
            setError("Failed to submit bid. Check console.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>💰 Place Bid</h1>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-error">{error}</div>}
                <form onSubmit={handleSubmit}>

                    {/* ✅ DROPDOWN: Select Project */}
                    <select
                        value={selectedProjectId}
                        onChange={(e) => setSelectedProjectId(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px 18px",
                            margin: "10px 0",
                            border: "2px solid rgba(0, 0, 0, 0.06)",
                            borderRadius: "12px",
                            fontSize: "16px",
                            background: "#f8f9fa",
                            color: "#2d2d3f"
                        }}
                    >
                        <option value="">-- Select a Project --</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.title}
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        placeholder="Bid Amount ($)"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Proposal (Why should they hire you?)"
                        value={proposal}
                        onChange={(e) => setProposal(e.target.value)}
                    />

                    {/* ✅ REMOVED Freelancer User ID input entirely! */}
                    {/* The app automatically uses the logged-in user's ID */}
                    <p style={{ fontSize: "12px", color: "#777", margin: "5px 0" }}>
                        ⚡ Bidding securely as: <strong>{loggedInEmail}</strong>
                    </p>

                    <button type="submit">Submit Bid</button>
                </form>
            </div>
        </div>
    );
}

export default Bid;
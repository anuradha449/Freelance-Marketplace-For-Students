import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Review() {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [freelancerUserId, setFreelancerUserId] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loggedInEmail = localStorage.getItem("email");
    const loggedInRole = localStorage.getItem("role");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Role Check
        if (loggedInRole !== "Client") {
            setError("❌ Only Clients can submit reviews!");
            return;
        }

        // 2. Validation (NO Project ID required!)
        if (!rating || !comment || !freelancerUserId) {
            setError("All fields are required");
            return;
        }

        try {
            setError("");
            setMessage("");

            // ✅ Step 1: Call the new backend endpoint to mark bid as Completed
            // It will find the Freelancer's pending bid automatically!
            await API.put(`/bids/complete/${freelancerUserId}`);

            // ✅ Step 2: Submit the Review
            await API.post("/reviews", {
                rating: parseInt(rating),
                comment,
                user: { id: parseInt(freelancerUserId) },
            });

            setMessage("✅ Review Submitted! Bid marked as Completed.");
            setTimeout(() => navigate("/bids"), 1500);

        } catch (err) {
            console.error("🔴 Error:", err);
            setError(`Failed: ${err.response?.data || err.message}`);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>⭐ Submit Review</h1>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
                    Enter the Freelancer ID to complete their bid!
                </p>

                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="Rating (1-5)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Freelancer User ID"
                        value={freelancerUserId}
                        onChange={(e) => setFreelancerUserId(e.target.value)}
                    />

                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}

export default Review;
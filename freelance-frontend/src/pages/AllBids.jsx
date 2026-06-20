import { useEffect, useState } from "react";

function AllBids() {
    const [bids, setBids] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError("");

                // Fetch bids AND projects at the same time
                const [bidsRes, projectsRes] = await Promise.all([
                    fetch("http://localhost:8086/bids"),
                    fetch("http://localhost:8086/projects")
                ]);

                if (!bidsRes.ok || !projectsRes.ok) throw new Error("Failed to fetch data");

                const bidsData = await bidsRes.json();
                const projectsData = await projectsRes.json();

                setBids(bidsData);
                setProjects(projectsData);
            } catch (err) {
                console.error("🔴 Error:", err);
                setError(`Failed to load: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get Project Title from Project ID
    const getProjectTitle = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        return project ? project.title : `Project #${projectId}`;
    };

    return (
        <div className="projects" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1 style={{ color: "white", textAlign: "center", fontSize: "44px", marginBottom: "40px" }}>
                💰 All Bids
            </h1>

            {loading && <div style={{ color: "white", fontSize: "24px", textAlign: "center", padding: "40px" }}>⏳ Loading all bids...</div>}

            {error && (
                <div style={{ background: "white", color: "red", padding: "20px", borderRadius: "10px", maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {!loading && !error && bids.length === 0 && (
                <div style={{ color: "white", fontSize: "20px", textAlign: "center", padding: "40px" }}>📭 No bids have been placed yet.</div>
            )}

            {/* ✅ SIDE-BY-SIDE GRID (2 Columns) */}
            {!loading && !error && bids.length > 0 && (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Forces 2 columns side-by-side
                    gap: "30px"
                }}>
                    {bids.map((bid) => {
                        const projectId = bid.project?.id || bid.projectId;
                        const projectTitle = getProjectTitle(projectId);
                        const isCompleted = bid.status === "Completed";

                        return (
                            <div key={bid.id} style={{
                                background: "white",
                                padding: "25px",
                                borderRadius: "16px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                                textAlign: "left",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                // Colored border on the left
                                borderLeft: isCompleted ? "8px solid #10b981" : "8px solid #f59e0b"
                            }}>
                                {/* Header: Amount + Badge */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                                    <h3 style={{ color: "#764ba2", fontSize: "24px", margin: 0, fontWeight: "700" }}>
                                        💵 ${bid.bidAmount}
                                    </h3>
                                    <span style={{
                                        padding: "6px 16px",
                                        borderRadius: "30px",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        background: isCompleted ? "#d1fae5" : "#fef3c7",
                                        color: isCompleted ? "#065f46" : "#92400e"
                                    }}>
                                        {isCompleted ? "✅ Completed" : "⏳ Pending"}
                                    </span>
                                </div>

                                {/* Project Title */}
                                <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "600", color: "#333" }}>
                                    📋 {projectTitle}
                                </p>

                                {/* Proposal */}
                                <p style={{ margin: "10px 0", fontSize: "16px", color: "#555", lineHeight: "1.5" }}>
                                    📝 {bid.proposal}
                                </p>

                                {/* Freelancer ID (with separator line) */}
                                <div style={{ marginTop: "15px", fontSize: "14px", color: "#777", borderTop: "1px solid #eee", paddingTop: "12px" }}>
                                    <p style={{ margin: 0 }}>👤 Freelancer ID: <strong>{bid.userId || bid.user?.id || "Unknown"}</strong></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default AllBids;
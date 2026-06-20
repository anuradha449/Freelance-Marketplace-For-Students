import { useEffect, useState } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8086/projects");

                if (!response.ok) {
                    throw new Error(`Server responded with status: ${response.status}`);
                }

                const data = await response.json();
                console.log("✅ Fetched projects:", data);
                setProjects(data);
            } catch (err) {
                console.error("🔴 Error fetching projects:", err);
                setError(`Failed to load: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects">
            <h1 style={{ color: "white", textAlign: "center", fontSize: "42px", marginBottom: "30px" }}>
                📋 All Projects
            </h1>

            {/* 1. Loading State */}
            {loading && (
                <div style={{ color: "white", fontSize: "24px", textAlign: "center", padding: "40px" }}>
                    ⏳ Loading projects...
                </div>
            )}

            {/* 2. Error State */}
            {error && (
                <div style={{
                    background: "white",
                    color: "red",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "600px",
                    margin: "20px auto",
                    textAlign: "center"
                }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* 3. Empty State */}
            {!loading && !error && projects.length === 0 && (
                <div style={{ color: "white", fontSize: "20px", textAlign: "center", padding: "40px" }}>
                    📭 No projects yet.
                </div>
            )}

            {/* 4. Display Projects Grid (Hardcoded styles to guarantee it renders) */}
            {!loading && !error && projects.length > 0 && (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "25px",
                    padding: "0 20px 40px 20px",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    {projects.map((project) => (
                        <div key={project.id} style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "16px",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                            transition: "transform 0.3s ease",
                            textAlign: "left"
                        }}>
                            <h3 style={{ color: "#764ba2", marginBottom: "10px", fontSize: "22px" }}>
                                {project.title}
                            </h3>
                            <p style={{ margin: "6px 0", fontSize: "16px", color: "#666" }}>
                                {project.description}
                            </p>
                            <p style={{ margin: "6px 0", fontSize: "16px", color: "#666" }}>
                                💰 Budget: ${project.budget}
                            </p>
                            <p style={{ margin: "6px 0", fontSize: "16px", color: "#666" }}>
                                👤 Posted by: {project.postedBy || "Anonymous"}
                            </p>
                            <span style={{
                                display: "inline-block",
                                padding: "4px 14px",
                                borderRadius: "20px",
                                fontSize: "14px",
                                fontWeight: "600",
                                background: "#e0f2fe",
                                color: "#0369a1",
                                marginTop: "8px"
                            }}>
                                {project.status || "Open"}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Projects;
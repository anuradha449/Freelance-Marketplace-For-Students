function Home() {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    return (
        <div className="home">
            <h1>🚀Freelance Marketplace</h1>

            {/* Welcome Message */}
            <h2>{email ? `Welcome back, ${email}` : "Welcome, Guest!"}</h2>

            {/* GUEST VIEW */}
            {!email && (
                <p>
                    Find Projects 📋<br />
                    Bid and Win 💼<br />
                    Earn Money 💰<br />
                    <span style={{ color: "#ffd700", fontWeight: "bold" }}>
                        👉 Please Login or Register to get started!
                    </span>
                </p>
            )}

            {/* ✅ FREELANCER ROADMAP */}
            {email && role === "Freelancer" && (
                <div style={{ marginTop: "20px" }}>
                    <p style={{ fontSize: "20px", marginBottom: "20px" }}>
                        💼 <strong>Welcome, Freelancer!</strong> Here is your roadmap:
                    </p>
                    <div style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        padding: "20px",
                        borderRadius: "16px",
                        backdropFilter: "blur(5px)",
                        maxWidth: "600px",
                        margin: "0 auto",
                        textAlign: "left",
                        lineHeight: "2.2"
                    }}>
                        <p>📋 <strong>Projects:</strong> Browse all available jobs posted by clients.</p>
                        <p>💰 <strong>All Bids:</strong> See what other freelancers are charging.</p>
                        <p>📝 <strong>Place Bid:</strong> Submit your proposal and price.</p>
                        <p style={{ marginTop: "15px", color: "#ffd700", fontWeight: "bold" }}>
                            ✅ Ready to earn? Go to <strong>Projects</strong> and start bidding!
                        </p>
                    </div>
                </div>
            )}

            {/* ✅ CLIENT ROADMAP */}
            {email && role === "Client" && (
                <div style={{ marginTop: "20px" }}>
                    <p style={{ fontSize: "20px", marginBottom: "20px" }}>
                        🏢 <strong>Welcome, Client!</strong> Here is your roadmap:
                    </p>
                    <div style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        padding: "20px",
                        borderRadius: "16px",
                        backdropFilter: "blur(5px)",
                        maxWidth: "600px",
                        margin: "0 auto",
                        textAlign: "left",
                        lineHeight: "2.2"
                    }}>
                        <p>➕ <strong>Add Project:</strong> Post a new job and set your budget.</p>
                        <p>📋 <strong>Projects:</strong> View all jobs (including the ones you posted).</p>
                        <p>💰 <strong>All Bids:</strong> Review proposals from freelancers.</p>
                        <p>⭐ <strong>Review:</strong> After the job is done, leave a rating to complete the bid.</p>
                        <p style={{ marginTop: "15px", color: "#ffd700", fontWeight: "bold" }}>
                            ✅ Ready to hire? Go to <strong>Add Project</strong> and get started!
                        </p>
                    </div>
                </div>
            )}

            {/* FALLBACK (Logged in but role missing) */}
            {email && !role && (
                <p style={{ marginTop: "20px", color: "#ffd700" }}>
                    ⚠️ Please Logout and Login again to see your specific dashboard.
                </p>
            )}
        </div>
    );
}

export default Home;
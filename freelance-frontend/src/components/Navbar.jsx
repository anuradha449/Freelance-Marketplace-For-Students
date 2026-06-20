import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <div className="navbar">
            <Link to="/">Home</Link>

            {!isLoggedIn && <Link to="/login">Login</Link>}
            {!isLoggedIn && <Link to="/register">Register</Link>}

            {/* Always visible for everyone */}
            <Link to="/projects">Projects</Link>
            <Link to="/bids">All Bids</Link>

            {/* ✅ FREELANCER TABS */}
            {isLoggedIn && role === "Freelancer" && (
                <>
                    <Link to="/bid">Place Bid</Link>
                </>
            )}

            {/* ✅ CLIENT TABS */}
            {isLoggedIn && role === "Client" && (
                <>
                    <Link to="/addproject">Add Project</Link>
                    <Link to="/review">Review</Link>
                </>
            )}

            {isLoggedIn && (
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </div>
    );
}

export default Navbar;
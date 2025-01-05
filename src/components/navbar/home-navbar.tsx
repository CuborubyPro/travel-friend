import { Link } from "react-router-dom";

export default function HomeNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/">Travel Friend</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        fd
                    </div>
                    <div className="d-flex">
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
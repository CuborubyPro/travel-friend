import { Link } from "react-router-dom";

export default function HomeNavbar() {
    return (
        <>
            <nav>
                <div className="alignLeft">
                    <Link to="/">Travel Friend</Link>
                </div>
                <div className="alignRight">
                    <Link to="/login">Log In</Link>
                </div>
            </nav>
        </>
    )
}
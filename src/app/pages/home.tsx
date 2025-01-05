import { useNavigate } from "react-router-dom";
import HomeNavbar from "@/components/navbar/home-navbar";

export default function LandingPage(){
    const navigate = useNavigate()

    return (
        <>
            <div>
                <HomeNavbar />
            </div>
            <div>
                <h1>Hola Mundo</h1>
            </div>
        </>
    )
}
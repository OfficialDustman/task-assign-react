import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import NavBar from '../Layouts/NavBar'

function Home() {
    
    // const navigate = useNavigate();
    // navigate("/home/task");

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default Home;
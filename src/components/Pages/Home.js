import { useLocation, useNavigate, Outlet } from "react-router-dom";
import NavBar from '../Layouts/NavBar'
import { useEffect } from "react";

function Home() {

    const navigate = useNavigate(),
        location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            navigate("/home/task");
        }
    }, [location, navigate]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                width: '80%'
            }}
        >
            <Outlet />
            <NavBar />
        </div>
    )
}

export default Home;

import { useLocation, useNavigate, Outlet } from "react-router-dom";
import NavBar from '../Layouts/NavBar'

function Home() {
    
    const navigate = useNavigate(),
          location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            navigate("/home/task");  
        }
    }, [location, navigate]);

    return (
        <>
            <Outlet>
                <NavBar/>
            </Outlet>
        </>
    )
}

export default Home;

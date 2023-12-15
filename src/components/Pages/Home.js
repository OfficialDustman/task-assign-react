import { useLocation, useNavigate, Outlet } from "react-router-dom";
import NavBar from '../Layouts/NavBar';
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";

function Home() {

    const [isLogged, setIsLogged] = useState(true)
    const { userData } = useContext(AuthContext)
    console.log(userData);

    const navigate = useNavigate(),
        location = useLocation();

    useEffect(() => {
        if (!userData) {
            setIsLogged(false)
        }
        else if (isLogged && location.pathname === '/home') {
            navigate("/home/task");
        }
    }, [location, navigate]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                width: '100%',
                background: 'linear-gradient(180deg, #FFF 0%, #DFE4F1 100%)'
            }}
        >
            {isLogged ?
                <>
                    <Outlet />
                    <NavBar />
                </>
                :     
                <p>Sign In First</p>
            }

        </div>
    )
}

export default Home;

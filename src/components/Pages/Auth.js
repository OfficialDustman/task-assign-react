import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate, Routes, Route, Outlet } from "react-router-dom";
import SignIn from "../Layouts/Auth/SignIn";
import SignUp from "../Layouts/Auth/SignUp";
import Reset from "../Layouts/Auth/Reset";

function Auth() {
    const [hasAccount, setHasAccount] = useState(true);
    const [teams, setTeams] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const hasAccountHandler = () => {
        setHasAccount(!hasAccount)
    }

    useEffect(() => {
        if (hasAccount) {
            navigate("signin");
        }
    }, [hasAccount]);

    useEffect(() => {
        // Using fetch
        fetch(`http://localhost/repos/task-assign/api/getTeams.php`)
        .then(response => response.json())
        .then(data => {
            setTeams(data);
            console.log(data.message);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);


    return (
        <>
            <h1>Welcome to Task-Assign</h1>
            <Outlet />
            {hasAccount ?
                (<p>
                    Don't Have an account?
                    <Link
                        to={'signup'}
                        onClick={hasAccountHandler}
                    >
                        SignUp
                    </Link>
                </p>)
                :
                (<p>
                    Already Have an account?
                    <Link
                        to={'signin'}
                        onClick={hasAccountHandler}
                    >
                        SignIn
                    </Link>
                </p>)
            }
        </>
    )
}

export default Auth;
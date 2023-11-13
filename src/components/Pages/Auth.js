import { useLocation, Link } from "react-router-dom";
import SignIn from "../Layouts/Auth/SignIn";
import SignUp from "../Layouts/Auth/SignUp";
import Reset from "../Layouts/Auth/Reset";

function Auth() {
    const location = useLocation();
    console.log(location);
    
    return (
        <>
            <h1>Welcome to Task-Assign</h1>
            <Link to={'auth'}>Continue</Link>
            <Link to={'signin'}>SignIn</Link>
            <Link to={'signup'}>SignUp</Link>
        </>
    )
}

export default Auth;
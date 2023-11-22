import { useState, useEffect } from "react";
// import useFetch from "../../hooks/useFetch";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function Auth() {
    const [hasAccount, setHasAccount] = useState(true);
    const [teams, setTeams] = useState(null);

    const navigate = useNavigate();
    const hasAccountHandler = () => {
        setHasAccount(!hasAccount)
    }

    useEffect(() => {
        if (hasAccount) {
            navigate("signin");
        }
    }, [hasAccount, navigate]);
    
    // const { fetchData } = useFetch(
    //     "http://localhost/repos/task-assign/api/getTeams.php"
    // );
    // setTeams(fetchData);
    
    useEffect(() => {
        // Using fetch
        fetch(`http://localhost/repos/task-assign/api/getTeams.php`)
        .then(response => response.json())
        .then(data => {
            setTeams(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <Container className="auth">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8} lg={6}>
                    <h1 className="text-center">Welcome to Task-Assign</h1>
                    <Outlet context={[teams]} />
                    {hasAccount ?
                        (
                            <p className="text-center">
                                Don't Have an account?
                                <Link
                                    to={'signup'}
                                    onClick={hasAccountHandler}
                                >
                                    SignUp
                                </Link>
                            </p>
                        ) :
                        (
                            <p className="text-center">
                                Already Have an account?
                                <Link
                                    to={'signin'}
                                    onClick={hasAccountHandler}
                                >
                                    SignIn
                                </Link>
                            </p>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;
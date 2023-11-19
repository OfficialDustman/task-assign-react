import UIButton from '../../Ui/Button';
import UIForm from '../../Ui/Form';
import { Form, InputGroup, Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import AuthContext from '../../../store/auth-context';
import { useState, useEffect, useContext } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoaded, setIsLoaded] = useState(true)
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    
    function submitHandler(e) {
        e.preventDefault();

        setIsLoaded(false)

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
    
        fetch("http://localhost/repos/task-assign/api/user/confirmUser.php", {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
            setIsLoaded(true)
            console.log(data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    return (
        <UIForm onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Enter Your Email</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Email</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="user@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter Your Password</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <UIButton type='submit'>
                {isLoaded ? 'Sign In' : 
                <Spinner animation="border" variant="light" size="sm" />}
            </UIButton>
        </UIForm>
    )
}

export default SignIn;
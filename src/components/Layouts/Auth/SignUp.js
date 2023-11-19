import UIButton from '../../Ui/Button';
import UIForm from '../../Ui/Form';
import { Form, InputGroup, Spinner } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";
// import AuthContext from '../../../store/auth-context';
import { useState, useEffect, useContext } from 'react';

function SignUp() {
    const [teams] = useOutletContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [team, setTeam] = useState('');
    const [selectTeam, setSelectTeam] = useState(true);
    const [isLoaded, setIsLoaded] = useState(true)
    const [data, setData] = useState(null);

    function submitHandler(e) {
        e.preventDefault();

        setIsLoaded(false)

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);
        formData.append('team', team);

        fetch("http://localhost/repos/task-assign/api/user/createUser.php", {
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
                <Form.Label>Select Your Team</Form.Label>
                <Form.Select
                    name="teams"
                    required
                    value={team}
                    onChange={(e) => {
                        setSelectTeam(!selectTeam)
                        setTeam(e.target.value)
                    }}
                >
                    {selectTeam && 
                        <option>Teams &darr;</option>}
                    {teams?.data.map((team) => (
                        <option key={team.team_id} value={team.team_name}>{team.team_name}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter Your Username</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Username</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Your UserName"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>

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
                {isLoaded ? 'Sign Up' : 
                <Spinner animation="border" variant="light" size="sm" />}
            </UIButton>
        </UIForm>
    )
}

export default SignUp;
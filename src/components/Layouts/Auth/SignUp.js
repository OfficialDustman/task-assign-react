import UIButton from '../../Ui/Button';
import UIForm from '../../Ui/Form';
import { Form, InputGroup } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";

function SignUp() {
    const [teams] = useOutletContext();
    return (
        <UIForm>
            <Form.Group className="mb-3">
                <Form.Label>Select Your Team</Form.Label>
                <Form.Select
                    name="teams"
                    required
                >
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
                        required
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Enter Your Email</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="user@email.com"
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
                        required
                    />
                </InputGroup>
            </Form.Group>

            <UIButton type='submit'>Sign Up</UIButton>
        </UIForm>
    )
}

export default SignUp;
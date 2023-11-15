import UIButton from '../../Ui/Button';
import UIForm from '../../Ui/Form';
import { Form, InputGroup } from 'react-bootstrap';

function SignIn() {

    return (
        <UIForm>
            <Form.Group className="mb-3">
                <Form.Label>Enter Your Email</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Email</InputGroup.Text>
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
                        placeholder="Password"
                        required
                    />
                </InputGroup>
            </Form.Group>

            <UIButton type='submit'>Sign In</UIButton>
        </UIForm>
    )
}

export default SignIn;
import { Form } from 'react-bootstrap';

function UIForm ({children}) {
    return (
        <Form className="mt-3 border rounded p-3 bg-light">
            {children}
        </Form>
    )
}

export default UIForm;
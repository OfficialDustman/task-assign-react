import { Form } from 'react-bootstrap';

function UIForm ({children, onSubmit}) {
    return (
        <Form 
            className="mt-3 border rounded p-3 bg-light"
            onSubmit={onSubmit}
        >
            {children}
        </Form>
    )
}

export default UIForm;
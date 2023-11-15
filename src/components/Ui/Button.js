import { Button } from 'react-bootstrap';

function UIButton({children, type, styles}) {
    return (
        <Button 
            type={type} 
            className={'btn border rounded-pill'}
            style={{ backgroundColor: '#613BE7',  styles}}
        > 
            {children}
        </Button>
    );
}

export default UIButton;
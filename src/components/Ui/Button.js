import { Button } from 'react-bootstrap';

function UIButton({children, type, styles}) {
    styles = {backgroundColor: '#613BE7', color : '#FFF', ...styles}
    return (
        <Button 
            type={type} 
            className={'btn border rounded-pill'}
            style={styles}
        > 
            {children}
        </Button>
    );
}

export default UIButton;
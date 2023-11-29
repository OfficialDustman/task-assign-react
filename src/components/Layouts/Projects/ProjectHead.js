import { Card } from 'react-bootstrap/';

function Project({username}) {

    return (
        <header>
            <Card>
                <Card.Img 
                    variant="top" 
                    src={'https://picsum.photos/seed/' + username +'200/300'} 
                />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </header>
    )
}

export default Project;
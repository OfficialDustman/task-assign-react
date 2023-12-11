import { Card, Button   } from "react-bootstrap"

function Profile() {
    
    return (
        <>
        <Card>
          <Button
            variant="light"
          >
            <Badge
              style={{
                backgroundColor: '#613BE7 !important',
                textTransform: 'uppercase',
                fontSize: '1.2rem',
              }}
            >
              {username[0]}
            </Badge>
            {' '}
            {username}
          </Button>
        </Card>
        </>
    )
}

export default Profile;
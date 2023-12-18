import { Card, Button, Badge  } from "react-bootstrap"
import AuthContext from "../../store/auth-context";

function Profile() {
  const { userData } = useContext(AuthContext)
  
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
              {userData[0]}
            </Badge>
            {' '}
            {userData}
          </Button>
        </Card>
        </>
    )
}

export default Profile;
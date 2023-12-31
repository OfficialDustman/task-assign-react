import { Card, Button, Badge } from "react-bootstrap"
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/auth-context";

function Profile() {
  const { userData } = useContext(AuthContext)

  return (
    <>
      <Card
        style={{
          width: '75%',
          margin: '0 auto',
        }}
      >
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
            {userData.username[0]}
          </Badge>
          {' '}
          {userData.username}
        </Button>

        <Card.Body>
          <Card.Title>Email : {userData.email}</Card.Title>
          <Card.Text>
            Team : {userData.team_name}
            {userData.team_description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Profile;
import UIButton from "../../Ui/Button";
import UIForm from "../../Ui/Form";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { useOutletContext, useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useState, useContext, useEffect } from "react";
import SuccessModal from '../../Ui/SuccessModal';

function SignIn() {
  const [teams] = useOutletContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { userData, changeUserData } = useContext(AuthContext)

  const navigate = useNavigate();

  function enrichUserDataWithTeams(userData, teamsData) {
    return userData.map(user => {
      const team = teamsData.find(team => team.team_id === user.team_id);
      return {
        ...user,
        team_name: team ? team.team_name : null,
        team_description: team ? team.team_description : null,
      };
    });
  }
  
  function submitHandler(e) {
    e.preventDefault();

    setIsLoaded(false);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("http://localhost/repos/task-assign/api/user/confirmUser.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json() )
      .then((data) => {
        setFetchData(data);
        setIsLoaded(true);
        changeUserData(fetchData.data[0]);
      })
      .catch((error) => {
        setError(error)
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    if(fetchData){
      console.log(fetchData)
      console.log(teams)
      const enrichedUserData = enrichUserDataWithTeams(fetchData.data, teams.data);
      console.log(enrichedUserData);
      handleOpenSuccessModal();
    }
  }, [fetchData])

  const handleOpenSuccessModal = () => {
    if (fetchData.status === 'success') {
      setShowSuccessModal(true);
    } else {
      setError(fetchData.status)
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/home");
  };

  return (
    <UIForm onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Enter Your Email</Form.Label>
        <InputGroup>
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>

      {error && <p>{error.message}</p>}

      <UIButton type="submit">
        {isLoaded ? (
          "Sign In"
        ) : (
          <Spinner animation="border" variant="light" size="sm" />
        )}
      </UIButton>

      <SuccessModal 
        show={showSuccessModal} 
        handleClose={handleCloseSuccessModal}
        data={fetchData}
      />
    </UIForm>
  );
}

export default SignIn;
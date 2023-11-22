import UIButton from "../../Ui/Button";
import UIForm from "../../Ui/Form";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useState, useContext } from "react";
import SuccessModal from '../../Ui/SuccessModal';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { userData, changeUserData } = useContext(AuthContext)

  const navigate = useNavigate();

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
        dataObjHandler(fetchData.data[0]);
        handleOpenSuccessModal();
        console.log(userData);
      })
      .catch((error) => {
        setError(error)
        console.error("Error fetching data:", error);
      });
  }

  const dataObjHandler = (originalObject) => {
    console.log(originalObject);
    const arrayOfObjects = Object.keys(originalObject).map(key => ({ [key]: originalObject[key] }));

    console.log(arrayOfObjects);
    // changeUserData(arrayOfObjects);
  }

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
import EditPlanet from "../Components/EditPlanet";
import { Container } from "react-bootstrap";

function Edit() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="New Edit">
        <h2 className="text-center">Edit</h2>
        <EditPlanet />
      </div>
    </Container>
  );
}

export default Edit;

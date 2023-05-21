import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Modal show={true} centered>
        <Modal.Body style={{ backgroundColor: "#C9D5AF" }}>
          <h1 className="text-center">Sorry, no page found</h1>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="primary"
              style={{ backgroundColor: "#800080", borderColor: "#800080", fontFamily: "Syne" }}
            >
              Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Error;

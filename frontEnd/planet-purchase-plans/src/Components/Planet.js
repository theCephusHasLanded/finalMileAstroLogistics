import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Planet({ planet }) {
  return (
    <tr>
      <td>
        <Card bg="light" style={{ width: "18rem" }} className="text-center">
          <Card.Header>
            {planet.signs_of_life ? (
              <span>🌱 Signs of Life </span>
            ) : (
              <span>🚫 No Signs of Life</span>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>{planet.name}</Card.Title>
            <Card.Text>
              <a href={planet.photo_url} target="_blank" rel="noreferrer">
                View Photo
              </a>
            </Card.Text>
            <Link to={`/planets/${planet.id}`}>
              <Button
                style={{
                  backgroundColor: "chartreuse",
                  fontFamily: "Funk Gibson",
                }}
              >
                Learn More 🚀
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </td>
    </tr>
  );
}

export default Planet;

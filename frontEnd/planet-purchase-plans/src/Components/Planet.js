import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Planet({ planet }) {
  const getImagePath = (imageName) => {
    return require(`./images/${imageName}`).default;
  };

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
          {planet.photo_url && (
            <Card.Img variant="top" src={require(`${planet.photo_url}`)} alt={planet.name} />
          )}
          <Card.Body>
            <Card.Title>{planet.name}</Card.Title>
            <Card.Text>
              {/* <a href={planet.photo_url} target="_blank" rel="noreferrer">
                View Photo
              </a> */}
            </Card.Text>
            <Link to={`/planets/${planet.id}`}>
              <Button
                style={{
                  backgroundColor: "#800080",
                  fontFamily: "Syne",
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

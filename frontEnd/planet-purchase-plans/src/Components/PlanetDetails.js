import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import Reviews from "./Reviews";
import Cart from "../Components/Cart";

const API = process.env.REACT_APP_API_URL;

function PlanetDetails() {
  const [planet, setPlanet] = useState({
    name: "",
    distance_from_earth: "",
    signs_of_life: false,
    neighboring_planets: "",
    galaxy: "",
    photo_url: "",
  });
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/planets/${id}`)
      .then((response) => {
        console.log(response.data);
        setPlanet(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, [id]);

  const deletePlanet = () => {
    axios
      .delete(`${API}/planets/${id}`)
      .then(
        () => {
          navigate(`/planets`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deletePlanet();
  };

  return (
    <div>
      <Card className="text-center" style={{ backgroundColor: "#800080" }}>
        <Card.Body style= {{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h3 className="text-success" style={{ fontFamily: "Syne", textShadow: "0px 0px 20px #FF7F00" }}>
            {planet.signs_of_life ? (
              <span>🌱 It's Alive!</span>
            ) : (
              <span>This Planet Does Not Have Life ☄️</span>
            )}<br/>{planet.name}{" "}
          </h3>
          <h5 style={{ fontFamily: "Syne", textShadow: "0px 0px 20px #FF7F00", fontSize: "1.8rem" }}>
            { <a href={planet.url}>{planet.name}</a> } is {" "}{planet.distance_from_earth} Lightyears away from Earth.
          </h5>
          <h6 className="text-muted" style={{ fontFamily: "Syne", textShadow: "0px 0px 20px #FF7F00" }}>located in the {planet.galaxy}*</h6>
          {planet ? (
            <div>
              <p>Neighboring Planets: {planet.neighboring_planets}</p>
            </div>
          ) : null}

          {planet.photo_url && (
            <img src={require(`${planet.photo_url}`)}alt={planet.name} style={{ flex: 1, width: "100%", maxHeight: "550px", objectFit: "cover" }} />
          )}
            <br></br>
          <ButtonGroup className="my-3">
            <Link
              to={`/planets`}
              className="btn btn-primary"
              style={{
                backgroundColor: "#FF7F00",
                fontFamily: "Syne",
                boxShadow: "0px 0px 20px #FF7F00",
                textShadow: "0px 0px 20px #FF7F00",
              }}
            >
              🔙
            </Link>
            <Link
              to={`/planets/${id}/edit`}
              className="btn btn-warning"
              style={{
                backgroundColor: "#FFA500",
                fontFamily: "Syne",
                boxShadow: "0px 0px 20px #FFA500",
                textShadow: "0px 0px 20px #FFA500",
              }}
            >
              ✍🏼
            </Link>
            <Button
              className="btn btn-danger"
              onClick={handleDelete}
              style={{
                backgroundColor: "#FF4500",
                fontFamily: "Syne",
                boxShadow: "0px 0px 20px #FF4500",
                textShadow: "0px 0px 20px #FF4500",
              }}
            >
              🗑️
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <Reviews />
      <Cart planetName={planet.name} />
    </div>
  );
}

export default PlanetDetails;

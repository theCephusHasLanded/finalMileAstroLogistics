import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ThemeContext from "../Components/ThemeContext";

const API = process.env.REACT_APP_API_URL;

function EditPlanet() {
  const { darkMode } = useContext(ThemeContext);
  let { id } = useParams();
  let navigate = useNavigate();

  const [planet, setPlanet] = useState({
    name: "",
    distance_from_earth: "",
    signs_of_life: false,
    neighboring_planets: "",
    galaxy: "",
  });

  const updatePlanet = (updatedPlanet) => {
    axios
      .put(`${API}/planets/${id}`, updatedPlanet)
      .then(() => {
        navigate(`/planets/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlanet({ ...planet, signs_of_life: !planet.signs_of_life });
  };

  useEffect(() => {
    axios.get(`${API}/planets/${id}`).then(
      (response) => setPlanet(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlanet(planet);
  };

  const themeMode = darkMode ? "dark" : "light";
  const buttonColor = darkMode ? "#333" : "#8BC34A";
  const buttonTextColor = darkMode ? "#FFF" : "#000";

  return (
    <div
      className={`New ${themeMode}`}
      style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}
    >
      <h2>Edit Planet</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of planet"
            value={planet.name}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="distance_from_earth">
          <Form.Label>Distance from Earth:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Distance in Light Years"
            value={planet.distance_from_earth}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="signs_of_life">
          <Form.Check
            type="checkbox"
            label="Signs of Life"
            checked={planet.signs_of_life}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Form.Group controlId="neighboring_planets">
          <Form.Label>Neighboring Planets:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Neighboring planets"
            value={planet.neighboring_planets}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="galaxy">
          <Form.Label>Galaxy:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Galaxy"
            value={planet.galaxy}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            Submit
          </Button>
        </Form>
  
        <Link to={`/planets/${id}`}>
          <Button variant="danger">Cancel</Button>
        </Link>
      </div>
    );
  }
  
  export default EditPlanet;
  

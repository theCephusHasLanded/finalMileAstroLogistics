import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function NewPlanet() {
  const navigate = useNavigate();

  const addPlanet = async (newPlanet) => {
    try {
      const response = await axios.post(`${API}/planets`, newPlanet);
      if (response.data) {
        console.log(response.data);
        navigate(`/planets`);
      } else {
        throw new Error("Error adding planet");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding planet");
    }
  };

  const [planet, setPlanet] = useState({
    name: "",
    distance_from_earth: "",
    signs_of_life: false,
    neighboring_planets: "",
    galaxy: "",
  });

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlanet({ ...planet, signs_of_life: !planet.signs_of_life });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlanet({
      name: planet.name,
      distance_from_earth: planet.distance_from_earth,
      signs_of_life: planet.signs_of_life,
      neighboring_planets: planet.neighboring_planets,
      galaxy: planet.galaxy,
    });
  };

  return (
    <div
      className="New"
      style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={planet.name}
            placeholder="Planet Name"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="distance_from_earth">
          <Form.Label>Distance from Earth:</Form.Label>
          <Form.Control
            type="number"
            value={planet.distance_from_earth}
            placeholder="Distance in Light Years"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="signs_of_life">
          <Form.Check
            type="checkbox"
            inline
            label="Signs of Life"
            checked={planet.signs_of_life}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Form.Group controlId="neighboring_planets">
          <Form.Label>Neighboring Planets:</Form.Label>
          <Form.Control
            type="text"
            value={planet.neighboring_planets}
            placeholder="Neighboring Planets"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="galaxy">
          <Form.Label>Galaxy:</Form.Label>
          <Form.Control
            type="text"
            value={planet.galaxy}
            placeholder="Galaxy"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#8BC34A" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewPlanet;

import React from "react";
import { Container } from "react-bootstrap";
import PlanetDetails from "../Components/PlanetDetails";

function Show() {
  return (
    <Container className="Show text-center">
      <h2>Learn More</h2>
      <PlanetDetails />
    </Container>
  );
}

export default Show;

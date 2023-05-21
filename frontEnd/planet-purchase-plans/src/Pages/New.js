import React from "react";
import { Container } from "react-bootstrap";
import NewPlanet from "../Components/NewPlanet";

function New() {
  return (
    <Container className="text-center" style={{ paddingTop: "50px" }}>
      <h2>New Planets to Discover</h2>
      <NewPlanet />
    </Container>
  );
}

export default New;

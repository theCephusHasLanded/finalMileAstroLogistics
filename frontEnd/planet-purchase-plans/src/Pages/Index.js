import React from "react";
import { Container } from "react-bootstrap";
import Planets from "../Components/Planets";

function Index() {
  return (
    <Container className="Index text-center">
      <h2>We Have The Planets!</h2>
      <Planets />
    </Container>
  );
}

export default Index;

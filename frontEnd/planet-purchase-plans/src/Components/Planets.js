import axios from "axios";
import { useState, useEffect } from "react";
import Planet from "./Planet";
import { Table, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/planets`)
      .then((response) => setPlanets(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);

  const containerStyle = {
    height: "calc(80vh - 200px)", // Adjust the height as needed
    overflow: "auto",
  };

  const tableStyle = {
    background: "linear-gradient(to bottom, #44234D, #360B41)",
    border: "none",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px #BFBFBF",
    marginBottom: "20px", // Add spacing between cards
  };

  const tableHeaderStyle = {
    background: "linear-gradient(to bottom, #6A3795, #4D1C76)",
    color: "white",
    textAlign: "center",
    fontFamily: "Syne",
  };

  const buttonStyle = {
    backgroundColor: "#7327A6",
    color: "white",
    fontFamily: "Syne",
  };

  return (
    <div className="Planets d-flex flex-column align-items-center" style={containerStyle}>
      <Table style={tableStyle} responsive>
        <thead>
          <tr>
            <th colSpan="2" style={tableHeaderStyle}>
              <Button variant="success" style={buttonStyle}>
                Take Me to the Planets!
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => {
            return <Planet key={planet.id} planet={planet} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Planets;

const express = require("express");
const planets = express.Router();
const {
  getAllPlanets,
  getAPlanet,
  createPlanet,
  deletePlanet,
  updatePlanet,
} = require("../queries/planets");
const { checkName} = require("../validations/checkPlanets");

//GET ROUTE
planets.get("/", async (req, res) => {
  const allPlanets = await getAllPlanets();
  res.status(200).json(allPlanets);
});

//GET ONE ROUTE
planets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const planet = await getAPlanet(id); 

  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ error: "Planet not found" });
  }
});

//CREATE ROUTE
planets.post("/", checkName, async (req, res) => {
  const newPlanet = req.body;

  if (!newPlanet.calorie) {
    res.status(400).json({ error: "Planet is missing" });
  } else {
    try {
      const addedPlanet = await createPlanet(newPlanet);
      res.status(200).json(addedPlanet);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
});

//DELETE ROUTE
planets.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlanet = await deletePlanet(id);
    if (deletedPlanet.id) {
      res.status(200).json(deletedPlanet);
    } else {
      throw new Error("A planet with that Id does not exist");
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//UPDATE ROUTE
planets.put("/:id", checkName, async (req, res) => {
  const { id } = req.params;
  const planetToUpdate = req.body;
  console.log(id, req.body)
  try {
    const existingPlanet = await getAPlanet(id);

    if (!existingPlanet) {
      res.status(404).json({ error: "Planet not found" });
      return;
    }

    // Check if any changes were made to the planet object
    const isModified = Object.keys(planetToUpdate).some(
      (key) => planetToUpdate[key] !== existingPlanet[key]
    );

    if (!isModified) {
      res.status(400).json({ error: "No changes detected in the planet object" });
      return;
    }

    const updatePlanet = await updatePlanet(id, planetToUpdate);
    res.status(200).json(updatePlanet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = planets;

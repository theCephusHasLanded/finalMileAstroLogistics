const db = require("../db/dbConfig");

// GET ALL
const getAllPlanets = async () => {
  try {
    const allPlanets = await db.any("SELECT * FROM planets");
    return allPlanets;
  } catch (error) {
    return error;
  }
};

// GET ONE
const getAPlanet = async (id) => {
  try {
    const planet = await db.one("SELECT * FROM planets WHERE id=$1", id);
    return planet;
  } catch (error) {
    return error;
  }
};

// CREATE ONE
const createPlanet = async (newPlanet) => {
  try {
    const createdPlanet = await db.one(
      "INSERT INTO planets (name, distance_from_earth, signs_of_life, neighboring_planets, galaxy) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        newPlanet.name,
        newPlanet.distance_from_earth,
        newPlanet.signs_of_life,
        newPlanet.neighboring_planets,
        newPlanet.galaxy,
      ]
    );
    return createdPlanet;
  } catch (error) {
    return error;
  }
};

// UPDATE ONE
const updatePlanet = async (id, planetToUpdate) => {
  try {
    const updatedPlanet = await db.one(
      "UPDATE planets SET name=$1, distance_from_earth=$2, signs_of_life=$3, neighboring_planets=$4, galaxy=$5 WHERE id=$6 RETURNING *",
      [
        planetToUpdate.name,
        planetToUpdate.distance_from_earth,
        planetToUpdate.signs_of_life,
        planetToUpdate.neighboring_planets,
        planetToUpdate.galaxy,
        id,
      ]
    );
    return updatedPlanet;
  } catch (error) {
    return error;
  }
};

// DELETE ONE
const deletePlanet = async (id) => {
  try {
    const deletedPlanet = await db.one(
      "DELETE FROM planets WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedPlanet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlanets,
  getAPlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
};

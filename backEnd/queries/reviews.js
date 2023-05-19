const db = require("../db/dbConfig.js");

//INDEX - get all reviews
const getAllReviews = async (planetId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE planet_id=$1",
      planetId
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};

//SHOW - single review
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// CREATE - New Review
const createReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, title, content, rating, planet_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.planet_id,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id, review) => {
  // const { reviewer, title, content, rating, planet_id } = review;
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, planet_id=$5 WHERE id=$6 RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.planet_id,
        id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

//DELETE - delete review
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
};

import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Button, Card } from "react-bootstrap";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const names = ["John", "Jane", "Mike", "Emily"]; // Array of names

  const generateReviews = () => {
    return names.map((name, index) => {
      const rating = Math.floor(Math.random() * 5) + 1; // Generate a random rating between 1 and 5
      const content = `This is a review by ${name}. The product was great and I highly recommend it!`; // Customize the review content based on the name
      return {
        id: index + 1, // Generate a unique ID for each review
        title: `Review ${index + 1}`, // Customize the review title
        rating,
        content,
        reviewer: name,
      };
    });
  };

  const reviews = generateReviews();

  return (
    <div className="Review text-center">
      <Card className="glow-card" style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "10px" }}>
        <Card.Body>
          <Button variant="success" onClick={toggleView} className="edit-button">
            Edit this Review
          </Button>
          <br />
          <br />
          {viewEditForm ? (
            <ReviewForm reviewDetails={review} toggleView={toggleView} handleEdit={handleEdit} />
          ) : (
            <div>
              <h4>{review.title}</h4>
              <h5>
                <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Rating: {review.rating}</span>
              </h5>
              <br />
              <img src="https://100k-faces.glitch.me/random-image" alt="User Face" className="user-avatar" />
              <h6>{review.reviewer}</h6>
              <p>{review.content}</p>
            </div>
          )}
          <Button variant="danger" onClick={() => handleDelete(review.id)} className="delete-button">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Review;

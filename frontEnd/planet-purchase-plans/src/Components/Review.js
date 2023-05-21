import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Button, Card } from "react-bootstrap";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

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
              <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="User Face" className="user-avatar" />
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

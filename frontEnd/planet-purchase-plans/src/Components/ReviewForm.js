import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function ReviewForm(props) {
  const { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    planet_id: id,
  });

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.handleAdd) {
      props.handleAdd(review);
    } else if (props.handleEdit) {
      props.handleEdit(review);
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      planet_id: id,
    });
  };

  return (
    <div className="Edit text-center">
      {props.children}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reviewer">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            value={review.reviewer}
            type="text"
            onChange={handleTextChange}
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            required
            value={review.title}
            placeholder="Review Title"
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            value={review.rating}
            placeholder="Rate The Planet 🪐"
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Review:</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={review.content}
            placeholder="So How Were The Vibes..."
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <br />

        <Button
          type="submit"
          variant="primary"
          style={{
            backgroundColor: "#FFA500",
            color: "white",
            fontFamily: "Syne",
            animation: "glowing 1.5s infinite",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ReviewForm;

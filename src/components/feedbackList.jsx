import React from "react";
import Feedback from "./Feedback";

function FeedbackList({ feedback = [] }) {
  // Validate feedback with PropTypes
  return (
    <div>
      {feedback.map((item) => (
        <Feedback key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;

import React from "react";
import Card from "./common/card";
import Feedback from "./feedback";

function FeedbackList({ feedback }) {
  console.log(feedback.length);
  // Validate feedback with PropTypes
  return (
    <Card bgColor="green">
      {feedback && feedback.length ? (
        feedback.map((item) => <Feedback key={item.id} item={item} />)
      ) : (
        <div> No Data Found at the moment</div>
      )}
    </Card>
  );
}

export default FeedbackList;

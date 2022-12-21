import { useState } from "react";
import React from "react";
import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/feedbackData";
import Card from "./components/common/Card";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  console.log(feedback);

  return (
    <>
    <div>FEEDBACK APP</div>
      <Card bgColor="blue">
        {/* <Header text="Hello App" /> */}

        <div>Hello App</div>
      </Card>

      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;

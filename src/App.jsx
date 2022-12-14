import { useState } from "react";
import React from "react";
import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/feedbackData";

function App() {
  return (
    <div>
      <Header text="Hello App" />
      <FeedbackList feedback={feedbackData} />
    </div>
  );
}

export default App;

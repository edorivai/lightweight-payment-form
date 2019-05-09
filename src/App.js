import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import { ThankYou } from "./ThankYou";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="container">{!submitted ? <Form submit={() => setSubmitted(true)} /> : <ThankYou />}</div>
  );
}

export default App;

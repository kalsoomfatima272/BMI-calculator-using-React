import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0); // Weight in kg
  const [feet, setFeet] = useState(0); // Height in feet
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();

    const weightNum = parseFloat(weight);
    const feetNum = parseFloat(feet);

    // Convert feet to meters
    let heightInMeters = feetNum * 0.3048;

    if (weightNum === 0 || feetNum === 0) {
      alert("Please enter valid weight and height");
    } else {
      // Calculate BMI
      let bmiValue = weightNum / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      // Determine BMI category
      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator (kg/feet)</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (feet)</label>
            <input
              type="text"
              placeholder="Enter height in feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn btn-outline"
              onClick={reload}
              type="button"
            >
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

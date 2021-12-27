import React, { useState } from "react";

const Button = (props) => {
  const text = props.text;
  return (<button>{text}</button>);
};
const Display = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (value) => {
   setGood(value++)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={setToGood(good)} text="bad"/>
      <Button onClick={setToGood(good)} text="neutral"/>
      <Button onClick={setToGood(good)} text="good"/>
      <Display text="good" value={good}/>
    </div>
  );
};

export default App;

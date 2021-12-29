import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  // caching the prop
  const reviews = props.reviews;
  const all = reviews.good + reviews.bad + reviews.neutral;
  let positive = (all == 0)?0:parseFloat((reviews.good / all ) * 100).toPrecision(2);
  if (reviews.good != 0 & reviews.neutral == 0 & reviews.bad == 0) {
    positive = 100;
  }
  let average;
  if (all!=0) {
    average = (-reviews.bad+ reviews.good)/all;
  }
  else {
    average = 0;
  }
  return (
    <table id="statistics">
      <tbody>
        <StatisticLine text="Good" value={reviews.good} />
        <StatisticLine text="Neutral" value={reviews.neutral} />
        <StatisticLine text="Bad" value={reviews.bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average.toPrecision(2)} />
        <StatisticLine text="Positive" value={positive.toString() + ' %'} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [review, setReview] = useState(
    // intial state
    {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const good = () => {
    setReview({ ...review, good: review.good + 1 });
  };
  const neutral = () => {
    setReview({ ...review, neutral: review.neutral + 1 });
  };
  const bad = () => {
    setReview({ ...review, bad: review.bad + 1 });
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={good} text="Good" />
      <Button onClick={neutral} text="Neutral" />
      <Button onClick={bad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics reviews={review} />
    </div>
  );
};

export default App;

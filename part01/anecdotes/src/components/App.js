import React, { useState } from "react";
const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Anecdote = ({ text, vote}) => {
  return (
    <div>
      <h3>{text} </h3>
      <h3>has {vote} vote</h3>
    </div>
  );
};

const FavorisedAnecdote = (props) =>  {
  if (props.points.reduce((a, b) => a + b, 0) == 0) {
    return (
      <h3>no anecdote is the favorite</h3>
      )
    }
    else {
      const favorite = props.anecdotes[props.points.indexOf(Math.max(...(props.points)))];
      return (
      <h3>
        {favorite} with {Math.max(...(props.points))} votes
      </h3>
    )
  }
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
  }
  const incrementPoint = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  const changeSelected = () => {
    setSelected(getRandomInt(anecdotes.length - 1));
    console.log(selected);
  };
  const divStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
}
  return (
    <div style={divStyle}>
      <Header text="Component of the day"/>
      <Anecdote text={anecdotes[selected]} vote={points[selected]} />
      <Button onClick={incrementPoint} text="vote"></Button>
      <Button onClick={changeSelected} text="Next Anecdote"></Button>
      <Header text="Most Voted for component"/>
      <FavorisedAnecdote anecdotes={anecdotes} points={points}/>
    </div>
  );
};

export default App;

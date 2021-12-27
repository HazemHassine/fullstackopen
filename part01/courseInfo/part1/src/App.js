import React from 'react'

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  return (
    <p>
    {props.partN} {props.exercisesN}
  </p>)
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data is cool'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content partN={part1} exercisesN={exercises1}/>
      <Content partN={part2} exercisesN={exercises2}/>
      <Content partN={part3} exercisesN={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3 ={exercises3}/>
    </div>
  )
}

export default App
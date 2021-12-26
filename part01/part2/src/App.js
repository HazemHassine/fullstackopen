import React from 'react'

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}
const Part = (props) => {
  return (
    <p>
    {props.partN} {props.exercisesN}
  </p>)
}
const Content = (props) => {
  return (
    <div>
      <Part partN={props.partN[0]} exercisesN={props.exercisesN[0]}/>
      <Part partN={props.partN[1]} exercisesN={props.exercisesN[1]}/>
      <Part partN={props.partN[2]} exercisesN={props.exercisesN[2]}/>
    </div>
  )
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
      <Content partN={[part1,part2,part3]} exercisesN={{exercises1,exercises2,exercises3}}/>
      <Total ex1={exercises1} ex2={exercises2} ex3 ={exercises3}/>
    </div>
  )
}

export default App
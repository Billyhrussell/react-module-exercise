import React, { useState } from "react"

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 * Sets default values and changes based on user click
 *
 * Props: ANSWERS array of objects with msg and color
 *
 * State:
 * - msg: changes message
 * - color: changes color
 *
 */
function EightBall( { answers = ANSWERS }) {
  //TODO: answer, setAnswer
  const [ ans, setAns ] = useState({
    msg: "Think of a Question",
    color: "black"
  })

  const number = getRand(answers);

  //handleAnswer
  function clickEightBall(){
    setAns({
      msg: answers[number].msg,
      color: answers[number].color,
    })
  }

  return (
    <div style={{
      backgroundColor: ans.color,
      color: "white"
    }} className="eightBall" onClick={ clickEightBall }>
      <p> { ans.msg }</p>
    </div>
  )

}

/** Generates a random index number  */
function getRand(answers){
  return Math.floor(Math.random() * answers.length);
}

export default EightBall;
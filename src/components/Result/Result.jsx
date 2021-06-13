import React from 'react'

const Result = (props) => {
  console.log(`props`, props)
  return (
    <div>
      <h3>{props.title}</h3>
      <p> {props.body} </p>
    </div>
  )
}

export default Result

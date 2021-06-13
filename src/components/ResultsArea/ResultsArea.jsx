import React from 'react'
import Result from '../Result/Result'
import { useQuery } from 'react-query'

const ResultsArea = () => {
  const {data, error }=  useQuery('todos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  if (error) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div>
      {data && data.map(post => (
        <Result key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  )
}

export default ResultsArea

import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div>Displaying details for user {userId}</div>
  )
}

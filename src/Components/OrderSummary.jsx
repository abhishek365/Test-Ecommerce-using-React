import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
        <div>Order placed successfully</div>
        <button onClick={() => {navigate(-1)}}> Back </button>
    </>
  )
}

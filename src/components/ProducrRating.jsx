import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { CiStar } from "react-icons/ci";

const ProducrRating = ({rating}) => {
  const fullRating = Math.floor(rating) || 0
  const halfRating = rating % 1 >= 0.5
  const emptyRating = 5 - fullRating - (halfRating ? 1: 0)
  return (
    <div className='flex'>
    {[...Array(fullRating)].map(()=>(
      <FaStar className ="text-[#FFD881]"/>

    ))}
    {halfRating && <FaStarHalf className='text-[#FFD881]'/>}

      {[...Array(emptyRating)].map(()=>(
      <  CiStar className ="text-[#FFD881]"/>

    ))}
    


    </div>
  )
}

export default ProducrRating
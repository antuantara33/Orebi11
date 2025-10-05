import React from 'react'
import Container from './Container'
import phone from "../assets/phone.png"

const Phone = () => {
  return (
    <div className='mt-10'>
         <Container>
            <div className="">
                <img src={phone} alt="" />
            </div>
         </Container>

   </div>
  )
}

export default Phone
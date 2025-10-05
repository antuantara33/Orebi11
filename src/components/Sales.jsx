import React from 'react'
import Container from './Container'
import oneImg from "../assets/one.png" 
import twoImg from "../assets/two.png" 
import threeImg from "../assets/three.png" 

const Sales = () => {
  return (
    <div className='py-[100px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[49%]">
                    <img src={oneImg} alt="" />
                </div>
                <div className="w-[49%]">
                    <div className="">
                        <img src={twoImg} alt="" />
                    </div>
                    <div className="mt-8">
                        <img src={threeImg} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Sales
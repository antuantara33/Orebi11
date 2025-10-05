import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import bsell1 from "../assets/bsell1.png"
import bsell2 from "../assets/bsell2.png"
import pr1 from "../assets/pr1.png"
import pr6 from "../assets/pr6.png"
import Container from './Container'

const Bestsell = () => {
  return (
    <div className='mt-9'>
        <Container>
       <h2 className="lg:text-[39px] text-[20px] text-primary font-bold font-dm">BestSells</h2>

       <div className="flex justify-around mt-5">
        <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell1} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          <div className='absolute top-[20px] left-[20px]'>
                                        <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                                    </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={bsell2} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          <div className='absolute top-[20px] left-[20px]'>
                                        <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                                    </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={pr1} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          <div className='absolute top-[20px] left-[20px]'>
                                        <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                                    </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
            <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={pr6} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]'>
                <span>Add to cart</span><FaCartPlus/>
              </li>
          </ul>
         </div>
          <div className='absolute top-[20px] left-[20px]'>
                                        <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                                    </div>
          </div>
       </div>
         <div className="flex justify-between">
          <div className="">
            <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">Basic Crew Neck Tee</h3>
            <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">Black</p>

          </div>
          <div className="">
            $44:00
          </div>
         </div>
          </div>
        </div>
      
        </Container>

    </div>
  )
}

export default Bestsell
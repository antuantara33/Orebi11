import React from 'react'
import spe1 from "../assets/spe1.png"
import spe2 from "../assets/spe2.png"
import spe3 from "../assets/spe3.png"
import spe4 from "../assets/spe4.png"
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import Container from './Container'

const Special = () => {
  return (
    <div className='mb-7'>
      <Container>
       <h2 className="lg:text-[39px] text-[20px] text-primary font-bold font-dm mt-5" >Special Offers</h2> 

       <div className="flex justify-around mt-5">
        <div className="w-[24%]">
       <div className="">
          <div className="relative group">
            <img src={spe1} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>
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
            <img src={spe2} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>
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
            <img src={spe3} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>
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
            <img src={spe4} alt="" />
        
         <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-50 duration-300 ease-in-out">
          <ul>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>
              <span className=''>Add to Wish List</span><FaHeart/>
            </li>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>
               <span>compare</span> <IoGitCompare/>
            </li>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>
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
          <div  className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">
            $44:00
          </div>
         </div>
          </div>
        </div>
      
        </Container>


    </div>
  )
}

export default Special
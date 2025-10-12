import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import productimg from "../assets/pr10.png"
import { FaStar } from "react-icons/fa";
import ProducrRating from '../components/ProducrRating'
import { useDispatch } from 'react-redux'
import { cartTotal } from '../slice/CartSlice'

const ProductDetails = () => {
  const dispatch = useDispatch()
 const {id}= useParams()
  let [singleData,setSingleData] = useState({})

  let getSingleData = ()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then ((response)=>{
       setSingleData(response.data)

    })
  }
  useEffect (()=>{
    getSingleData()
  },[])
  const handleAdd = ()=>{
    console.log("ok");
    dispatch(cartTotal(singleData))
   
    
  }
  
  return (
    <div>
       
       <Container>
        <div className="pt-[152px] pb-[339px]">
           <div className="flex flex-wrap justify-between gap-5">
           {singleData?.images?.map((img)=>(
                  <img className='w-[45%]' src={img} alt="" />
            ))}
            </div>
           <div className="mt-[49px]">
            <h4  className='font-dm text-[39px] font-bold text-primary'>Product</h4>
           </div>
         <div className="flex space-x-[25px] items-center mt-[15px] mb-[21px]">
            <div className='flex text-[#ffd881] items-center gap-x-1'>
         <ProducrRating rating={singleData.rating}/>
           </div>
           <div className="flex space-x-5">
            <p className='text-[14px] text-secondary'> ({singleData.rating})</p>
            <p className='text-[14px] text-secondary'>{singleData?.reviews?.length} Review</p>
           </div>
         </div>
         <div className="flex space-x-[22px] items-center">
          <p className='text-secondary'><del>$88.00</del></p>
          <p className='font-bold text-[20px]'>${singleData.price}</p>
         </div>
         <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>
         <div className='flex space-x-[53px] items-center mt-[30px]'>
          <p className='font-bold text-primary'>Color:</p>
          <div className='flex space-x-[15px] items-center'>
            <div className="h-[20px] w-[20px] rounded-full bg-[#CDCDCD]"></div>
            <div className="h-[28px] w-[28px] rounded-full bg-[#FF8686]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#E6F7D4]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#F1F1F1]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#979797]"></div>
          </div>
          
         </div>
           <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>Size:</p>
          <div>

            <select className='border-2 border-[#F0F0F0] px-[21px] py-1 text-secondary'>
              <option value="">S</option>

            </select>
          </div>
          
         </div>
           <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>QUANTITY:</p>
          <div className='flex items-center border-2 border-[#F0F0F0] px-[21px] py-1 space-x-[35px] text-secondary'>
                 <p>-</p>
                 <p>1</p>
                 <p>+</p>
          </div>
          
         </div>
          <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>

             <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>STATUS:</p>
          <p className='text-sec'>{singleData?.availabilityStatus}</p>
          </div>

      
          <div className=" space-x-[20px]">
            <button 
            className='py-4 px-[40px] border-2 border-primary font-bold text-primary hover:bg-primary hover:text-white cursor-pointer transititon duration-200 ease-in-out'>Add to Wish List </button>
              <button
               onClick={handleAdd}
              className='py-4 px-[40px] border-2 border-primary font-bold text-primary  hover:bg-primary hover:text-white cursor-pointer transititon duration-200 ease-in-out'>Add to Cart </button>
          </div>
           <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>

           <div className='mt-[30px]'>
            <h3 className='font-bold text-[20px] text-primary'>Reviews</h3>
            <div className='mt-[10px]'>
          {singleData?.reviews?.map((item)=>(
            <div className='flex flex-col'>
              <p>{item.comment}</p>
               <p>{item.date}</p>
               <p>moment().format('dddd')</p>
            </div>
          ))}
            </div>
           </div>
        </div>
       </Container>
      
      </div>
  )
}

export default ProductDetails
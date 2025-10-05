import React, { useState } from 'react'
import Container from '../components/Container'
import { useLocation } from 'react-router-dom'


 const Checkout =() =>{
  const data = useLocation()
   const price = data.state. Subtotal;
  
  const [checkoutData,setCheckoutData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"",
    address:"",
  })



 
   const handleChange = (e)=>{
    setCheckoutData({...checkoutData,[e.target.name]:e.target.value})
    
   }
   const handlelClick =() =>{
    console.log("information");
    console.log(checkoutData);
    
    
   }



  return (
    <div className='py-10 font-dm'>
        <Container>
        <div className="">
       <p className='font-bold'> TotalProductPrice:{price}</p>  
            <div className=" flex flex-col">
         <label className='my-3'>First Name</label>
        <input
        onChange={handleChange}
        name='firstname'
        value={checkoutData.firstname}
        className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur firstname'/>
            </div>
               <div className=" flex flex-col">
         <label className='my-2'>Last Name</label>
        <input
         onChange={handleChange}
        name='lastname' 
         value={checkoutData.lastname}
         className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur lastname'/>
            </div>
             <div className=" flex flex-col">
         <label className='my-2'>Email</label>
        <input 
         onChange={handleChange}
        name='email'
         value={checkoutData.email}
        className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur email'/>
            </div>
               <div className=" flex flex-col">
         <label className='my-2'>Country</label>
        <input
         onChange={handleChange}
        name='country'
         value={checkoutData.country}
        className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur country'/>
            </div>
               <div className=" flex flex-col">
         <label className='my-2'>Address</label>
        <input
         onChange={handleChange}
        name='address'
         value={checkoutData.address}
        className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur address'/>
            </div>
           <div className=" flex flex-col">
         <label className='my-2'>Post code</label>
        <input
         onChange={handleChange}
        name='postcode'
         value={checkoutData.postcode}
         className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur post code'/>
            </div>
          <div className="flex flex-col mt-4">
              <p onClick={handlelClick} className='bg-primary cursor-pointer text-center text-white px-4 py-2 rounded w-[400px]'>proceed to checkout</p>

          </div>
               
        </div>
        </Container>
    </div>
  )
}

export default Checkout
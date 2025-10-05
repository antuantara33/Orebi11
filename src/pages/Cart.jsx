import React, { useState } from 'react'
import Container from '../components/Container'

import { useDispatch, useSelector } from 'react-redux'
import { cartRemove, cartQuantity } from '../slice/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const[couponName,setCouponName]= useState("")
  const[discount,setDiscount]=useState("")


  const data = useSelector(state => state.cartDetails.cartItems)

  const totalPrice= data.reduce((prev,current)=>{
    return prev + current.price* current.cartQun
  },0)
  const handeleIncrement = (id) =>{
     console.log(id,"id");
    dispatch(cartQuantity({id:id,type:"increment"}))
  
     }
     const handeleDecrement = (id) =>{
    console.log(id,"id");
    dispatch(cartQuantity({id:id,type:"decrement"}))
    }
    const handleRemove =(index) =>{
      console.log("cartRemove",index);
      dispatch(cartRemove({id:index}))
      toast.success("Cart items Removes")
      
    }
    const handelChange = (e)=>{
      setCouponName(e.target.value);
      
    }
    console.log(couponName);
    const handelApply =() =>{
      if(couponName=="fdr24"){
        console.log("20%");
      setDiscount(totalPrice*0.2);
        
      }
    }
    const handelCheckout =()=>{
      console.log('checkout');
      navigate("/checkout",{
        state:{
          Subtotal:Total,
        },
      })
      
    }
   const Total = totalPrice - discount
  return (
    <div className='font-dm'>
        <Container>
           <ToastContainer 
          
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
//transition={Bounce}
   />
            <div className='mt-[124px] mb-[163px] font-dm'>
                <h3 className='text-primary text-[50px] font-bold font-dm'>Cart</h3>
            </div>
          <div className='pb-[140px]'>
              <div className='flex justify-between bg-[#F5F5F3] font-dm py-[34px] px-[20px]'>
                <div className='w-[25%]'>
                    <p className='font-bold text-primary'>
                        product
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p  className='font-bold text-primary'>
                       Price
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p  className='font-bold text-primary'>
                      Quantity
                    </p>
                </div>
                 <div className='w-[25%]'>
                    <p>
                       Total
                    </p>
                </div>
            </div>     
            
         
            
          <div className="border-b">
              {data.length > 0 ?
              data?.map((item,index)=>(
                   <div className='flex justify-between items-center font-dm py-[34px] px-[20px]'>
                <div className='w-[25%]'>
                    <div className='flex items-center space-x-2'>
                      <p onClick={()=>handleRemove(index)} className='bg-amber-400 px-2 py-1 text-[12px] text-white rounded cursor-pointer'>Remove</p>
                      <img className='w-[60px]'src={item.thumbnail } alt=""/>
                      <p>{item.title}</p>
                    </div>
                </div>
                 <div  className='w-[25%]'>
                    <p  className='font-bold text-primary font-dm'>
                      ${item.price}
                    </p>
                </div>
                 <div className='w-[25%]'>
                 <div className='flex items-center border-2 border-[#F0F0F0] px-[21px] py-1 space-x-[35px] text-secondary w-fit'>
                 <p className='cursor-pointer'onClick={()=>handeleDecrement(index)}>-</p>
                 <p>{item.cartQun}</p>
                 <p className='cursor-pointer'onClick={()=>handeleIncrement(index)}>+</p>
          </div>
                    
                </div>
                 <div  className='w-[25%]'>
                     <p  className='font-bold text-primary font-dm'>
                      ${item.price * item.cartQun}
                    </p>
                </div>
            </div>


              )) 
              :
              "no items"
          }
          </div>
          <div className="flex justify-end">
           <div className="w-[25%]">
           Subtotal:{totalPrice.toFixed(3)}
            </div>
          </div>
          <div className="flex justify-end">
           <div className="w-[25%]">
        Discount: ${discount}
            </div>
          </div>
            <div className="flex justify-end">
           <div className="w-[25%]">
       Total:{Total}
            </div>
             </div>
             <div className="flex justify-end">
                <div className="w-[25%]">
          
            <p onClick={handelCheckout} className='bg-primary cursor-pointer text-white px-4 py-2 inline-block rounded'>proceed to checkout</p>
        
          </div>

            </div>
          <div className="">
            <input onChange={handelChange} className='border py-2 px-3' type="text" placeholder='Apply copon' />
            <button onClick={handelApply} className='bg-primary text-white py-2 px-4 rounded ml-5'>Apply</button>
          </div>
        
          </div>
        </Container>
    </div>
  )
}

export default Cart
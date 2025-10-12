import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import cartImg from "../assets/cart.png"
import { HiBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
  let [cateShow, setCateShow] = useState(false)
  let [searchTerm,setSearchTerm]= useState("")
  let [searchData,setSearchData] = useState([])
  let [accShow , setAccShow] = useState(false);
    let [cartshow , setCartShow] = useState(false);

  let cateRef = useRef()
  let accRef = useRef()
   let cartRef = useRef()

  useEffect(()=> {
    document.addEventListener("click",(e) => {
   if (cateRef.current.contains(e.target) == true) {
    setCateShow(!cateShow);
   }else {
    setCateShow(false);
   }
   if(accRef.current.contains(e.target)){
    setAccShow(!accShow)

   } else{
    setAccShow(false)
   }
   if(cartRef.current.contains(e.target) == true){
    setCartShow(!cartshow)

   }else{
    setCartShow(false)
   }

    });
  }, [cateShow, accShow, cartshow]);
  const handleSearch = (e) =>{
    setSearchTerm(e.target.value);
    
  }
  console.log(searchTerm);
  useEffect(()=> {
   fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
.then((res) => res.json())
.then((data)=> {
  setSearchData(data.products || [] );
  }
)

  },[searchTerm]);
  console.log(searchData);
  


  return (
    <nav className='bg-[#f5f5f5] py-2 mt-0'>
        <Container>
        <Flex className= "items-center">
            <div className="w-1/4 relative">
            <div className="flex items-center gap-2" ref={cateRef}>
                 <HiBars2/>
            <h3 className='font-dm font-normal text-[14px] text-[#262626] '>Shop by Category</h3>
            </div>
        
           {cateShow &&
<div className="bg-[#262626] py-3 absolute left-0 top-[43px] w-full z-[10]">
  
            <ul>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>
                <div className="flex justify-between">
                  <span>Accesories</span>
                  <div className="">
                   <IoMdArrowDropright/>
                  </div>
                </div>
               
               
               </li>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>Furniture</li>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>Electronics</li>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>Clothes</li>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>Bags</li>
              <li className='py-1 text-[rgba(255,255,255,0.7)] pl-[20px]
               hover:text-[#fff] hover:pl-[30px] duration-300  ease-in-out
               font-dm border-b-[1px] border-[rgba(255,255,255,0.7)]'>Home appliances</li>
            </ul>
 

           </div>
           }

            </div>
            <div className="w-2/4 relative">
            <div className=" relative">
                <input 
                   onChange={handleSearch}
                type="text" placeholder='search...' className='w-full bg-white py-3 pl-2 rounded-full' />
                  <div className='absolute  right-6 top-[50%] translate-y-[-50%] z-[10]'>
                 <FaSearch/> 
                </div>
            </div>
            {
              searchTerm.length > 0 && (
                  <div className=" absolute bg-[rgba(255,255,255,0.7)] h-[200px] w-full rounded-lg z-[50] overflow-hidden">
                   {searchData.map((item)=>(
              <div className="">
              <Link to={`/product/${item.id}`} onClick={() => setSearchTerm("")}>
                <p>{item.title}</p>
              </Link>
              </div>
            ))
           }
            </div>
              )
            }
          
            </div>
            <div className="w-1/4 relative">
             <div className="flex justify-end">
              <div className="flex" ref={accRef}>
                  <FaUser/>
                <IoMdArrowDropdown/>
              </div>
             <div className="" ref={cartRef}>
            <Link to="/cart">
               <FaCartArrowDown/>
            </Link>
             </div>
             </div>

           {accShow && (
             <div className="w-[200px] absolute left-[30%] top-[41px] z-[10]">
              <ul>
               <li className='py-3 px-4 bg-[#262626] text-white font-dm text-[16px]
                text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out'>My Account</li>
                               <li className='py-3 px-4 bg-[#262626] text-white font-dm text-[16px]
                text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out'>Log Out</li>


              </ul>


             </div>
           )}
          {cartshow &&
           <div className="absolute left-0 top-[40px] w-full z-[10]">
            <div className="flex items-center justify-around bg-[#f5f5f5]">
              <div className="">
                <img src={cartImg} alt="" />
              </div>
              <div className="">
                <h4>Black Smart Watch</h4>
                <h5>$44.00</h5>
              </div>
              <div className="">
                 < RxCross2 />
              </div>
            </div>
            <div className="my-2">
              <h3><span>Subtotal:</span> $44.00</h3>
              <ul className='flex justify-between mt-2'>
                <li className='py-3 w-[150px] bg-[#262626] text-white font-dm text-[16px]
                text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out'>View Cart</li>
                <li className='py-3 w-[150px] bg-[#262626] text-white font-dm text-[16px]
                text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out'>Checkout</li>
              </ul>
            </div>
           </div>
          
          }
            </div>
        </Flex>
    </Container>
    </nav>
  )
}

export default Navbar
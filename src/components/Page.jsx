
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import { useContext, useEffect, useState } from 'react'
import {ApiData} from "./ContextApi"
import { Link } from 'react-router-dom'



const Page = ({allData, cateFilter,active}) => {
   let {loading} = useContext(ApiData)
   let [cateMain,setCateMain] = useState([]);
   let [showAll,setShowAll] = useState([true]);
   console.log(active);
   
   
   useEffect(()=>{
   let cateAll = cateFilter.slice(0,5)
   setCateMain(cateAll);

   },[cateFilter])

   let handleShow = ()=>{
    setCateMain(cateFilter);
    setShowAll(false)
}
let handleLess = ()=>{
  setCateMain(cateFilter.slice(0,5))
  setShowAll(true)
}

  if(loading){
    return(
      <h2><div role="status">
    <svg aria-hidden="true" class="w-15 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div></h2>
    )
  }

    
  return (
     
      <>
      {cateFilter.length > 0 ? 
 <div className="">
    <div className="flex flex-wrap justify-between">
      {cateMain.map((item)=>(
    <div className="w-[31%] pb-[50px] ">
       <div className="relative group">
        <Link to={`/product/${item.id}`}>
         <div className="bg-[#F9F9F9]">
          <img src={item.thumbnail}/>
      </div>
      </Link>
 <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-[100] overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
 <ul>

       <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>Add to Wish List <FaHeart/></li>
          <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>Compare <IoGitCompare/></li>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>Add to Cart <FaShoppingCart/></li>
                  </ul>
                </div>
            <div className='absolute top-[20px] left-[20px]'>
               <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                  </div>
                   </div>
                  <div className="">
       <div className="flex items-center justify-between pt-[24px] pb-[15px]">
            <h4 className='text-[18px] font-dm font-bold text-[#262626]'>{item.title}</h4>
                 <p className='text-[14px] font-dm font-normal text-[#767676]'>${item.price}</p>
                     </div>
                       <h1 className='text-[16px] font-dm font-normal text-[#767676]'>{item.brand}</h1>
                         </div>
     
                           </div>
    ))}
   </div>
   {showAll ? cateFilter.length >5 && (
    <div className=""onClick= {handleShow}>
             <h2>Show All</h2>
    </div>
  
   )
   
   :
   <div className=""onClick={handleLess}>
    <h2>ShowLess</h2>
   </div>

   }
   
  
 </div>
    : 
  
    <div className={`${active == "active" ? "w-full" : "flex flex-wrap justify-between"}`}>
        {allData.map((item)=>(

          <div className="w-[31%] pb-[50px] ">
       <div className="relative group">
        <Link to={`/product/${item.id}`}>
         <div className="bg-[#F9F9F9]">
          <img src={item.thumbnail}/>
      </div>
      </Link>
 <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-[100] overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
 <ul>

       <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>Add to Wish List <FaHeart/></li>
          <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>Compare <IoGitCompare/></li>
            <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>Add to Cart <FaShoppingCart/></li>
                  </ul>
                </div>
            <div className='absolute top-[20px] left-[20px]'>
               <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                  </div>
                   </div>
                  <div className="">
       <div className="flex items-center justify-between pt-[24px] pb-[15px]">
            <h4 className='text-[18px] font-dm font-bold text-[#262626]'>{item.title}</h4>
                 <p className='text-[14px] font-dm font-normal text-[#767676]'>${item.price}</p>
                     </div>
                       <h1 className='text-[16px] font-dm font-normal text-[#767676]'>{item.brand}</h1>
                         </div>
     
                           </div>
    ))
  }
      </div>}
  
  
      
      </>
 
                           
                          
                            
                           
                                                  
                        
  )
}

export default Page
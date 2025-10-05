import { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { FaThList } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ApiData } from '../components/ContextApi'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import { TiMinus } from 'react-icons/ti'
import { HiSquares2X2 } from 'react-icons/hi2'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'


const Shop = () => {
 
  let {info} = useContext(ApiData)
  
  let [cateShow, setCateShow] = useState(false);
  let [cateShowOne, setCateShowOne] = useState(false);
  let [letShow, setLatShow] = useState(false);
  let [letShowOne, setLatShowOne] = useState(false);
  let [letShowThree, setLatShowThree] = useState(false);
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let [cateFilter,setCateFilter] = useState([])
  let [brand,setBrand] = useState([])
  let [category,setCategory] = useState([])
  let [active,setActive] = useState("")
  let [low,setLow] = useState()
  let [high,setHigh] = useState()
  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage
  let allData = info.slice(firstPage, lastPage);
 
  
 let pageNumber = [];
 for (let i = 0; i < Math.ceil(info.length / perPage); i++){
  pageNumber.push(i)
 }
  

let paginate = (index) =>{
 setCurrentPage(index + 1)
  
}
let next = () =>{
 if (currentPage < pageNumber.length){
  setCurrentPage((state)=> state+1)
 }
  
}
let prev = () =>{

  if (currentPage > 1){
     setCurrentPage((state) => state - 1)
  }

}
useEffect(()=>{
  setCategory([...new Set(info.map((item)=>item.category))])
  setBrand([...new Set(info.map((item)=>item.brand))])
                

},[info]);
 
let handleCategory = (citem) =>{
  console.log(citem);
  
let cateFilter = info.filter((item)=> item.category === citem)
 setCateFilter(cateFilter);
}
let handleList = () =>{
  setActive("active")
}
 let handleChange =(e) =>{
  setPerPage(e.target.value);
  
 }
 let handlePrice =(value) =>{
  setLow(value.low);
    setHigh(value.high);
  let priceShow = info.filter((item)=> item.price >= value.low && item.price <= value.high)

  setCateFilter(priceShow)
 }
 let handleBrand =(bitem) =>{
  let brandFilter=info.filter ((item)=> item.brand == bitem)
  setCateFilter(brandFilter);
 }

  




  return (
    <div>
      <Container>
        <div className="w-2/12 py-[100px]">
          <div className="">
            <h2 className="font-dm font-bold pb-[10px] text-[#262626] text-[49px]">
              Products
            </h2>
          </div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to={"/"}
                  className="inline-flex items-center text-sm font-medium text-[#767676] hover:text-[#000] dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Shop
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex">
          <div className="w-3/12 pb-[70px]">
            <div className="">
              <h4
                onClick={() => setCateShow(!cateShow)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[10px]"
              >
                Shop by Category
                {cateShow ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
              </h4>
              {cateShow && (
                <ul className="mb-[10px]">
                  {category.map((item)=>(

                    <li onClick={()=>handleCategory(item)}
                    
                    className={`text-[#767676] text-[16px] font-dm font-bold  py-[10px] 
                      
                    }`}
                  >
                    <p className="flex justify-between  items-center capitalize"> {item}</p>
                   
                  </li>
                  ))}
                 
                 
                      
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShow(!letShow)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Color{" "}
                {letShow ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
              </h4>
              {letShow && (
                <ul className="mb-[50px]">
                  <li className="text-[#767676] text-[16px] font-dm pb-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#FF8686] rounded-full"></div>
                    Color 1
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#000] rounded-full"></div>
                    Color 2
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#7ED321] rounded-full"></div>
                    Color 3
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#B6B6B6] rounded-full"></div>
                    Color 4
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#15CBA5] rounded-full"></div>
                    Color 5
                  </li>
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShowOne(!letShowOne)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Brand{" "}
                {letShowOne ? <IoMdArrowDropup/> : <IoMdArrowDropdown />}
              </h4>
              {letShowOne && (
                <ul className="mb-[50px]">
                 {brand.map((item)=>(
                   <li onClick={()=>handleBrand(item)} className="text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    {item}
                  </li>
                 ))}
                
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShowThree(!letShowThree)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Price{" "}
                {letShowThree ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
              </h4>
              {letShowThree && (
                <ul>
                  <li onClick={()=>handlePrice({low:0,high:9})} className="text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $0.00 - $9.99
                  </li>
                  <li onClick={()=>handlePrice({low:10,high:19})} className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $10.00 - $19.99
                  </li>
               </ul>
              )}
            </div>
          </div>
          <div className="w-9/12 pl-[40px] ">
            <div className="flex pb-[60px]">
              <div className="flex gap-[12px] ">
                <div
                onClick={()=>setActive("")}
                className={`${active == "active" ? "h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]" : "h-[36px] w-[36px] flex justify-center  text-white items-center hover:text-white bg-[#262626] hover:bg-[#000]"}`}>
                  <HiSquares2X2/>
                </div>
                <div onClick={handleList} className={`${active == "active" ? "h-[36px] w-[36px]  text-white flex justify-center items-center bg-[#262626] hover:bg-[#000]": "h-[36px] w-[36px] flex justify-center items-center hover:text-white  hover:bg-[#000]" }`}>
                  <FaThList/>
                </div>
              </div>
              <div className="flex pl-[280px] pr-[40px]">
                <h4 className="pt-[6px] pr-[10px]">Sort by:</h4>
                <form className="w-[239px]">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
              </div>
              <div className="flex">
                <h4 className="pt-[5px] pr-[10px]">Show:</h4>
                <form className="w-[139px]">
                  <select
                    id="countries"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  >
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                    <option>15</option>
                  </select>
                </form>
              </div>
            </div>
            <div>
              <Page allData = {allData} cateFilter={cateFilter} active = {active}/>

              <Pagination pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} perPage={perPage} info={info} next={next} prev={prev} cateFilter={cateFilter} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;

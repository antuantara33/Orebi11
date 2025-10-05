import React, { useContext } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { ApiData } from './ContextApi';
import Slider from "react-slick";
import { Link } from 'react-router-dom'; 


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='nextButton' onClick={onClick}>
      <GrLinkNext/>
    </div>
  );
}


function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prevButton' onClick={onClick}>
      <GrLinkPrevious/>
    </div>
  );
}


const Newarrivals = () => {
  const { info, loading } = useContext(ApiData);

  const newSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div>
      <Container>
        <h2 className='font-dm text-[40px] text-[#262626] font-bold mb-[10px]'>New Arrivals</h2>

        <Slider {...newSlider}>
          {info.map((item) => (
            <Link to="/product">
              <div className="!w-[95%]">
                <div className="relative group">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="absolute left-0 bottom-0 w-full bg-white opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <ul className='pr-4'>
                      <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>
                        <span>Add to Wish List</span> <FaHeart/>
                      </li>
                      <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>
                        <span>Compare</span> <IoGitCompare/>
                      </li>
                      <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>
                        <span>Add to Cart</span><FaCartPlus/>
                      </li>
                    </ul>
                  </div>
                  <div className='absolute top-[20px] left-[20px]'>
                    <span className="py-[8px] px-[30px] bg-[#262626] inline-block text-[14px] font-bold font-dm text-white">
                      New
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dm">{item.title}</h3>
                    <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dm">{item.brand}</p>
                  </div>
                  <div className="text-right font-bold text-[#262626]">
                    ${item.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default Newarrivals;
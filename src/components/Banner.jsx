import banimg from "../assets/banner.png";
import Slider from "react-slick";
import { MdTranslate } from 'react-icons/md';
import Container from './Container';
import { PiNumberTwoBold } from 'react-icons/pi';
import { FaArrowRotateLeft, FaTruck } from 'react-icons/fa6';

const Banner = () => {
   var settings = {
    dots: true,
    infinite: true,
    arrows:false,
   autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
     appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:'absolute',
          left:"10%",
          top:"50%",
          transform:"translateY(-50%)"

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "28px",
          color: "transparent",
          padding:"10px 0",
          borderRight: "2px #ffff solid",

        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <div id='banner'className='border-b-[1px] border-[#F0F0F0] pb-4'>
      <Slider {...settings}>
           <div className="">
        <img src={banimg} alt="" />
    </div>
     <div className="">
        <img src={banimg} alt="" />
    </div>
     <div className="">
        <img src={banimg} alt="" />
    </div>
     <div className="">
        <img src={banimg} alt="" />
    </div>
    


      </Slider>
      <Container>
         <div className="flex ">
            <div className="w-1/3 flex items-center">
              <div>
                <PiNumberTwoBold className="text-[20px]" />
              </div>
              <p>Two years warranty</p>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div>
                <FaTruck />
              </div>
              <p className='pl-2'>Free shipping</p>
            </div>
            <div className="w-1/3 flex items-center justify-end">
              <div>
                <FaArrowRotateLeft />
              </div>
              <p className='pl-2'>Return policy in 30 days</p>
            </div>
          </div>
      </Container>
  

    </div>
  )
}

export default Banner
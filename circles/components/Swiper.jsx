import Image from "next/image";
import Link from "next/link";
import LandingP from "../public/images/Group 226.png";
import quote2 from "../public/images/white_mons.png";
import ipad1 from "../public/images/1.png";
import ipad2 from "../public/images/2.png";
import ipad3 from "../public/images/3.png";
import ipad4 from "../public/images/4.png";
import support from '../public/images/support.png'
import community from '../public/images/community.png'
import connect from '../public/images/connect.png'
import find from '../public/images/glass.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

export default function SwiperSlideshow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={LandingP} className="lg:w-full lg:h-full h-[15em] sm:h-[25em] w-[50em] m:w-[50em] bg-cover" />
          <div className="absolute lg:top-64 top-28 lg:left-[25em] sm:left-40 left-5 sm:top-32 ">
            <Image src={quote2} className=" lg:w-[40em] sm:w-[30em] w-60" />
            {/* <h1 className="text-6xl text-white">Helping you find your circle</h1> */}
            <p className="  lg:text-lg sm:text-lg text-xs font-bold lg:mr-96 lg:ml-5 sm:ml-3 sm:w-72 w-48 mt-2 lg:-mt-5 sm:-mt-1 lg:w-96 text-white ">
              If you need help using this site contact your link worker.
            </p>
            <div className="w-screen h-20 bg-blue"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <section className="h-screen w-full ">

    
<h1 className="flex justify-center lg:text-6xl sm:text-4xl text-3xl font-semibold lg:pt-28 sm:pt-32 pt-20 lg:pb-5" id="about"> Our purpose </h1>
<smaller className="lg:text-lg sm:text-lg text-xs sm:mt-10 mt-5 sm:mx-32 lg:mt-2 lg:mx-96 font-semibold flex justify-center text-center text-gray-400 ">Our mission is to support and encourage socially disconnected individuals integrate into their local communities.</smaller>


<div className="grid grid-cols-2 gap-x-24 sm:grid-cols-2 lg:grid-cols-4 mt-14 sm:mt-20 px-24">
<div>
  <Image src={find} className="mx-auto w-24 lg:w-40 sm:w-40" />
  <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">Find</h1>
  <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">Helping you to find events near you and connect to your community.</p>
  </div>
  
  <div>
  <Image src={community} className="mx-auto w-24 lg:w-40 sm:w-40" />
  <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">Community</h1>
  <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">Helping you to intergrate into your community and feel apart of it. </p>
  </div>

  <div>
  <Image src={support} className="mx-auto w-24 lg:w-40 sm:w-40" />
  <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">Support</h1>
  <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">Providing you with the support you need most and offering a helping hand where ever possible.</p>
  </div>

  <div>
  <Image src={connect} className="mx-auto w-24 lg:w-40 sm:w-40" />
  <h1 className="font-semibold mb-2 text-sm lg:text-lg sm:text-xl pt-5 text-center">Connect</h1>
  <p className="text-center text-xs sm:text-lg lg:text-lg xl:text-lg mb-10 sm:mb-20">Helping you feel more connected to your local community and build true connections.</p>
  </div>
</div>
  



</section>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
<Image src={ipad1} className="w-full h-full bg-cover mt-20 " />
<div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10">
          <div className="lg:text-4xl sm:text-2xl text-lg font-semibold">
            "Access"
          </div>
          <div  data-swiper-parallax="-100">
            <p className="sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
            It's simple! use the pin that 
            your link worker gives you
            to sign up.
            </p>
          </div>
          </div>
        </SwiperSlide> 

        <SwiperSlide  >
          <Image src={ipad2}  className="w-full h-full bg-cover mt-20" />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10 lg:text-4xl sm:text-2xl text-lg font-semibold">
            "Circles"
          </div>
          <div data-swiper-parallax="-100">
            <p className="absolute top-20 lg:top-72 sm:top-48 lg:left-60 left-10 sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3 ">
            Connect with people with similar
            interests and find events near you.
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad3} className="w-full h-full bg-cover mt-20 " />
          <div className="absolute top-14 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10 lg:text-4xl sm:text-2xl text-lg font-semibold">
            "Sign up"
          </div>
          <div data-swiper-parallax="-100">
            <p className="absolute top-20 lg:top-72 sm:top-48 lg:left-60 left-10 sm:mr-[22em] mr-48 sm:left-20 lg:mr-[35em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
            Sign up for an event by email or a quick call.
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad4} className="w-full h-full bg-cover mt-20" />
          <div className="absolute top-72 lg:top-1/3 sm:top-40 lg:left-56 sm:left-20 left-10 lg:text-4xl sm:text-2xl text-lg font-semibold">
            "Keep Track"
          </div>
          <div data-swiper-parallax="-100">
            <p className="absolute top-20 lg:top-72 sm:top-48 lg:left-60 left-10 sm:mr-[22em] mr-48 sm:left-20 lg:mr-[32em] lg:text-2xl sm:text-lg text-[0.6em] lg:mt-10 mt-3">
            Your dashboard will help you
            manage and keep-up-to-date 
            with your events.
            
             
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}






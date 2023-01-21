import Head from "next/head";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import LandingP from "../public/images/Group 226.png";
import ageuklanding from "../public/images/au.jpg";
import nhsuk from "../public/images/NHSes.png";
import cab from "../public/images/cab_br.png";
import quote from "../public/images/quote.png";
import FeedbackModal from "../components/FeedbackModal";
import nhs from '../public/images/nhs.jpg'
import ipad1 from '../public/images/1.png'
import ipad2 from '../public/images/2.png'
import ipad3 from '../public/images/3.png'
import ipad4 from '../public/images/4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';



export default function Home() {
  const { data: session } = useSession();
  console.log("session on index", session);

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
      <Image src={LandingP} className="w-full h-full bg-cover" />
      <div className="absolute top-1/2 left-20 ">
      <Image src={quote} width={700} height={700} className=" "/>
      <p className=" text-xl font-bold mt-10" >If you need help using this site please contact your link worker.</p>
      </div>
     
      
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src={nhsuk} className="w-full h-full bg-cover" />
      </SwiperSlide>
      <SwiperSlide>
      <Image src={cab} className="w-full h-full bg-cover" />
      </SwiperSlide>
      <SwiperSlide>
      <Image src={ageuklanding} className="w-full h-full bg-cover" />
      </SwiperSlide>
  
    </Swiper>
    <h1 className="flex justify-center mt-20 text-9xl">title title</h1>
  
    
    <p className="text-3xl flex justify-center">The taste is not too sweet, and comes in</p>

 
     


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
<Image src={ipad1} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-80 text-7xl">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-96 left-80 text-3xl mt-10">
            The taste is not too sweet, and 
            comes in<br/> variety of shape.I love it.
            The taste is not<br/>  too sweet, and 
            
             
            </p>
          </div>
        </SwiperSlide> 

        <SwiperSlide>
          <Image src={ipad2}  className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-80 text-7xl">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-96 left-80 text-3xl mt-10">
            The taste is not too sweet, and 
            comes in<br/> variety of shape.I love it.
            The taste is not<br/>  too sweet, and 
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad3} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-80 text-7xl">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-96 left-80 text-3xl mt-10">
            The taste is not too sweet, and 
            comes in<br/> variety of shape.I love it.
            The taste is not<br/>  too sweet, and 
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad4} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-80 text-7xl">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-96 left-80 text-3xl mt-10">
            The taste is not too sweet, and 
            comes in<br/> variety of shape.I love it.
            The taste is not<br/>  too sweet, and 
            
             
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
 
      
    </>
  );
}

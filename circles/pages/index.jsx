import Head from "next/head";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import LandingP from "../public/images/Group 226.png";
import ageuklanding from "../public/images/ageuk2.png";
import quote from "../public/images/quote.png";
import FeedbackModal from "../components/FeedbackModal";
import nhs from '../public/images/nhs.jpg'
import ipad1 from '../public/images/1.png'
import ipad2 from '../public/images/2.png'
import ipad3 from '../public/images/3.png'
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
      
      <h1 className="text-7xl text-white font-bold flex-row ">
      <Image src={quote} width={700} height={700} className=" "/>
      </h1>
      <p className=" text-xl font-bold mt-10" >If you need help using this site please contact your link worker.</p>
      </div>
     
      
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src={ageuklanding} className="w-full h-full bg-cover" />
      </SwiperSlide>
      <SwiperSlide>
      <Image src={LandingP} className="w-full h-full bg-cover" />
      </SwiperSlide>
      <SwiperSlide>
      <Image src={LandingP} className="w-full h-full bg-cover" />
      </SwiperSlide>
  
    </Swiper>



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
          <div className="subtitle absolute top-0">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-1/2 left-1/4">
              
             
            </p>
          </div>
        </SwiperSlide> 

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <Image src={ipad2} className="w-full h-full bg-cover" />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
          
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
 
      
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import LandingP from "../public/images/Group 226.png";
import ageuklanding from "../public/images/au.jpg";
import nhsuk from "../public/images/NHSes.png";
import cab from "../public/images/cab_br.png";
import quote from "../public/images/white_monsalt.png";
import quote2 from "../public/images/white_mons.png";
import FeedbackModal from "../components/FeedbackModal";
import friends from '../public/images/friends.jpg'
import activity from '../public/images/activity.jpg'
import diverse from '../public/images/diverse.jpg'
import nhs from '../public/images/nhs.jpg'
import ipad1 from '../public/images/1.png'
import ipad2 from '../public/images/2.png'
import ipad3 from '../public/images/3.png'
import ipad4 from '../public/images/4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import Footer from "../components/Footer";



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
      <div className="absolute top-64 left-96 ">
      <Image src={quote2} width={550} height={550} className=" "/>
      {/* <h1 className="text-6xl text-white">Helping you find your circle</h1> */}
      <p className=" text-lg font-bold indent-20" >If you need help using this site please contact your link worker.</p>
      </div>
     
      
      
      </SwiperSlide>

      {/* <SwiperSlide>
      <div className="bg-blue-200 ">
      <Image src={friends} className="w-full h-full bg-cover opacity-70" />
      <div className="absolute top-1/2 left-20 ">
      <Image src={quote} width={450} height={450} className=" "/>
      <p className=" text-xl font-bold mt-10" >If you need help using this site please contact your link worker.</p>
      </div>
      </div>
      </SwiperSlide>


      <SwiperSlide>
      <Image src={diverse} className="w-full h-full bg-cover opacity-70" />
      <div className="absolute top-1/2 left-20 ">
      <p className=" text-xl font-bold mt-10" >If you need help using this site please contact your link worker.</p>
      </div>
      </SwiperSlide>


      <SwiperSlide>
      <Image src={activity} className="w-full h-full bg-cover opacity-70" />
      <div className="absolute top-1/2 left-20 ">
      <p className=" text-xl font-bold mt-10" >If you need help using this site please contact your link worker.</p>
      </div>
      </SwiperSlide>
  */}
  
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
          <div className="subtitle absolute top-1/3 left-56 text-4xl font-semibold">
            "Access"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-72 left-60 text-lg mt-3">
            It's simple! Your link worker will provide<br/> you with 
            a pin then you will be <br/>able to have access.
            
             
            </p>
          </div>
        </SwiperSlide> 

        <SwiperSlide>
          <Image src={ipad2}  className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-56 text-4xl font-semibold">
            "Circles"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-72 left-60 text-lg mt-3">
            The taste is not too sweet, and 
            comes in<br/> variety of shape.I love it.
            The taste is not<br/>  too sweet, and 
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad3} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-56 text-4xl font-semibold">
            "Contact & Sign up"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-72 left-60 text-lg mt-3">
            Once you've found your event, get in touch by<br/> sending 
            an email or a quick phone call to sign up.
            
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad4} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-56 text-4xl font-semibold ">
            "Review & Keep Track"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-72 left-60 text-lg mt-3">
            Check your dashboard to manage and <br/> keep-up-to-date 
            with your events.
            
             
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
 
      <Footer/>
    </>
  );
}

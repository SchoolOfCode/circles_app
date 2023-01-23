import Image from "next/image";
import LandingP from "../public/images/Group 226.png";
import quote2 from "../public/images/white_mons.png";
import ipad1 from "../public/images/1.png";
import ipad2 from "../public/images/2.png";
import ipad3 from "../public/images/3.png";
import ipad4 from "../public/images/4.png";
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
          <Image src={LandingP} className="w-full h-full bg-cover" />
          <div className="absolute top-64 left-96 ">
            <Image src={quote2} width={550} height={550} className=" " />
            {/* <h1 className="text-6xl text-white">Helping you find your circle</h1> */}
            <p className=" text-lg font-bold indent-20">
              If you need help using this site please contact your link worker.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="flex justify-center mt-20 text-9xl">title title</h1>

      <p className="text-3xl flex justify-center">
        The taste is not too sweet, and comes in
      </p>

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
              It's simple! Your link worker will provide
              <br /> you with a pin then you will be <br />
              able to have access.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ipad2} className="w-full h-full bg-cover" />
          <div className="subtitle absolute top-1/3 left-56 text-4xl font-semibold">
            "Circles"
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="absolute top-72 left-60 text-lg mt-3">
              The taste is not too sweet, and comes in
              <br /> variety of shape.I love it. The taste is not
              <br /> too sweet, and
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
              Once you've found your event, get in touch by
              <br /> sending an email or a quick phone call to sign up.
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
              Check your dashboard to manage and <br /> keep-up-to-date with
              your events.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

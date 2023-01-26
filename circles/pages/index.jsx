import Footer from "../components/Footer";
import { useSession, signIn } from "next-auth/react";
import SwiperSlideshow from "../components/Swiper";
import LandingP from "/images/Group 226.png";
import Image from "next/image";
import quote2 from "/images/white_mons.png";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  console.log("session on index", session);

  return (
    <>
      <Image
        src={LandingP}
        className="lg:w-full lg:h-full h-[15em] sm:h-[25em] w-[50em] m:w-[50em] bg-cover"
      />
      <div className="absolute lg:top-64 top-28 lg:left-[25em] sm:left-40 left-5 sm:top-32 ">
        <Image src={quote2} className=" lg:w-[40em] sm:w-[30em] w-60" />
        <p className="lg:text-lg sm:text-lg text-xs font-bold lg:mr-96 lg:ml-2 sm:ml-2 sm:w-72 mt-2 lg:-mt-2 sm:-mt-1 lg:w-96 text-white ">
          If you need help using this site contact your link worker or send us
          an{" "}
          <Link
            href="./contactus"
            className="underline font-bold text-[#000000] hover:text-[rgba(186,229,243)]"
          >
            email.
          </Link>
        </p>
        <div className="w-screen h-20 bg-blue"></div>
      </div>
      <SwiperSlideshow />
      <Footer />
    </>
  );
}

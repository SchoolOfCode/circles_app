import Head from "next/head";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import LandingP from "../public/images/Group 226.png";
import Logoblack from "../public/images/LogoBlack.png";
import FeedbackModal from "../components/FeedbackModal";

export default function Home() {
  const { data: session } = useSession();
  console.log("session on index", session);

  return (
    <>
      <div className="relative font-mons">
        <Image src={LandingP} className="w-full h-full bg-cover" />
        <h1 className=" transition ease-in delay-300 duration-300 opacity-100 absolute w-[1000px] left-[200px] bottom-96 text-6xl ">
          "Helping people find their circles"
        </h1>
        <FeedbackModal />
      </div>
    </>
  );
}

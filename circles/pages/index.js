import Footer from "../components/Footer";
import { useSession, signIn } from "next-auth/react";
import SwiperSlideshow from "../components/Swiper";

export default function Home() {
  const { data: session } = useSession();
  console.log("session on index", session);

  return (
    <>
      <SwiperSlideshow />
      <Footer />
    </>
  );
}

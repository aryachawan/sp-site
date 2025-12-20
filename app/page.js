import HeroSection from "@/components/hero-section";
import MyGallery from "@/components/mygallery";
import Myprofile from "@/components/myprofile";
import Polaroids from "@/components/polaroids";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Myprofile/>
    <Polaroids/>
    <MyGallery/>
    </>
  );
}

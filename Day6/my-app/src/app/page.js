import Image from "next/image";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/footer/Footer";
import TopFooter from "@/components/footer/topFooter";
import TopNav from "@/components/header/topNav";
import SecondaryNav from "@/components/header/secondaryNav";
import TrendingPlayers from "@/components/home/TrendingPlayers";
import TeamFeatures from "@/components/home/TeamFeatures";
import KeySeries from "@/components/home/KeySeries";
import Writter from "@/components/home/Writter";
import Edditor from "@/components/home/Edditor";
import Spotlight from "@/components/home/SpotLight";
import MostRead from "@/components/home/MostRead";
import Photos from "@/components/home/Photos";
import PicData from "@/components/home/Photos";
export default function Home() {
  return (
    <>
      <SecondaryNav />
      <TrendingPlayers />
      <Edditor />
      <TeamFeatures />
      <Writter />
      <KeySeries />

       <div className="grid grid-cols-1 lg:grid-cols-3  mx-auto max-w-4xl  mt-8">
        
        <div className="lg:col-span-2">
          <Spotlight />
        </div>

         <div className="lg:col-span-1">
          <MostRead />
        </div>
      </div>
      <PicData/>
    </>
  );
}

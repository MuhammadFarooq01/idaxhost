import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import PricingSection from "./PricingSection/PricingSection";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="flex flex-col">
          <Navbar />
        </div>
        <div className="bg-hero relative -mt-70 px-5 pt-5 sm:py-5 sm:px-20 md:px-[85px] lg:px-28">
          <Hero />
        </div>
        <div className="bg-cgray z-10">
          <PricingSection />
        </div>
      </div>
    </>
  );
}

export default Home;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import BottomFadeBlurOverlay from "./components/BottomFadeBlurOverlay";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import StrategicApproachSection from "./sections/StrategicApproachSection";
import GetInTouchSection from "./sections/GetInTouchSection";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Bottom blur overlay */}
      <BottomFadeBlurOverlay />

      {/* Main Content — navbar height offset: 87px desktop, 56px mobile */}
      <main className="flex flex-col items-center pt-[56px] md:pt-[87px]">
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] flex justify-center px-4 lg:px-8">
            <MissionSection />
          </div>
        </AnimatedSection>

        {/* What We Do Section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] flex justify-center px-4 lg:px-8">
            <WhatWeDoSection />
          </div>
        </AnimatedSection>

        {/* Strategic Approach Section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px]">
            <StrategicApproachSection />
          </div>
        </AnimatedSection>

        {/* Get In Touch Section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] mb-[40px] lg:mb-[70px] flex justify-center px-4 lg:px-8">
            <GetInTouchSection />
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import { HeroSection, WhyUsSection } from "@/components";
import "./main-page.scss";
import FeaturesSection from "@/components/section/features/features";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
    </main>
  );
};

export default MainPage;

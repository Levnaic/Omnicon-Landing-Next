"use client";

import {
  HeroSection,
  WhyUsSection,
  FeaturesSection,
  PricingSection,
} from "@/components";
import "./main-page.scss";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
};

export default MainPage;

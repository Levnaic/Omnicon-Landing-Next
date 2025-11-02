"use client";

import {
  HeroSection,
  WhyUsSection,
  FeaturesSection,
  PricingSection,
} from "@/components";
import "./main-page.scss";
import FaqSection from "@/components/section/faq/faq";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </main>
  );
};

export default MainPage;

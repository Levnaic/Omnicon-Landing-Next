"use client";

import Section from "@/components/section/section";
import { FlipCard } from "@/components";
import "./pricing.scss";

const plans = [
  {
    title: "Starter",
    description: "$5/month — perfect for trying things out.",
    disclaimer: "Starter plan has limited features.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Pro",
    description: "$15/month — unlock pro-level tools.",
    disclaimer: "Pro plan billed monthly. Cancel anytime.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    title: "Team",
    description: "$30/month — built for small teams.",
    disclaimer: "Team plan includes priority support.",
    image: "https://picsum.photos/400/300?random=3",
  },
];

const PricingSection = () => {
  return (
    <Section id="pricing">
      <div className="pricing">
        <h2 className="pricing-title">Simple Pricing</h2>
        <p className="pricing-subtitle">Pick a plan that fits your needs</p>
        <div className="pricing-flex">
          {plans.map((plan) => (
            <FlipCard
              key={plan.title}
              cardTitle={plan.title}
              cardDescription={plan.description}
              cardDisclaimer={plan.disclaimer}
              cardImage={plan.image}
              buttonText="Choose Plan"
              onButtonClick={() => console.log(`Selected ${plan.title}`)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;

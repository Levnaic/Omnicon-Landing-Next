"use client";

import { motion } from "framer-motion";
import { FlipCard, Section } from "@/components";
import "./features.scss";

const Features = () => {
  const featuresData = [
    {
      title: "Feature 1",
      description: "Easy access to various data",
      image: "https://picsum.photos/400/300?random=7",
    },
    {
      title: "Feature 2",
      description: "Be on track with everything",
      image: "https://picsum.photos/400/300?random=5",
    },
  ];

  return (
    <Section>
      <div className="features">
        <motion.div>
          <div className="features-wrapper">
            {featuresData.map((feature) => (
              <FlipCard
                key={feature.title}
                cardTitle={feature.title}
                cardDescription={feature.description}
                cardImage={feature.image}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Features;

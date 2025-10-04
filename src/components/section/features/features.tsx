import "./features.scss";
import { motion } from "framer-motion";
import { useFeatures } from "@/hooks/useContent";
import { Section } from "@/components";

const FeaturesSection = () => {
  const { title, subtitle, featuresList } = useFeatures();

  return (
    <Section id="features">
      <motion.div
        className="features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="feature-title">{title}</h2>
        <p className="feature-subtitile">{subtitle}</p>
        <div className="features-presentation">
          <div className="features-select">
            {featuresList.map((feature) => {
              return <div key={feature.id}></div>;
            })}
          </div>
          <div className="features-video-container"></div>
        </div>
      </motion.div>
    </Section>
  );
};

export default FeaturesSection;

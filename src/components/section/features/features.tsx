import "./features.scss";
import { motion } from "framer-motion";
import { useFeatures } from "@/hooks/useContent";
import { Section, RenderIcon } from "@/components";

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
        <h2 className="features-title">{title}</h2>
        <p className="features-subtitile">{subtitle}</p>
        <div className="features-presentation">
          <div className="features-select">
            {featuresList.map((feature) => {
              return (
                <article key={feature.id} className="features-item">
                  <div className="features-item-upper-part">
                    <div className="features-item-icon-container">
                      {RenderIcon({
                        iconName: feature.icon,
                        className: "features-item-icon",
                      })}
                    </div>
                    <h3 className="features-item-title">{feature.title}</h3>
                  </div>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
          <div className="features-video-container">
            <div className="features-video"></div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default FeaturesSection;

"use client";

import "./features.scss";
import { motion } from "framer-motion";
import { useFeatures } from "@/hooks/useContent";
import { Section, RenderIcon, Video } from "@/components";
import { useState } from "react";

const FeaturesSection = () => {
  const { title, subtitle, featuresList } = useFeatures();
  const [selectedFeatureId, setSelectedFeatureId] = useState(
    featuresList[0]?.id
  );

  const selectedFeature = featuresList.find(
    (feature) => feature.id === selectedFeatureId
  );
  const videoSrc = selectedFeature?.videoUrl || featuresList[0].videoUrl;

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
                <article
                  key={feature.id}
                  className={`features-item ${
                    selectedFeatureId === feature.id
                      ? "features-item-active"
                      : ""
                  }`}
                  onClick={() => setSelectedFeatureId(feature.id)}
                >
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
            <Video
              key={videoSrc}
              src={`/videos/${videoSrc}.mp4`}
              width={350}
              height={350}
              className="features-video"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default FeaturesSection;

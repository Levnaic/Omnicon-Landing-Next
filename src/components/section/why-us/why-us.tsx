import "./why-us.scss";
import { Section, IconCard, RenderIcon } from "@/components";
import { useWhyUs } from "@/hooks/useContent";
import { motion } from "framer-motion";

const WhyUsSection = () => {
  const { title, whyUsCards } = useWhyUs();

  return (
    <Section id="why-us">
      <motion.div
        className="why-us"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="why-us-title">{title}</h2>
        <div className="why-us-grid">
          {whyUsCards.map((card) => {
            return (
              <IconCard
                key={card.id}
                IconCardTitle={card.title}
                IconCardText={card.text}
                IconCardIcon={RenderIcon({
                  iconName: card.icon,
                  className: "icon-card-icon",
                })}
                IconCardImage={card.image}
                isFeaturedIconCard={card.isFeaturedWhyUsCard}
                isFillIconCard={card.isFillWhyUsCard}
              />
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default WhyUsSection;

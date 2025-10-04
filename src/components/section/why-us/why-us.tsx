import "./why-us.scss";
import { Section, WhyUsCard } from "@/components";
import { useWhyUs } from "@/hooks/useContent";
import { motion } from "framer-motion";
import { renderIcon } from "@/components/utils/icons";

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
              <WhyUsCard
                key={card.id}
                whyUsCardTitle={card.title}
                whyUsCardText={card.text}
                whyUsCardIcon={renderIcon({
                  iconName: card.icon,
                  className: "why-us-card-icon",
                })}
                whyUsCardImage={card.image}
                isFeaturedWhyUsCard={card.isFeaturedWhyUsCard}
                isFillWhyUsCard={card.isFillWhyUsCard}
              />
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default WhyUsSection;

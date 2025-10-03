import "./why-us.scss";
import { Section, WhyUsCard } from "@/components";
import { useWhyUs } from "@/hooks/useContent";
import {
  Headset,
  Heart,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Truck,
  MapPin,
  Users,
  BarChart3,
  Tally5,
} from "lucide-react";
import { motion } from "framer-motion";

// Create icon map in the component
const iconMap = {
  Headset,
  Heart,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Truck,
  MapPin,
  Users,
  BarChart3,
  Tally5,
};

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
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];

            return (
              <WhyUsCard
                key={card.id}
                whyUsCardTitle={card.title}
                whyUsCardText={card.text}
                whyUsCardIcon={IconComponent ? <IconComponent /> : null}
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

import "./hero.scss";
import { Section, Button, Video } from "@/components";
import { motion } from "framer-motion";
import { useHero } from "@/hooks/useContent";

const HeroSection = () => {
  const { title, subtitle, description, ctaButton, secondaryButton } =
    useHero();

  return (
    <Section id="hero">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-left">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            <Button variant="solid" href="/pricing">
              {ctaButton}
            </Button>
            <Button variant="ghost" href="/features">
              {secondaryButton}
            </Button>
          </div>
        </div>

        <div className="hero-right">
          <Video
            src="/videos/hero-placeholder.mp4"
            width={800}
            height={450}
            className="hero-video"
          />
        </div>
      </motion.div>
    </Section>
  );
};

export default HeroSection;

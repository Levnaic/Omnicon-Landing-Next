import "./hero.scss";
import { Section, Button, Video } from "@/components";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section id="hero">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-left">
          <h1 className="hero-title">Book the best loads with one click</h1>
          <p className="hero-subtitle">
            LoadConnect automates freight dispatch, from load board to your
            email inbox, so it&apos;s simple and fast.
          </p>
          <div className="hero-actions">
            <Button variant="solid" href="/pricing">
              Get Started
            </Button>
            <Button variant="ghost" href="/features">
              See Features
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

export default Hero;

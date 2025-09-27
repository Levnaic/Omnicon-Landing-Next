"use client";

import { motion } from "framer-motion";
import { Section, Button } from "@/components";
import "./main-page.scss";

const MainPage = () => {
  return (
    <Section id="hero">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-tag">🚀 New</div>
        <h1 className="hero-title">
          Ship a modern landing page in hours, not weeks
        </h1>
        <p className="hero-subtitle">
          React + Vite + Framer Motion + SCSS. Minimal, fast, aesthetic.
        </p>
        <div className="hero-actions">
          <Button variant="solid" href="/pricing">
            Get Started
          </Button>
          <Button variant="ghost" href="/features">
            See Features
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default MainPage;

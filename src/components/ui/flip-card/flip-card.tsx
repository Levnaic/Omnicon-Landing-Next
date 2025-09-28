"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import Image from "next/image";
import "./flip-card.scss";

type FlipCardProps = {
  cardTitle: string;
  cardDescription?: string;
  cardDisclaimer?: string;
  cardImage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const FlipCard = ({
  cardTitle,
  cardDescription,
  cardDisclaimer,
  cardImage,
  buttonText = "Learn more",
  onButtonClick,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)
      }
      aria-pressed={flipped}
    >
      <motion.div
        className="flip-card-3d"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flip-card-face flip-card-front">
          {cardImage && (
            <Image
              className="flip-card-image"
              src={cardImage}
              alt=""
              width={320}
              height={180}
            />
          )}
          <div className="flip-card-content">
            <h3 className="flip-card-title">{cardTitle}</h3>
            <p className="flip-card-desc">{cardDescription}</p>
          </div>
          <div className="flip-card-actions">
            <Button variant="solid">{buttonText}</Button>
          </div>
        </div>

        <div className="flip-card-face flip-card-back">
          <div className="flip-card-content">
            <h4 className="flip-card-title">{cardTitle}</h4>
            <p className="flip-card-desc">{cardDisclaimer}</p>
          </div>
          <div className="flip-card-actions">
            <Button variant="solid" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;

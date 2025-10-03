"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import Image from "next/image";
import "./flip-card.scss";

type FlipCardProps = {
  flipCardTitle: string;
  flipCardDescription?: string;
  flipCardDisclaimer?: string;
  flipCardImage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const FlipCard = ({
  flipCardTitle,
  flipCardDescription,
  flipCardDisclaimer,
  flipCardImage,
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
          {flipCardImage && (
            <Image
              className="flip-card-image"
              src={flipCardImage}
              alt=""
              width={320}
              height={180}
            />
          )}
          <div className="flip-card-content">
            <h3 className="flip-card-title">{flipCardTitle}</h3>
            <p className="flip-card-desc">{flipCardDescription}</p>
          </div>
          <div className="flip-card-actions">
            <Button variant="solid">{buttonText}</Button>
          </div>
        </div>

        <div className="flip-card-face flip-card-back">
          <div className="flip-card-content">
            <h4 className="flip-card-title">{flipCardTitle}</h4>
            <p className="flip-card-desc">{flipCardDisclaimer}</p>
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

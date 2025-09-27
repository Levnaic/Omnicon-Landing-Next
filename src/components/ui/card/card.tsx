"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import "./card.scss";

type CardProps = {
  cardTitle: string;
  cardDescription?: string;
  cardDisclaimer?: string;
  cardImage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const Card = ({
  cardTitle,
  cardDescription,
  cardDisclaimer,
  cardImage,
  buttonText = "Learn more",
  onButtonClick,
}: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="card"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)
      }
      aria-pressed={flipped}
    >
      <motion.div
        className="card-3d"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="card-face card-front">
          {cardImage && <img className="card-image" src={cardImage} alt="" />}
          <div className="card-content">
            <h3 className="card-title">{cardTitle}</h3>
            <p className="card-desc">{cardDescription}</p>
          </div>
          <div className="card-actions">
            <Button variant="solid">{buttonText}</Button>
          </div>
        </div>

        <div className="card-face card-back">
          <div className="card-content">
            <h4 className="card-title">{cardTitle}</h4>
            <p className="card-desc">{cardDisclaimer}</p>
          </div>
          <div className="card-actions">
            <Button variant="solid" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

import { ReactNode } from "react";
import "./why-us-card.scss";

type WhyUsCardProps = {
  whyUsCardTitle: string;
  whyUsCardText: string;
  whyUsCardIcon: ReactNode;
  whyUsCardImage?: string;

  isFeaturedWhyUsCard?: boolean;
  isFillWhyUsCard?: boolean;
};

const WhyUsCard = ({
  whyUsCardTitle,
  whyUsCardText,
  whyUsCardIcon,
  whyUsCardImage,
  isFillWhyUsCard = false,
  isFeaturedWhyUsCard = false,
}: WhyUsCardProps) => {
  return (
    <div
      className={`why-us-card ${isFillWhyUsCard ? "why-us-card-fill" : ""} ${
        isFeaturedWhyUsCard ? "why-us-card-featured" : ""
      } ${whyUsCardImage ? "why-us-card-with-image" : ""}`}
      style={{
        backgroundImage: whyUsCardImage ? `url(${whyUsCardImage})` : undefined,
      }}
    >
      <div className="why-us-card-upper-part">
        <div className="why-us-card-icon">{whyUsCardIcon}</div>
      </div>
      <div className="why-us-card-lower-part">
        <h3 className="why-us-card-title">{whyUsCardTitle}</h3>
        <p className="why-us-card-text">{whyUsCardText}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;

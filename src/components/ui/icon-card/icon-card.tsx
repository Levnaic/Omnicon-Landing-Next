import { ReactNode } from "react";
import "./icon-card.scss";

type IconCardProps = {
  IconCardTitle: string;
  IconCardText: string;
  IconCardIcon: ReactNode;
  IconCardImage?: string;

  isFeaturedIconCard?: boolean;
  isFillIconCard?: boolean;
};

const IconCard = ({
  IconCardTitle,
  IconCardText,
  IconCardIcon,
  IconCardImage,
  isFillIconCard = false,
  isFeaturedIconCard = false,
}: IconCardProps) => {
  return (
    <div
      className={`icon-card ${isFillIconCard ? "icon-card-fill" : ""} ${
        isFeaturedIconCard ? "icon-card-featured" : ""
      } ${IconCardImage ? "icon-card-with-image" : ""}`}
      style={{
        backgroundImage: IconCardImage ? `url(${IconCardImage})` : undefined,
      }}
    >
      <div className="icon-card-upper-part">
        <div className="icon-card-icon">{IconCardIcon}</div>
      </div>
      <div className="icon-card-lower-part">
        <h3 className="icon-card-title">{IconCardTitle}</h3>
        <p className="icon-card-text">{IconCardText}</p>
      </div>
    </div>
  );
};

export default IconCard;

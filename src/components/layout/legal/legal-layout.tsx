import { ReactNode } from "react";
import "./legal-layout.scss";

type Props = {
  title: string;
  description: string;
  lastUpdated?: string;
  children: ReactNode;
};

const LegalLayout = ({ title, description, lastUpdated, children }: Props) => {
  return (
    <div className="legal-contianer">
      <header>
        <h1 className="legal-title">{title}</h1>
        {lastUpdated && (
          <p className="legal-last-update">Last updated: {lastUpdated}</p>
        )}
      </header>
      <div className="legal-description">{description}</div>
      <main className="legal-main">{children}</main>
    </div>
  );
};

export default LegalLayout;

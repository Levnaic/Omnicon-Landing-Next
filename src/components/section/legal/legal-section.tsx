// components/section/legal/legal-section.tsx
"use client";

import Link from "next/link";
import "./legal-section.scss";

type Props = {
  title: string;
  children: string;
};

const LegalSection = ({ title, children }: Props) => {
  const parseLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <Link
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <section className="legal-section">
      <h2>{title}</h2>
      <div className="legal-section-content">{parseLinks(children)}</div>
    </section>
  );
};

export default LegalSection;

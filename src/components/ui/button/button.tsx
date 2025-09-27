import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import "./button.scss";

type Props = {
  children: ReactNode;
  variant?: "solid" | "ghost";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  external?: boolean;
};

const Button = ({
  children,
  variant = "solid",
  onClick,
  type = "button",
  href,
  external = false,
}: Props) => {
  const className = `btn ${variant}`;

  // If href is provided, render as link
  if (href) {
    // External links (open in new tab)
    if (external) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    // Internal links using Next.js Link
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // Default behavior - render as button
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

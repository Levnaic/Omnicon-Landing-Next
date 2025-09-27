"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.scss";

// Define your pages
const pages = [
  { id: "main", label: "Main", path: "/" },
  { id: "features", label: "Features", path: "/features" },
  { id: "pricing", label: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const pathname = usePathname(); // Gets current path

  return (
    <motion.nav
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="nav-inner">
        <Link href="/" style={{ fontWeight: 800, textDecoration: "none" }}>
          YourBrand
        </Link>

        <div className="nav-tabs">
          {pages.map((page) => {
            const isActive = pathname === page.path;
            return (
              <Link
                key={page.id}
                href={page.path}
                className={`nav-tab ${isActive ? "is-active" : ""}`}
              >
                {page.label}
                {isActive && (
                  <motion.span
                    className="nav-tab-pill"
                    layoutId="nav-tab-pill"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link href="/pricing" className="btn solid">
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

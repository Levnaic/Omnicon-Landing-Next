"use client";

import "./pricing.scss";
import { motion } from "framer-motion";
import { usePricing } from "@/hooks/useContent";
import { Section, RenderIcon } from "@/components";
import { useState } from "react";

const PricingSection = () => {
  const { title, subtitle, packages } = usePricing();
  const [userCount, setUserCount] = useState(10);

  const calculatePrice = (basePrice: number) => {
    if (userCount <= 10) return basePrice;
    if (userCount <= 50) return basePrice * 0.9; // 10% off
    if (userCount <= 100) return basePrice * 0.8; // 20% off
    return basePrice * 0.7; // 30% off for 100+ users
  };

  const getDiscountPercentage = () => {
    if (userCount <= 10) return 0;
    if (userCount <= 50) return 10;
    if (userCount <= 100) return 20;
    return 30;
  };

  return (
    <Section id="pricing">
      <motion.div
        className="pricing"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="pricing-title">{title}</h2>
        <p className="pricing-subtitle">{subtitle}</p>

        <div className="pricing-slider-container">
          <div className="pricing-slider-header">
            <span className="pricing-slider-label">Number of Users</span>
            <span className="pricing-slider-value">{userCount} users</span>
            {getDiscountPercentage() > 0 && (
              <span className="pricing-discount-badge">
                Save {getDiscountPercentage()}%
              </span>
            )}
          </div>
          <input
            type="range"
            min="1"
            max="200"
            value={userCount}
            onChange={(e) => setUserCount(parseInt(e.target.value))}
            className="pricing-slider"
          />
          <div className="pricing-slider-labels">
            <span>1</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
          </div>
        </div>

        <div className="pricing-packages">
          {packages.map((pkg) => {
            const finalPrice = calculatePrice(pkg.price);
            const monthlyPricePerUser = finalPrice / userCount;

            return (
              <motion.article
                key={pkg.id}
                className="pricing-package"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="pricing-package-header">
                  <div className="pricing-package-icon-container">
                    {RenderIcon({
                      iconName: pkg.icon,
                      className: "pricing-package-icon",
                    })}
                  </div>
                  <h3 className="pricing-package-title">{pkg.title}</h3>
                  <p className="pricing-package-description">
                    {pkg.description}
                  </p>
                </div>

                <div className="pricing-package-content">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="pricing-feature">
                      {RenderIcon({
                        iconName: "check",
                        className: "pricing-feature-icon",
                      })}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-package-footer">
                  <div className="pricing-price">
                    <span className="pricing-price-amount">
                      ${finalPrice.toFixed(2)}
                    </span>
                    <span className="pricing-price-period">/month</span>
                  </div>
                  <div className="pricing-per-user">
                    ${monthlyPricePerUser.toFixed(2)} per user/month
                  </div>
                  <button className="pricing-cta-button">Get Started</button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default PricingSection;

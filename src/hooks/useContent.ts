import { useMemo } from "react";
import contentData from "@/data/content.json";
import type { ContentData } from "@/types/content";

export const useContent = () => {
  const data = useMemo(() => contentData as ContentData, []);

  return {
    hero: data.hero,
    features: data.features,
    pricing: data.pricing,
    testimonials: data.testimonials,
    faq: data.faq,
    footer: data.footer,

    // Helper functions
    getFeatureById: (id: number) =>
      data.features.featuresList.find((f) => f.id === id),
    getPricingPlanById: (id: string) =>
      data.pricing.plans.find((p) => p.id === id),
    getTestimonialById: (id: number) =>
      data.testimonials.find((t) => t.id === id),
    getFAQById: (id: number) => data.faq.find((f) => f.id === id),
  };
};

// You can also export individual sections if you prefer
export const useHero = () => useContent().hero;
export const useFeatures = () => useContent().features;
export const usePricing = () => useContent().pricing;
export const useTestimonials = () => useContent().testimonials;
export const useFAQ = () => useContent().faq;
export const useFooter = () => useContent().footer;

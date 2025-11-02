import { useMemo } from "react";
import contentData from "@/data/content.json";
import type { ContentData } from "@/types/content";

export const useContent = () => {
  const data = useMemo(() => contentData as ContentData, []);

  return {
    hero: data.hero,
    whyUsSection: data.whyUsSection,
    features: data.features,
    pricing: data.pricing,
    faq: data.faq,
    footer: data.footer,
    legal: data.legal,

    // Helper functions
    getFeatureById: (id: number) =>
      data.features.featuresList.find((f) => f.id === id),
    getFAQById: (id: number) => data.faq.find((f) => f.id === id),
    getWhyUsCardById: (id: string) =>
      data.whyUsSection.whyUsCards.find((c) => c.id === id),
  };
};

// You can also export individual sections if you prefer
export const useHero = () => useContent().hero;
export const useWhyUs = () => useContent().whyUsSection;
export const useFeatures = () => useContent().features;
export const usePricing = () => useContent().pricing;
export const useFAQ = () => useContent().faq;
export const useFooter = () => useContent().footer;
export const useLegal = () => useContent().legal;

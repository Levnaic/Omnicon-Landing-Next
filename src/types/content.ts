export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: string;
  secondaryButton: string;
}

export interface WhyUsCard {
  id: string;
  title: string;
  text: string;
  icon: string;
  image?: string;
  isFeaturedWhyUsCard?: boolean;
  isFillWhyUsCard?: boolean;
}

export interface WhyUsSection {
  title: string;
  whyUsCards: WhyUsCard[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  videoUrl: string;
}

export interface FeaturesSection {
  title: string;
  subtitle: string;
  featuresList: Feature[];
}

export interface PricingPackage {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
  features: string[];
}

export interface PricingSection {
  title: string;
  subtitle: string;
  packages: PricingPackage[];
}

// ! stari pricing
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface Pricing {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}
// ! kraj starog pricinga

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Company {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface Footer {
  company: Company;
  links: {
    product: FooterLink[];
    company: FooterLink[];
    support: FooterLink[];
    legal: FooterLink[];
  };
  social: SocialLink[];
}

export interface ContentData {
  hero: Hero;
  whyUsSection: WhyUsSection;
  features: FeaturesSection;
  pricing: PricingSection;
  testimonials: Testimonial[];
  faq: FAQ[];
  footer: Footer;
}

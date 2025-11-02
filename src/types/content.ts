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
  fullName: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  supportEmail: string;
  copyright: string;
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

export interface LegalSection {
  title: string;
  content: string;
}

export interface Legal {
  terms: LegalSection[];
  privacy: LegalSection[];
}

export interface ContentData {
  hero: Hero;
  whyUsSection: WhyUsSection;
  features: FeaturesSection;
  pricing: PricingSection;
  faq: FAQ[];
  footer: Footer;
  legal: Legal;
}

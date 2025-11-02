import { LegalLayout, LegalSection } from "@/components";
import { useLegal } from "@/hooks/useContent";

const PrivacyPolicy = () => {
  const { privacy } = useLegal();

  return (
    <LegalLayout
      title={`${privacy[0].title}`}
      description={`${privacy[0].content}`}
    >
      {privacy.slice(1).map((section, index) => (
        <LegalSection key={index} title={section.title}>
          {section.content}
        </LegalSection>
      ))}
    </LegalLayout>
  );
};

export default PrivacyPolicy;

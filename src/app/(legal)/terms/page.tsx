import { LegalLayout, LegalSection } from "@/components";
import { useLegal } from "@/hooks/useContent";

const Terms = () => {
  const { terms } = useLegal();

  return (
    <LegalLayout
      title={`${terms[0].title}`}
      description={`${terms[0].content}`}
    >
      {terms.slice(1).map((section, index) => (
        <LegalSection key={index} title={section.title}>
          {section.content}
        </LegalSection>
      ))}
    </LegalLayout>
  );
};

export default Terms;

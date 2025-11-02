import "./legal-section.scss";

type Props = {
  title: string;
  children: string;
};

const LegalSection = ({ title, children }: Props) => {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      <div className="legal-section-content">{children}</div>
    </section>
  );
};

export default LegalSection;

import Section from "@/components/section/section";
import Link from "next/link";
import "./footer.scss";
import { useFooter } from "@/hooks/useContent";

const Footer = () => {
  const { company } = useFooter();

  return (
    <Section id="footer">
      <div className="footer">
        <h2>{company.name}</h2>
        <Link href={"support"} className="footer-support-link">
          {company.supportEmail}
        </Link>
        <div className="footer-privacy-policy-terms-links-container">
          <Link href={"privacy-policy"} className="footer-link">
            Privacy Policy{" "}
          </Link>
          <p>|</p>
          <Link href={"terms"} className="footer-link">
            Terms
          </Link>
        </div>
        <p className="footer-copyright">{company.copyright}</p>
        <div className="footer-company-info">
          <div className="footer-company-adress">{company.address}</div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;

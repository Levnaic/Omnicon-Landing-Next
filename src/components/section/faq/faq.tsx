import { useFAQ } from "@/hooks/useContent";
import Section from "../section";
import { motion } from "framer-motion";
import { useState } from "react";
import "./faq.scss";

const FaqSection = () => {
  const faqArr = useFAQ();
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <Section id="faq">
      <motion.div
        className="faq"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to common questions about our platform
        </p>

        <div className="faq-list">
          {faqArr.map((faq) => (
            <motion.div
              key={faq.id}
              className={`faq-item ${openItemId === faq.id ? "active" : ""}`}
              initial={false}
              animate={{ height: "auto" }}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openItemId === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  opacity: openItemId === faq.id ? 1 : 0,
                  height: openItemId === faq.id ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default FaqSection;

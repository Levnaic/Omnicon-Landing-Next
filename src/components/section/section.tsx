import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import './section.scss'

interface Props { id?: string; children?: ReactNode }

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Section = ({ id, children }: Props) => (
  <section id={id} className="section">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  </section>
)

export default Section
import { motion } from "framer-motion";

export const QuoteSection = () => {
  return (
    <section className="py-24 lg:py-34 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.blockquote
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-title italic font-serif leading-relaxed text-foreground/90 mb-8">
            "This is my body, and this is my software."
          </p>
          <footer>
            <cite className="text-subtitle not-italic">— ORLAN, 2022</cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

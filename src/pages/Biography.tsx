import { motion } from "framer-motion";
import { TimelineHeader } from "@/components/TimelineHeader";
import { TimelineEntry } from "@/components/TimelineEntry";
import { Footer } from "@/components/Footer";
import { timelineData } from "@/data/timeline";

const Biography = () => {
  return (
    <div className="min-h-screen bg-background">
      <TimelineHeader />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <motion.p
                className="text-subtitle mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Year-by-Year Summary
              </motion.p>

              <motion.h1
                className="text-display mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">ORLAN:</span>
                <span className="block text-gallery-stone">A Life in Art</span>
              </motion.h1>

              <motion.p
                className="text-body max-w-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From her first performances in 1964 to her ongoing explorations of 
                biotechnology and artificial intelligence, ORLAN has consistently 
                challenged the boundaries of art, identity, and the human body.
              </motion.p>

              <motion.div
                className="mt-12 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-12 h-px bg-gallery-earth" />
                <span className="text-caption">1947 — Present</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="border-t border-border">
              {timelineData.map((entry, index) => (
                <TimelineEntry key={entry.year} entry={entry} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Source note */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-caption text-muted-foreground/70 italic">
                This timeline is compiled from publicly documented sources including 
                the artist's official website, museum catalogues, and institutional archives. 
                Years without documented major milestones have been omitted or summarized 
                as periods.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.orlan.eu/en/bio-biblio/biography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption link-underline hover:text-gallery-earth transition-colors"
                >
                  Visit Official ORLAN Website →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biography;

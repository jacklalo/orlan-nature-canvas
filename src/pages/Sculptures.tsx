import { motion } from "framer-motion";
import { SculpturesHeader } from "@/components/SculpturesHeader";
import { SculptureCard } from "@/components/SculptureCard";
import { Footer } from "@/components/Footer";
import { sculpturesData } from "@/data/sculptures";

const Sculptures = () => {
  return (
    <div className="min-h-screen bg-background">
      <SculpturesHeader />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.h1
                className="text-display mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">ORLAN —</span>
                <span className="block text-gallery-stone">Sculptures</span>
              </motion.h1>

              <motion.p
                className="text-body max-w-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From performance objects to bioart installations and robotic avatars, 
                ORLAN's sculptural practice extends her interrogation of the body into 
                three-dimensional space—transforming flesh, technology, and found materials 
                into works that challenge the boundaries of art and life.
              </motion.p>

              <motion.div
                className="mt-12 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-12 h-px bg-gallery-earth" />
                <span className="text-caption">{sculpturesData.length} Works</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="border-t border-border pt-16 lg:pt-24">
              <div className="flex flex-col gap-24 lg:gap-32 max-w-3xl">
                {sculpturesData.map((sculpture, index) => (
                  <SculptureCard 
                    key={sculpture.id} 
                    sculpture={sculpture} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Source note */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-2xl border-t border-border pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-caption text-muted-foreground/70 italic">
                This selection presents documented sculptural works from ORLAN's practice. 
                Only verified titles, dates, and materials are included. For comprehensive 
                documentation, please consult the artist's official archives.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.orlan.eu/en/works/sculpture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption link-underline hover:text-gallery-earth transition-colors"
                >
                  Visit Official ORLAN Sculpture Archive →
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

export default Sculptures;

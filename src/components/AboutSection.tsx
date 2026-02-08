import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-24 lg:py-34">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-subtitle mb-4">About the Artist</p>
            <h2 className="text-headline">ORLAN</h2>
          </motion.div>

          <motion.div
            className="lg:col-span-8 lg:col-start-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-body text-muted-foreground">
                ORLAN is one of the most internationally renowned French artists, known for her 
                provocative and boundary-pushing work that challenges established ideas about 
                the human form, identity, and technology.
              </p>
              <p className="text-body text-muted-foreground">
                Her work spanning biotechnology, endangered species, and ecological themes 
                demonstrates a profound engagement with nature—from the cellular level to 
                global environmental concerns. Through projects like the Harlequin Coat, 
                she explores the boundaries between species, while her Endangered Species 
                series confronts the urgency of conservation.
              </p>
              <p className="text-body text-muted-foreground">
                Whether creating living cell cultures from multiple species or robots from 
                recycled materials, ORLAN consistently questions humanity's relationship 
                with the natural world and our responsibility to protect it.
              </p>

              <div className="pt-6">
                <a
                  href="https://www.orlan.eu/en/bio-biblio/biography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption link-underline hover:text-gallery-earth transition-colors"
                >
                  Read Full Biography →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

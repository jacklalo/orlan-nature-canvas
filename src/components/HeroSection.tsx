import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-end pb-16 lg:pb-24 pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.p
            className="text-subtitle mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Art Projects Related to Nature
          </motion.p>

          <motion.h1
            className="text-display mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">ORLAN &</span>
            <span className="block text-gallery-stone">Nature</span>
          </motion.h1>

          <motion.p
            className="text-body max-w-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Exploring the intersection of body, technology, and the natural world 
            through biotechnology, endangered species, and ecological consciousness.
          </motion.p>

          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-12 h-px bg-gallery-earth" />
            <span className="text-caption">5 Works</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

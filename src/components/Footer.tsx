import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-subtitle mb-4">Artist</p>
            <p className="font-serif text-xl">ORLAN</p>
            <p className="text-caption mt-2">French Multimedia Artist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-subtitle mb-4">Links</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.orlan.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption link-underline hover:text-gallery-earth transition-colors"
                >
                  Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.orlan.eu/en/bio-biblio/biography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption link-underline hover:text-gallery-earth transition-colors"
                >
                  Biography
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-subtitle mb-4">Theme</p>
            <p className="text-caption text-muted-foreground">
              Art Projects Related to Nature
            </p>
            <p className="text-caption text-muted-foreground mt-2">
              Biotechnology • Endangered Species • Ecology
            </p>
          </motion.div>
        </div>

        <div className="gallery-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} ORLAN. All rights reserved.
          </p>
          <p className="text-caption text-muted-foreground">
            Curated presentation of nature-related works
          </p>
        </div>
      </div>
    </footer>
  );
};

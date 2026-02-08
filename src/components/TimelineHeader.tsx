import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const TimelineHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-subtitle tracking-widest hover:text-accent transition-colors duration-300"
            >
              ORLAN
            </Link>
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/"
              className="text-caption link-underline hover:text-foreground transition-colors"
            >
              Nature Projects
            </Link>
            <span className="text-caption cursor-default">
              Biography
            </span>
            <Link 
              to="/sculptures"
              className="text-caption link-underline hover:text-foreground transition-colors"
            >
              Sculptures
            </Link>
          </motion.nav>

          <motion.div
            className="text-caption text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Timeline
          </motion.div>
        </div>
      </div>
    </header>
  );
};

import { motion } from "framer-motion";
import type { TimelineEntry as TimelineEntryType } from "@/data/timeline";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  index: number;
}

export const TimelineEntry = ({ entry, index }: TimelineEntryProps) => {
  return (
    <motion.article
      className="grid grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 border-b border-border last:border-b-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.03 }}
    >
      {/* Year column */}
      <div className="col-span-12 md:col-span-3 lg:col-span-2">
        <h2 
          className={`font-serif tracking-tight ${
            entry.isPeriod 
              ? "text-2xl lg:text-3xl text-gallery-stone" 
              : "text-3xl lg:text-5xl text-foreground"
          }`}
        >
          {entry.year}
        </h2>
      </div>

      {/* Description column */}
      <div className="col-span-12 md:col-span-9 lg:col-span-8 lg:col-start-4">
        <p className="text-body text-muted-foreground leading-relaxed">
          {entry.description}
        </p>
      </div>
    </motion.article>
  );
};

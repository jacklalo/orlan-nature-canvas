import { motion } from "framer-motion";
import type { Sculpture } from "@/data/sculptures";

interface SculptureCardProps {
  sculpture: Sculpture;
  index: number;
}

export const SculptureCard = ({ sculpture, index }: SculptureCardProps) => {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Image placeholder - large, contemplative */}
      <div className="aspect-[4/3] bg-muted mb-8 flex items-center justify-center overflow-hidden">
        <div className="text-center px-8">
          <p className="text-caption text-muted-foreground/60 italic">
            {sculpture.imagePlaceholder}
          </p>
          <p className="text-caption text-muted-foreground/40 mt-2">
            Image not available
          </p>
        </div>
      </div>

      {/* Caption block */}
      <div className="space-y-3">
        <h2 className="font-serif text-xl lg:text-2xl tracking-tight leading-tight">
          {sculpture.title}
        </h2>
        
        <div className="flex items-center gap-4 text-caption text-muted-foreground">
          <span>{sculpture.year}</span>
          {sculpture.medium && (
            <>
              <span className="w-1 h-1 rounded-full bg-gallery-stone" />
              <span>{sculpture.medium}</span>
            </>
          )}
        </div>

        {sculpture.description && (
          <p className="text-body text-muted-foreground leading-relaxed max-w-xl">
            {sculpture.description}
          </p>
        )}
      </div>
    </motion.article>
  );
};

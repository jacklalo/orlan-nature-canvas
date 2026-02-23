import { motion } from "framer-motion";

const exhibitions = [
  {
    name: "ORLAN: A Retrospective",
    venue: "The Opening Gallery",
    date: "September–October 2024",
    works: "Six decades survey — surgery-performances, Self-Hybridizations, robotics",
  },
  {
    name: "Omnipresence",
    venue: "Sandra Gering Gallery",
    date: "1993",
    works: "Seventh surgery-performance, live satellite broadcast",
  },
  {
    name: "ORLAN: Refiguration / Self-Hybridization",
    venue: "Museum of Modern Art (MoMA PS1 affiliated programming)",
    date: "2007",
    works: "Self-Hybridizations series — Pre-Columbian, African, Amerindian",
  },
  {
    name: "This Is My Body… This Is My Software",
    venue: "Anthology Film Archives",
    date: "2011",
    works: "Video documentation of surgery-performances and early works",
  },
  {
    name: "ORLAN: Strip-tease, all genres confused and not",
    venue: "Ceysson & Bénétière Gallery, New York",
    date: "2018",
    works: "Trousseau sheets, early feminist performance documentation",
  },
];

const Exhibition = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-16 lg:pt-32 pb-24 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <motion.p
            className="text-subtitle mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simulated Query
          </motion.p>

          <motion.h1
            className="text-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Exhibitions in New York
          </motion.h1>

          <motion.p
            className="text-body text-muted-foreground max-w-2xl mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Documented exhibitions and presentations of ORLAN's work in
            New York City venues and institutions.
          </motion.p>

          {/* Exhibition list */}
          <motion.div
            className="border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {exhibitions.map((ex, i) => (
              <motion.article
                key={ex.name}
                className="py-8 lg:py-10 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                  <div className="lg:col-span-5">
                    <h2 className="font-serif text-xl lg:text-2xl tracking-tight">
                      {ex.name}
                    </h2>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-caption text-muted-foreground">
                      {ex.venue}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-caption text-muted-foreground">
                      {ex.date}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
                      {ex.works}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Source */}
          <motion.p
            className="text-caption text-muted-foreground/50 italic mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This list includes documented exhibitions in New York City.
            Institutional group shows and secondary appearances are omitted
            for clarity.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Exhibition;

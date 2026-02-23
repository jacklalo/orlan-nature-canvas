import { motion } from "framer-motion";

const activeFilters = ["1990–2000", "Surgery"];

const filteredWorks = [
  {
    id: "reincarnation-1",
    title: "The Reincarnation of Saint ORLAN — 1st Surgery-Performance",
    year: "1990",
    medium: "Surgery-performance, video",
  },
  {
    id: "reincarnation-4",
    title: "Successful Operation — 4th Surgery-Performance",
    year: "1991",
    medium: "Surgery-performance, video, photography",
  },
  {
    id: "reincarnation-7",
    title: "Omnipresence — 7th Surgery-Performance",
    year: "1993",
    medium: "Surgery-performance, satellite broadcast, video",
  },
  {
    id: "reincarnation-9",
    title: "9th Surgery-Performance",
    year: "1993",
    medium: "Surgery-performance, video, photography",
  },
  {
    id: "reliquaires",
    title: "Reliquaires — My Flesh, the Text, and Languages",
    year: "1993",
    medium: "Flesh from surgical operations, resin, metal",
  },
  {
    id: "self-hyb-precolumbian",
    title: "Self-Hybridizations — Pre-Columbian",
    year: "1998–2000",
    medium: "Digital photography, Lambda prints",
  },
];

const IndexFilter = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-16 lg:pt-32 pb-24 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          {/* Query display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-subtitle mb-4">Query</p>
            <h1 className="font-serif text-2xl lg:text-3xl tracking-tight italic text-muted-foreground">
              "Works between 1990 and 2000 related to surgery"
            </h1>
          </motion.div>

          {/* Filters + meta */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {activeFilters.map((f) => (
              <span
                key={f}
                className="text-[10px] tracking-[0.12em] uppercase border border-foreground px-3 py-1 text-foreground"
              >
                {f} ×
              </span>
            ))}
            <span className="text-caption text-muted-foreground ml-auto">
              {filteredWorks.length} results
            </span>
            {/* Visual-only sort */}
            <span className="text-[10px] tracking-[0.12em] uppercase border border-border px-3 py-1 text-muted-foreground">
              Sort: Year ↑
            </span>
          </motion.div>

          {/* Results grid */}
          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
              {filteredWorks.map((work, i) => (
                <motion.article
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <div className="aspect-[4/3] bg-muted mb-5 flex items-center justify-center">
                    <span className="text-caption text-muted-foreground/40 italic">
                      Image placeholder
                    </span>
                  </div>
                  <h2 className="font-serif text-lg lg:text-xl tracking-tight mb-1">
                    {work.title}
                  </h2>
                  <p className="text-caption text-muted-foreground">
                    {work.year} — {work.medium}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexFilter;

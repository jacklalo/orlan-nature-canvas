import { motion } from "framer-motion";

const bioArtWorks = [
  {
    id: "harlequin-coat",
    title: "Harlequin Coat",
    year: "2007–2008",
    medium: "Living cell cultures, Petri dishes, multimedia installation",
    tags: ["Bioart", "Collaboration", "SymbioticA"],
  },
  {
    id: "hybridizations-african",
    title: "Self-Hybridizations — African",
    year: "2000–2003",
    medium: "Digital photography, Lambda prints",
    tags: ["Self-Hybridization", "Digital", "Identity"],
  },
  {
    id: "hybridizations-precolumbian",
    title: "Self-Hybridizations — Pre-Columbian",
    year: "1998–2000",
    medium: "Digital photography, Lambda prints",
    tags: ["Self-Hybridization", "Digital", "Pre-Columbian"],
  },
  {
    id: "hybridizations-amerindian",
    title: "Self-Hybridizations — Amerindian",
    year: "2005–2007",
    medium: "Digital photography, Lambda prints",
    tags: ["Self-Hybridization", "Digital", "Amerindian"],
  },
  {
    id: "reincarnation",
    title: "The Reincarnation of Saint ORLAN",
    year: "1990–1993",
    medium: "Surgery-performance, video, photography",
    tags: ["Carnal Art", "Surgery", "Performance"],
  },
  {
    id: "endangered-species",
    title: "Endangered Species Series",
    year: "2020–2024",
    medium: "Mixed media, digital, installation",
    tags: ["Nature", "Ecology", "Endangered Species"],
  },
];

const Collection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-16 lg:pt-32 pb-12 lg:pb-20">
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
            Works Related to Bio-Art
          </motion.h1>
          <motion.p
            className="text-body text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A curated selection of works in which ORLAN engages with biological
            processes, living materials, and biotechnological methods as artistic
            medium.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-10 h-px bg-foreground" />
            <span className="text-caption">{bioArtWorks.length} Results</span>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="border-t border-border pt-12 lg:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-20">
              {bioArtWorks.map((work, i) => (
                <motion.article
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-muted mb-6 flex items-center justify-center">
                    <span className="text-caption text-muted-foreground/40 italic">
                      Image placeholder
                    </span>
                  </div>
                  <h2 className="font-serif text-xl lg:text-2xl tracking-tight mb-2">
                    {work.title}
                  </h2>
                  <p className="text-caption text-muted-foreground mb-3">
                    {work.year} — {work.medium}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.12em] uppercase border border-border px-2 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;

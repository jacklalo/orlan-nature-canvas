import { motion } from "framer-motion";

const exhibitions = [
  { venue: "Centre Georges Pompidou, Paris", year: "1993" },
  { venue: "Sandra Gering Gallery, New York", year: "1993" },
  { venue: "Musée d'Art Moderne de la Ville de Paris", year: "1995" },
  { venue: "Fondation Cartier, Paris", year: "2004" },
  { venue: "The Opening Gallery, New York", year: "2024" },
];

const WorkDetail = () => {
  return (
    <div className="min-h-screen">
      {/* Hero image placeholder */}
      <motion.div
        className="w-full aspect-[16/7] bg-muted flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-caption text-muted-foreground/40 italic">
          Full-width image placeholder
        </span>
      </motion.div>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column — metadata */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-subtitle mb-6">Work</p>
                <h1 className="font-serif text-3xl lg:text-4xl tracking-tight mb-6 leading-tight">
                  The Reincarnation of Saint ORLAN
                </h1>
                <div className="space-y-3 text-caption text-muted-foreground">
                  <div>
                    <span className="text-subtitle text-[10px]">Year</span>
                    <p className="mt-1">1990–1993</p>
                  </div>
                  <div>
                    <span className="text-subtitle text-[10px]">Medium</span>
                    <p className="mt-1">
                      Surgery-performance, video, photography, satellite
                      transmission
                    </p>
                  </div>
                  <div>
                    <span className="text-subtitle text-[10px]">Tags</span>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {["Carnal Art", "Surgery", "Performance", "Identity", "Feminism"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-[0.12em] uppercase border border-border px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column — description */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-subtitle mb-4">Description</h2>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    The Reincarnation of Saint ORLAN is a series of nine
                    surgery-performances conducted between 1990 and 1993. Each
                    operation was conceived as a fully staged artistic event:
                    the operating theater became a performance space, with
                    ORLAN reading philosophical and literary texts during the
                    procedures, which were broadcast live via satellite to
                    galleries and museums around the world.
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed mt-4">
                    The surgeries aimed to transform ORLAN's face by
                    incorporating features drawn from canonical Western
                    artworks—the chin of Botticelli's Venus, the forehead of
                    Leonardo's Mona Lisa, the mouth of Boucher's Europa. The
                    work directly challenged beauty standards, the
                    commodification of the female body, and the limits of
                    self-determination.
                  </p>
                </div>

                <div>
                  <h2 className="text-subtitle mb-4">Context</h2>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    With this series, ORLAN defined Carnal Art (Art Charnel),
                    distinguishing it from Body Art. Where Body Art often
                    involved pain and endurance, Carnal Art used the body as a
                    "modified ready-made"—a site of public debate about the
                    status of the body in society. The work remains one of the
                    most radical and discussed projects in the history of
                    contemporary art.
                  </p>
                </div>

                {/* Exhibitions */}
                <div>
                  <h2 className="text-subtitle mb-4">Selected Exhibitions</h2>
                  <div className="border-t border-border">
                    {exhibitions.map((ex) => (
                      <div
                        key={ex.venue}
                        className="flex justify-between py-3 border-b border-border text-caption text-muted-foreground"
                      >
                        <span>{ex.venue}</span>
                        <span>{ex.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;

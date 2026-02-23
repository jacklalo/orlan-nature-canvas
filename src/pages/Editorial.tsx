import { motion } from "framer-motion";

const relatedWorks = [
  { title: "The Reincarnation of Saint ORLAN", year: "1990–1993" },
  { title: "Self-Hybridizations", year: "1998–2007" },
  { title: "Harlequin Coat", year: "2007–2008" },
  { title: "ORLAN-oïde", year: "2018" },
  { title: "Endangered Species Series", year: "2020–2024" },
];

const references = [
  "ORLAN, \"Carnal Art Manifesto,\" 1990.",
  "Phelan, Peggy. Unmarked: The Politics of Performance. Routledge, 1993.",
  "O'Bryan, C. Jill. Carnal Art: ORLAN's Refacing. University of Minnesota Press, 2005.",
  "Jones, Amelia. Body Art / Performing the Subject. University of Minnesota Press, 1998.",
];

const Editorial = () => {
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
            Editorial Response
          </motion.p>

          <motion.h1
            className="text-display mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ORLAN's Vision of the Body
          </motion.h1>

          {/* Essay */}
          <motion.div
            className="max-w-2xl space-y-6 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-body text-muted-foreground leading-relaxed">
              For ORLAN, the body is neither a given nor a destiny. It is raw
              material — a surface to be sculpted, interrogated, and
              exhibited. Since her earliest performances in the 1960s, ORLAN
              has treated her own flesh as a site of artistic and
              philosophical inquiry, refusing the distinction between self
              and artwork.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              Her surgery-performances of the 1990s made this position
              literal: the operating table became a stage, the scalpel a
              brush, the body an evolving sculpture. ORLAN did not seek
              beauty — she sought to expose and dismantle its mechanisms.
              Each operation incorporated features from canonical Western
              paintings, turning art history into a blueprint for surgical
              transformation.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              This approach extends beyond the surgical. In her
              Self-Hybridizations, ORLAN merged her digitized face with
              masks and sculptures from non-Western cultures, questioning
              the universality of aesthetic ideals. In the Harlequin Coat,
              she cultivated living skin cells from donors of different
              ethnic backgrounds, producing a biological patchwork that
              challenges genetic essentialism.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              More recently, the ORLAN-oïde — a robotic double speaking
              with her voice — raises the question of where the body ends
              and technology begins. ORLAN's trajectory suggests an answer:
              nowhere. The body is always already technological,
              cultural, political. It is never simply "natural."
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="border-l-2 border-foreground pl-8 py-4 mb-20 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-2xl lg:text-3xl leading-snug tracking-tight italic">
              "I have given my body to Art. After my death it shall not
              therefore be given to science, but to a museum."
            </p>
            <cite className="text-caption text-muted-foreground mt-4 block not-italic">
              — ORLAN
            </cite>
          </motion.blockquote>

          {/* Related works */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-subtitle mb-6">Related Works</h2>
            <div className="border-t border-border">
              {relatedWorks.map((w) => (
                <div
                  key={w.title}
                  className="flex justify-between py-3 border-b border-border text-caption text-muted-foreground"
                >
                  <span className="font-serif text-base text-foreground">
                    {w.title}
                  </span>
                  <span>{w.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-subtitle mb-6">References</h2>
            <div className="space-y-2">
              {references.map((ref, i) => (
                <p
                  key={i}
                  className="text-caption text-muted-foreground/70"
                >
                  {ref}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Editorial;

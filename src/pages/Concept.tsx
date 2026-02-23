import { motion } from "framer-motion";

const principles = [
  "The body is a 'modified ready-made.'",
  "Carnal Art is self-portraiture in the classical sense, yet realized with the technology of its time.",
  "Carnal Art is not against cosmetic surgery, but against the standards of beauty it dictates.",
  "Carnal Art does not conceive of pain as redemptive or as a source of purification.",
  "Carnal Art transforms the body into language and reverses the Christian principle of 'the word made flesh.'",
  "Carnal Art is feminist.",
];

const relatedWorks = [
  { title: "The Reincarnation of Saint ORLAN", year: "1990–1993" },
  { title: "Omnipresence (7th Surgery-Performance)", year: "1993" },
  { title: "Self-Hybridizations", year: "1998–2007" },
  { title: "Harlequin Coat", year: "2007–2008" },
  { title: "ORLAN-oïde", year: "2018" },
];

const Concept = () => {
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
            Concept
          </motion.p>

          <motion.h1
            className="text-display mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What Is Carnal Art?
          </motion.h1>

          {/* Explanation */}
          <motion.div
            className="max-w-2xl space-y-6 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-body text-muted-foreground leading-relaxed">
              Carnal Art (Art Charnel) is a term coined by ORLAN in 1990 to
              describe her artistic practice. It positions the artist's own
              body as a site of public debate, using surgical intervention as
              a medium for self-portraiture and cultural interrogation.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              ORLAN distinguishes Carnal Art from Body Art: where Body Art
              often embraced suffering and endurance as aesthetic experience,
              Carnal Art explicitly rejects pain as redemptive. The body is
              treated not as a vessel of transcendence but as a "modified
              ready-made" — raw material to be shaped, questioned, and
              exhibited.
            </p>
          </motion.div>

          {/* Principles */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-subtitle mb-6">Key Principles</h2>
            <div className="border-t border-border">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="py-4 border-b border-border text-body text-muted-foreground"
                >
                  {p}
                </div>
              ))}
            </div>
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
              "My body has become a site of public debate that poses
              crucial questions for our time."
            </p>
            <cite className="text-caption text-muted-foreground mt-4 block not-italic">
              — ORLAN, Carnal Art Manifesto, 1990
            </cite>
          </motion.blockquote>

          {/* Related works */}
          <motion.div
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
        </div>
      </section>
    </div>
  );
};

export default Concept;

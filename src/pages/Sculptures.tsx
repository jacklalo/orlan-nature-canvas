import { motion } from "framer-motion";
import { SculptureCard } from "@/components/SculptureCard";
import { sculpturesData } from "@/data/sculptures";

const Sculptures = () => {
  return (
    <div>
      <main>
        {/* Hero section */}
        <section className="pt-16 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.h1
                className="text-display mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">ORLAN —</span>
                <span className="block text-muted-foreground">Sculptures</span>
              </motion.h1>

              <motion.p
                className="text-body max-w-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From performance objects to bioart installations and robotic avatars, 
                ORLAN's sculptural practice extends her interrogation of the body into 
                three-dimensional space.
              </motion.p>

              <motion.div
                className="mt-12 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-10 h-px bg-foreground" />
                <span className="text-caption">{sculpturesData.length} Works</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
            <div className="border-t border-border pt-16 lg:pt-24">
              <div className="flex flex-col gap-24 lg:gap-32 max-w-3xl">
                {sculpturesData.map((sculpture, index) => (
                  <SculptureCard 
                    key={sculpture.id} 
                    sculpture={sculpture} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sculptures;

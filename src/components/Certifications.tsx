import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  "ISO 9001",
  "IACET",
  "ANSI",
  "NBHEC",
  "AHLA",
  "HCCA",
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Certifications & Accreditations
          </h2>
          <p className="font-body text-muted-foreground">Recognized by leading healthcare organizations worldwide.</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group px-6 py-4 rounded-xl border border-border/50 bg-card grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md cursor-default"
            >
              <span className="font-heading text-lg font-bold text-primary/60 group-hover:text-primary transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

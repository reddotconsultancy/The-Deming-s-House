import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const outcomes = [
  "Develop a new skill.",
  "Move into a non-clinical healthcare role.",
  "Build a career in aesthetic clinic management.",
  "Obtain an international healthcare licence.",
  "Expand your professional visibility.",
  "Build a healthcare brand.",
];

const PromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="promise"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-secondary/30 to-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            The Deming's House Promise
          </span>
          <h2 className="font-heading text-[1.75rem] leading-[1.3] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground max-w-3xl mx-auto px-2">
            We don't just provide a service. We understand the professional behind it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-border/50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-6">
            Whether you are looking to
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {outcomes.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span className="font-body text-[15px] sm:text-base text-foreground/75">{o}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 border-t border-border/40">
            <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed mb-6">
              The Deming's House brings together education, industry experience, licensing knowledge and professional brand strategy under one platform.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {["Learn.", "Navigate.", "Build.", "Grow."].map((word, i) => (
                <span
                  key={i}
                  className="font-heading text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

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
    <section className="py-20 md:py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
          >
            <Award className="w-4 h-4" />
            Accreditations
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Certifications & Accreditations
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Recognized by leading healthcare organizations worldwide.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative"
            >
              <div className="px-8 py-5 rounded-2xl border-2 border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative font-heading text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                  {cert}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

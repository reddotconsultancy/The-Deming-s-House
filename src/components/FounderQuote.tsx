import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FounderQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Card */}
          <div className="bg-primary/5 border-2 border-primary rounded-3xl shadow-[0_20px_50px_rgba(var(--primary),0.15)] relative overflow-hidden">

            <div className="px-6 sm:px-8 md:px-14 py-10 sm:py-12 md:py-16">
              {/* SVG Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <svg width="45" height="40" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9141 48L23.4961 16.9219L23.4961 0L0 0L0 20.3906C0 36.1406 3.16406 45.4219 12.9141 48ZM43.4141 48L54 16.9219L54 0L30.5039 0L30.5039 20.3906C30.5039 36.1406 33.668 45.4219 43.4141 48Z" fill="#a4ded9" />
                </svg>
              </motion.div>

              {/* Quote text */}
              <motion.p
                className="font-body text-base md:text-[17px] text-foreground/80 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                In today's healthcare landscape, patient care goes beyond doctors and nurses, starting the moment
                patients enter a facility. Every touchpoint is vital to enhancing their experience and promoting
                long-term health and satisfaction. At The Deming's House, we prepare our alumni for non-clinical
                roles, equipping them with the skills and empathy to transform patient care through excellence
                and compassion.
              </motion.p>

              {/* Divider line & Attribution */}
              <div className="relative">
                {/* Subtle soft gradient line */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/10" />

                {/* Attribution Content */}
                <motion.div
                  className="relative flex justify-end items-center gap-3 sm:gap-4 bg-primary/5 pl-4 sm:pl-6 ml-auto w-fit"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.55 }}
                >
                  <div className="text-right">
                    <p className="font-heading text-lg font-bold text-foreground">
                      Nusrat Mobin
                    </p>
                    <p className="font-body text-[11px] text-foreground/50 mt-0.5 tracking-widest uppercase font-semibold">
                      Founder
                    </p>
                  </div>

                  {/* Solid Teal Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-heading font-bold text-base tracking-wide">NM</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;

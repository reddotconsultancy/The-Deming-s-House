import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const FounderQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Quote className="w-12 h-12 text-accent/60 mx-auto mb-8" />
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-snug mb-8">
            "Healthcare is not just a profession — it's a calling. We believe that with the right education, 
            anyone can make a meaningful impact on the lives of others."
          </blockquote>
          <div>
            <p className="font-heading text-lg font-semibold text-accent">Dr. Sarah Mitchell</p>
            <p className="font-body text-sm text-primary-foreground/60">Founder & CEO, The Deming's House</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;

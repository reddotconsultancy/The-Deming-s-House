import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const FounderQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-10"
          >
            <div className="relative">
              <Quote className="w-16 h-16 text-accent/40 mx-auto" strokeWidth={1.5} />
              <div className="absolute inset-0 blur-xl bg-accent/20" />
            </div>
          </motion.div>
          
          <motion.blockquote 
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-10 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "Healthcare is not just a profession — it's a calling. We believe that with the right education, 
            anyone can make a meaningful impact on the lives of others."
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block"
          >
            <div className="h-px w-16 bg-accent/50 mx-auto mb-6" />
            <p className="font-heading text-xl font-bold text-accent mb-2">Dr. Sarah Mitchell</p>
            <p className="font-body text-sm text-white/70">Founder & CEO, The Deming's House</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;

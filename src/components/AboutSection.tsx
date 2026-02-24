import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const checklistItems = [
  "High-tech innovative training programs.",
  "Flexible learning options tailored to your needs.",
  "Expert-led and approved courses.",
  "Comprehensive focus on medical tourism and healthcare marketing.",
  "Specialized training in healthcare insurance processes.",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center md:items-stretch">

          {/* ── Far-left: vertical "4 years of excellence" text ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden md:flex items-center flex-shrink-0"
          >
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/40 whitespace-nowrap"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              4 years of excellence
            </span>
          </motion.div>

          {/* ── Left: image stack ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="hidden md:block relative flex-shrink-0 w-[280px] lg:w-[340px]"
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden h-[420px] lg:h-[480px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=900&fit=crop&crop=top&auto=format&q=80"
                alt="Healthcare professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular overlay image – bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop&crop=center&auto=format&q=80"
                alt="Healthcare team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative accent blob */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex-1 pt-2"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="font-semibold text-sm tracking-widest uppercase text-foreground/70">
                About Us
              </span>
              <div className="h-px w-12 bg-foreground/40" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 md:mb-6 pr-2"
            >
              Transforming Healthcare Through Non-Clinical Excellence
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              className="space-y-4 mb-8 pr-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed">
                The Deming's House was founded in 2020 to address the growing need for well-trained non-clinical professionals in healthcare. Our mission is to ensure every patient feels safe and cared for through education and awareness.
              </p>
              <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed">
                We specialize in providing tailored training programs for aspiring and current non-clinical healthcare professionals. By focusing on critical areas such as patient safety, healthcare marketing, medical tourism, and insurance processes, we aim to elevate the standards of non-clinical healthcare roles globally.
              </p>
              <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed">
                Our first official course, launched in 2024, is designed for both fresh graduates and professionals looking to upgrade their skills. With a robust curriculum and a commitment to practical learning, The Deming's House ensures participants are well-prepared to thrive in the dynamic healthcare industry.
              </p>
            </motion.div>

            {/* Checklist */}
            <ul className="space-y-3 pr-2">
              {checklistItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="flex-shrink-0 mt-[3px]">
                    <Check
                      className="w-4 h-4 text-accent"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="font-body text-[15px] sm:text-base text-accent font-medium leading-snug break-words pr-1">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

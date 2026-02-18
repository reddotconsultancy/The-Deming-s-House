import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "ISO-certified training programs",
  "Industry-recognized qualifications",
  "Experienced healthcare professionals",
  "Practical, hands-on learning approach",
  "Flexible learning schedules",
  "Career placement support",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/30 to-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl group">
              <motion.img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=750&fit=crop&auto=format&q=80"
                alt="Healthcare education"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                About The Deming's House
              </h2>
            </motion.div>
            <motion.p 
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We are a premier healthcare education institution dedicated to bridging the gap between 
              non-clinical professionals and the healthcare industry. Our comprehensive training programs 
              are designed by industry veterans who understand the real-world demands of modern healthcare.
            </motion.p>

            <ul className="space-y-4">
              {checklistItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent" strokeWidth={2.5} />
                  </div>
                  <span className="font-body text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
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

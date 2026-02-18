import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ShieldCheck, Plane, Megaphone, GraduationCap, BadgeCheck } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Time-efficient learning modules designed for busy professionals" },
  { icon: ShieldCheck, text: "Comprehensive insurance industry training and compliance" },
  { icon: Plane, text: "Medical tourism management and international healthcare" },
  { icon: Megaphone, text: "Healthcare marketing and patient acquisition strategies" },
  { icon: GraduationCap, text: "Accredited certification upon successful completion" },
  { icon: BadgeCheck, text: "Lifetime access to updated course materials and resources" },
];

const CourseDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="course" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Programs
            </motion.span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Course Details
            </h2>
            <motion.p 
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our flagship healthcare training program is meticulously crafted for non-clinical 
              professionals seeking to enter or advance within the healthcare industry. Whether 
              you're transitioning careers or upskilling, our program equips you with the knowledge 
              and credentials to succeed.
            </motion.p>
            <motion.p 
              className="font-body text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Each module combines theoretical foundations with practical applications, ensuring 
              graduates are immediately effective in their new healthcare roles. Our curriculum 
              is regularly updated to reflect the latest industry developments and regulatory changes.
            </motion.p>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="bg-gradient-to-br from-card via-card to-secondary/50 rounded-2xl p-8 md:p-10 border border-border/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                  What You'll Gain
                </h3>
                <ul className="space-y-5">
                  {benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + i * 0.1,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group cursor-default"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                        <benefit.icon className="w-5 h-5 text-accent" strokeWidth={2.5} />
                      </div>
                      <span className="font-body text-sm md:text-base text-foreground/90 group-hover:text-foreground transition-colors pt-2 leading-relaxed">
                        {benefit.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

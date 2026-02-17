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
    <section id="course" className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Course Details
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Our flagship healthcare training program is meticulously crafted for non-clinical 
              professionals seeking to enter or advance within the healthcare industry. Whether 
              you're transitioning careers or upskilling, our program equips you with the knowledge 
              and credentials to succeed.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Each module combines theoretical foundations with practical applications, ensuring 
              graduates are immediately effective in their new healthcare roles. Our curriculum 
              is regularly updated to reflect the latest industry developments and regulatory changes.
            </p>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                What You'll Gain
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <benefit.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm md:text-base text-foreground/80">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

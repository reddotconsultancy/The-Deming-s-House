import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, Users, Award } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Healthcare Fundamentals",
    description: "Master the core principles of healthcare management, compliance, and patient care coordination.",
  },
  {
    icon: BookOpen,
    title: "Professional Certification",
    description: "Earn industry-recognized certifications that open doors to rewarding healthcare careers.",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description: "Connect with experienced healthcare leaders who guide your professional development journey.",
  },
  {
    icon: Award,
    title: "Continuing Education",
    description: "Stay current with evolving healthcare standards through our advanced training modules.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-2">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg px-2">
            Tailored education programs for aspiring and current non-clinical professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-2 sm:px-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-accent/10 border border-border/50 hover:border-accent/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
              </motion.div>

              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

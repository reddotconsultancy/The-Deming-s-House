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
    <section id="services" className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive healthcare education solutions tailored for aspiring and current non-clinical professionals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

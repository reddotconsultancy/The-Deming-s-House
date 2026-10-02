import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Workflow, Target, LineChart, UserCheck } from "lucide-react";

const reasons = [
  { icon: Gem, title: "Quality", description: "Providing thoughtful and professional guidance." },
  { icon: Workflow, title: "Efficiency", description: "Creating clear and structured processes." },
  { icon: Target, title: "Accuracy", description: "Understanding the individual's requirements before recommending a pathway." },
  { icon: LineChart, title: "Results", description: "Focusing on meaningful outcomes rather than volume." },
  { icon: UserCheck, title: "Personalised Guidance", description: "Every professional comes with a different qualification, experience, ambition and career objective, so the approach is not one-size-fits-all." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Approach
          </motion.span>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-2">
            Quality Over Quantity
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg px-2">
            The Deming's House is not built around a mass-market model. Success is not measured by the number of students, clients or applications handled.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2 sm:px-0">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" strokeWidth={2} />
                </div>
              </motion.div>

              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

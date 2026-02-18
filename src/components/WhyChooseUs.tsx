import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Globe, TrendingUp, Target, Lightbulb, Zap, Star } from "lucide-react";

const reasons = [
  { icon: Shield, title: "ISO Certified", description: "Internationally recognized quality standards in all our programs." },
  { icon: Clock, title: "Flexible Learning", description: "Study at your own pace with our adaptable course schedules." },
  { icon: Globe, title: "Global Recognition", description: "Credentials valued by employers across the healthcare industry." },
  { icon: TrendingUp, title: "Career Growth", description: "Clear pathways to advancement in healthcare management." },
  { icon: Target, title: "Practical Focus", description: "Real-world case studies and hands-on training modules." },
  { icon: Lightbulb, title: "Expert Faculty", description: "Learn from professionals with decades of clinical experience." },
  { icon: Zap, title: "Fast-Track Programs", description: "Accelerated courses designed for working professionals." },
  { icon: Star, title: "Placement Support", description: "Dedicated career services to help you land your ideal role." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
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
            Why Choose Us
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Sets Us Apart
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Discover what makes The Deming's House a leader in healthcare education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 relative overflow-hidden"
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

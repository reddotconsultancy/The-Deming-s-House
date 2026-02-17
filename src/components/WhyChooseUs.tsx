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
    <section id="why-choose-us" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Discover what sets The Deming's House apart as a leader in healthcare education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

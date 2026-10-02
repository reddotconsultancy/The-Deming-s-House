import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Fingerprint, ShieldCheck, Eye, HeartHandshake, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Positioning", desc: "How should you be perceived within your professional field?" },
  { icon: Fingerprint, title: "Brand Identity", desc: "What makes your professional profile distinctive?" },
  { icon: ShieldCheck, title: "Credibility", desc: "How can your experience and expertise be communicated effectively?" },
  { icon: Eye, title: "Visibility", desc: "How can the right audience discover and understand your expertise?" },
  { icon: HeartHandshake, title: "Patient Connection", desc: "How can complex healthcare knowledge be communicated clearly and responsibly?" },
  { icon: TrendingUp, title: "Professional Growth", desc: "How can a strong professional presence support opportunities, referrals, collaborations and career development?" },
];

const services = [
  "Personal brand strategy",
  "Professional positioning",
  "Doctor branding",
  "Dentist branding",
  "Healthcare professional profiles",
  "LinkedIn positioning",
  "Professional biography development",
  "Content strategy",
  "Educational content direction",
  "Thought leadership",
  "Digital presence strategy",
  "Patient communication strategy",
  "Healthcare business branding",
  "Clinic visibility strategy",
];

const MarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="marketing"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-secondary/20 to-white"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              03 — Healthcare Professional Marketing
            </span>
          </div>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 md:mb-6">
            Your Expertise Deserves to Be Seen.
          </h2>
          <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed mb-3">
            Healthcare professionals spend years building knowledge, qualifications and clinical expertise. But expertise alone does not always create visibility.
          </p>
          <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed">
            A strong professional brand can help communicate expertise, establish credibility and create a consistent professional presence. At The Deming's House, we focus specifically on healthcare professional branding and visibility.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-card border border-border/50 rounded-2xl p-6 sm:p-7 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg">
                <p.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services + philosophy */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white border border-border/50 rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 pb-4 border-b border-border/40">
              Our services may include
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {services.map((s, i) => (
                <div key={i} className="flex items-start gap-2.5 font-body text-sm text-foreground/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 bg-primary/5 border border-primary/20 rounded-3xl p-6 sm:p-8"
          >
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Our Philosophy
            </p>
            <p className="font-body text-base text-foreground/75 leading-relaxed">
              Branding is not simply about being seen. It is about being recognised for the right expertise, communicating credibility and building a professional presence that supports long-term growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    initials: "NM",
    name: "Nusrat Mobin",
    role: "Founder — Healthcare Professional Marketing & Brand Strategy",
    note: "Author of \"10X Your Clinic\"",
    bio: "With more than 10 years of experience across healthcare, branding and marketing, Nusrat combines healthcare industry understanding with practical marketing and brand strategy. Having worked within healthcare environments, she understands that healthcare marketing is different from conventional marketing.",
  },
  {
    initials: "MA",
    name: "Mobin Ahmed",
    role: "CEO — Leadership",
    note: "40+ years of experience",
    bio: "Mobin Ahmed brings more than 40 years of experience across administration, legal and financial matters, quality control and organisational operations. He works closely with the team and personally trains and guides them to maintain efficiency, quality and consistency in the services delivered.",
  },
  {
    initials: "A",
    name: "Aisha",
    role: "Course Development & Healthcare Education",
    note: "9+ years of experience",
    bio: "Aisha is a postgraduate healthcare professional with more than 9 years of experience in healthcare and healthcare-related education and course management. She leads course counselling and guidance, helping professionals identify the learning pathway most relevant to their career goals.",
  },
  {
    initials: "S&M",
    name: "Suhaila & Muhammed",
    role: "Healthcare Licensing Specialists",
    note: "20+ years of combined experience",
    bio: "Our licensing division is handled by Suhaila and Muhammed, bringing together more than 20 years of experience in healthcare licensing. They understand licensing from the perspective of healthcare professionals navigating their careers across different countries.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            The Team
          </span>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-2">
            The People Behind The Deming's House
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg px-2">
            Guidance from professionals with real experience across healthcare, education, licensing and brand strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="group flex gap-5 bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                  <span className="text-white font-heading font-bold text-lg tracking-wide">
                    {member.initials}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-body text-sm font-semibold text-accent mb-1">
                  {member.role}
                </p>
                <p className="font-body text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-3">
                  {member.note}
                </p>
                <p className="font-body text-sm text-foreground/65 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counselling approach line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-center text-foreground/60 text-[15px] sm:text-base max-w-2xl mx-auto mt-12"
        >
          We don't believe in selling a course to everyone. We believe in helping the right person choose the right learning pathway.
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;

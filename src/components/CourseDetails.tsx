import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leftItems = [
  {
    title: "Mode of Teaching",
    desc: "Options for online and offline learning based on student preference.",
  },
  {
    title: "For International Students",
    desc: "Visa guidance is provided for students opting for offline learning.",
  },
  {
    title: "Duration",
    desc: "6 months, including practical internship experience.",
  },
];

const uniqueFeatures = [
  {
    title: "Time-Efficient Learning",
    desc: "Complete the program within 6 months, gaining both theoretical knowledge and practical exposure.",
    bullets: [],
    footer: "",
  },
  {
    title: "Comprehensive Insurance Training",
    desc: "",
    bullets: [
      "Check insurance eligibility",
      "Read insurance cards",
      "Understand key healthcare insurance policies used in Gulf countries",
    ],
    footer: "Stand out in group hiring scenarios with specialized insurance skills.",
  },
  {
    title: "Focus on Medical Tourism & Healthcare Marketing",
    desc: "Learn about the booming field of medical tourism and gain expertise in PR and healthcare marketing to meet the growing demand for skilled professionals in these domains.",
    bullets: [],
    footer: "",
  },
];

const CourseDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="course"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-secondary/20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Our Programs
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {/* Main heading */}
            <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 md:mb-6 pr-2">
              Professional Practices in Non-Clinical Roles
            </h2>

            {/* Intro paragraph */}
            <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed mb-10 pr-2">
              This course is tailored to equip students with the knowledge and skills to excel in
              non-clinical healthcare roles, forming the backbone of hospital operations. Gain insights
              into various departments and their functions in just 6 months, including an internship.
            </p>

            {/* Sub-items */}
            <div className="space-y-7">
              {leftItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="group"
                >
                  {/* Animated underline accent */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-accent to-primary" />
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-[15px] sm:text-base text-foreground/60 leading-relaxed pl-3.5 pr-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            {/* Card wrapper */}
            <div className="bg-white border border-border/50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Gradient accent top-right */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl pointer-events-none" />

              <motion.h3
                className="font-heading text-xl md:text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border/40"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What Makes This Course Unique?
              </motion.h3>

              <div className="space-y-8">
                {uniqueFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.4 + i * 0.15 }}
                    className="group"
                  >
                    <h4 className="font-heading text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>

                    {feature.desc && (
                      <p className="font-body text-sm text-foreground/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    )}

                    {feature.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {feature.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 font-body text-sm text-foreground/60">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {feature.footer && (
                      <p className="font-body text-sm text-foreground/55 leading-relaxed mt-3 italic">
                        {feature.footer}
                      </p>
                    )}

                    {/* Divider (except last) */}
                    {i < uniqueFeatures.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

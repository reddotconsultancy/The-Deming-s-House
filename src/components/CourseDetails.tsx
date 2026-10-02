import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const intro = {
  number: "01",
  label: "Skill Development",
  heading: "Learn. Develop. Advance.",
  paragraphs: [
    "Our courses are designed around real healthcare environments and the skills professionals need to progress in today's healthcare industry.",
    "Rather than focusing only on theory, our programs combine healthcare knowledge, practical application and industry experience.",
  ],
};

const courses = [
  {
    title: "Empathy, Resilience & Stress Handling for Nurses",
    subtitle: "4-Week Professional Development Program",
    duration: "4 Weeks",
    description:
      "A focused program designed to help nurses manage the emotional and professional demands of healthcare while maintaining empathy, communication and professional boundaries.",
    areasLabel: "Key areas include",
    areas: [
      "Empathetic patient communication",
      "Managing difficult patient interactions",
      "Emotional resilience",
      "Workplace stress management",
      "Professional boundaries",
      "Compassionate communication",
      "Managing emotionally demanding situations",
      "Building healthier professional coping strategies",
    ],
  },
  {
    title: "Professional Practices in Non-Clinical Roles",
    subtitle: "6-Month Program + 1-Month Internship",
    duration: "6 Months + 1 Month Internship",
    description:
      "A comprehensive program for healthcare professionals who want to understand the non-clinical side of healthcare and develop skills in administration, operations, quality, patient experience and healthcare management.",
    areasLabel: "The program can cover areas such as",
    areas: [
      "Healthcare Administration",
      "Healthcare Operations",
      "Patient Experience",
      "Patient Coordination",
      "Healthcare Quality",
      "Healthcare Communication",
      "Insurance & Revenue Cycle Basics",
      "Team Coordination",
      "Healthcare Marketing",
      "Clinic Operations",
      "KPIs & Performance Management",
      "Professional Practices",
      "Internship / Practical Exposure",
    ],
  },
  {
    title: "Aesthetic Clinic Development & Marketing",
    subtitle: "8-Week Professional Program",
    duration: "8 Weeks",
    description:
      "A practical program designed for professionals interested in the business, operational and marketing side of aesthetic clinics.",
    areasLabel: "Key areas include",
    areas: [
      "Aesthetic clinic operations",
      "Treatment menu development",
      "Patient journey",
      "Consultation processes",
      "Patient conversion",
      "Patient retention",
      "Packages and memberships",
      "Ethical cross-selling and upselling",
      "Lead management",
      "Follow-up strategies",
      "Aesthetic clinic marketing",
      "CRM",
      "Clinic KPIs",
      "Revenue and performance management",
      "Doctor–patient coordinator collaboration",
    ],
  },
];

const CourseDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="courses"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-secondary/20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {intro.number} — {intro.label}
            </span>
          </div>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 md:mb-6">
            {intro.heading}
          </h2>
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="group bg-white border border-border/50 rounded-3xl shadow-xl p-6 sm:p-8 relative overflow-hidden flex flex-col h-full hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              {/* Gradient accent top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl pointer-events-none" />

              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 relative group-hover:text-primary transition-colors duration-300">
                {course.title}
              </h3>
              <p className="font-body text-sm font-semibold text-accent mb-4">
                {course.subtitle}
              </p>
              <p className="font-body text-sm text-foreground/60 leading-relaxed mb-5">
                {course.description}
              </p>

              <p className="font-heading text-xs font-bold uppercase tracking-wider text-foreground/50 mb-3">
                {course.areasLabel}
              </p>
              <ul className="space-y-2 mb-6">
                {course.areas.map((area, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-sm text-foreground/65">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>

              {/* Duration badge */}
              <div className="mt-auto pt-4 border-t border-border/40">
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
                  <Clock className="w-4 h-4" strokeWidth={2.2} />
                  {course.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

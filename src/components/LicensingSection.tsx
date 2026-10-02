import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Stethoscope, Check } from "lucide-react";

const destinations = [
  { region: "United Arab Emirates", authorities: ["DHA", "DOH", "MOHAP"] },
  { region: "GCC", authorities: ["Qatar", "Kuwait", "Oman"] },
];

const professionals = ["Doctors", "Nurses", "Allied Healthcare Professionals"];

const services = [
  "Eligibility assessment",
  "Licensing route guidance",
  "Document checklist",
  "Primary Source Verification guidance",
  "Good Standing requirements",
  "Experience documentation",
  "Application guidance",
  "Examination pathway guidance where applicable",
  "Licensing application support",
  "Renewal guidance",
];

const LicensingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="licensing"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-white"
    >
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
              02 — International Licensing
            </span>
          </div>
          <h2 className="font-heading text-[1.75rem] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 md:mb-6">
            Your Qualification. Your Next Destination.
          </h2>
          <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed mb-3">
            Navigating healthcare licensing can be complicated, particularly when professionals are unfamiliar with the requirements, documentation and processes of a new country.
          </p>
          <p className="font-body text-[15px] sm:text-base text-foreground/65 leading-relaxed">
            The Deming's House provides licensing guidance for healthcare professionals looking to explore opportunities across the UAE and GCC.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left: destinations + professionals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Destinations */}
            <div className="bg-gradient-to-br from-secondary/40 to-white border border-border/50 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-accent" strokeWidth={2.2} />
                <h3 className="font-heading text-lg font-bold text-foreground">Licensing Destinations</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {destinations.map((d, i) => (
                  <div key={i}>
                    <p className="font-heading text-sm font-bold text-primary mb-2">{d.region}</p>
                    <div className="flex flex-wrap gap-2">
                      {d.authorities.map((a, j) => (
                        <span key={j} className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professionals */}
            <div className="bg-gradient-to-br from-secondary/40 to-white border border-border/50 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Stethoscope className="w-5 h-5 text-accent" strokeWidth={2.2} />
                <h3 className="font-heading text-lg font-bold text-foreground">Professionals We Support</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {professionals.map((p, i) => (
                  <span key={i} className="inline-block px-4 py-2 rounded-xl bg-accent/10 text-accent font-body text-sm font-semibold">
                    {p}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-foreground/60 leading-relaxed mt-5">
                Our licensing team helps professionals understand the appropriate route based on their qualification, clinical background, experience and professional category.
              </p>
            </div>
          </motion.div>

          {/* Right: services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="bg-white border border-border/50 rounded-3xl shadow-xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl pointer-events-none" />
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 pb-4 border-b border-border/40">
              Services may include
            </h3>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground/70">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={3} />
                  {s}
                </li>
              ))}
            </ul>

            {/* Approach line */}
            <div className="mt-7 pt-5 border-t border-border/40">
              <p className="font-heading text-sm font-bold text-primary flex flex-wrap items-center gap-2">
                Right Professional
                <span className="text-accent">→</span>
                Right Route
                <span className="text-accent">→</span>
                Right Process
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LicensingSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IsoLogo = () => (
  <svg viewBox="0 0 200 80" className="h-[75px] md:h-[90px] w-auto drop-shadow-sm max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Box with rounded corners */}
    <rect x="5" y="5" width="190" height="70" rx="4" stroke="#102f66" strokeWidth="2.5" fill="#ffffff" />

    {/* Large checkmark */}
    <path d="M-8 45 L15 65 L40 25 L32 20 L15 48 L-2 35 Z" fill="#b0b5be" />

    {/* Text: ISO */}
    <text x="50" y="42" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#102f66">ISO</text>

    {/* Small text box for 9001 and 2015 */}
    <g transform="translate(118, 18)">
      <text x="0" y="10" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="#102f66">9001</text>
      <line x1="0" y1="13" x2="32" y2="13" stroke="#102f66" strokeWidth="1" />
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="#102f66">2015</text>
    </g>

    {/* Vertical divider */}
    <line x1="110" y1="15" x2="110" y2="45" stroke="#102f66" strokeWidth="1" />

    {/* Text: CERTIFIED */}
    <text x="45" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" letterSpacing="1.5" fill="#102f66">CERTIFIED</text>
  </svg>
);

const NcsLogo = () => (
  <svg viewBox="0 0 220 80" className="h-[80px] md:h-[95px] w-auto drop-shadow-sm max-w-[220px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person element */}
    <circle cx="110" cy="18" r="4" fill="#f48625" />
    <path d="M110 24 C 114 24, 117 28, 116 35 C 112 40, 108 40, 104 35 C 103 28, 106 24, 110 24 Z" fill="#f48625" />
    <path d="M116 28 Q 125 32 128 25" fill="none" stroke="#f48625" strokeWidth="3" strokeLinecap="round" />
    <path d="M104 28 Q 95 32 92 38" fill="none" stroke="#f48625" strokeWidth="3" strokeLinecap="round" />

    {/* Elliptical Rings */}
    <ellipse cx="110" cy="45" rx="35" ry="8" fill="none" stroke="#6ca64a" strokeWidth="2.5" />
    <ellipse cx="110" cy="45" rx="25" ry="5" fill="none" stroke="#115d31" strokeWidth="2" />
    <ellipse cx="110" cy="45" rx="15" ry="3" fill="none" stroke="#2a8c4c" strokeWidth="1.5" />

    {/* Text: National Career Service */}
    <text x="110" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#2d3748" textAnchor="middle">
      National Career Service
    </text>

    {/* Subtext */}
    <text x="110" y="75" fontFamily="Arial, sans-serif" fontSize="6.5" fill="#718096" textAnchor="middle">
      सही अवसर, सही समय
    </text>
    <text x="110" y="81" fontFamily="Arial, sans-serif" fontStyle="italic" fontSize="5" fill="#718096" textAnchor="middle" letterSpacing="0.2">
      Right Opportunities, Right Time
    </text>
  </svg>
);


const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        >
          <IsoLogo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        >
          <NcsLogo />
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

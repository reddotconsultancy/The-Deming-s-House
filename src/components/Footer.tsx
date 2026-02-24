import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden selection:bg-accent/40 selection:text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=800&fit=crop&q=80"
          alt="Professional trainer with lanyard"
          className="w-full h-full object-cover opacity-20 filter grayscale transform scale-105"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151724] via-black/85 to-black/70 backdrop-blur-[3px]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // Snappier cubic-bezier
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="h-[1px] w-8 sm:w-12 bg-white/20" />
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase text-white/90">
              Contact Us
            </h3>
            <div className="h-[1px] w-8 sm:w-12 bg-white/20" />
          </div>

          <motion.div
            className="space-y-6 font-body text-white/70 text-base md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="group cursor-pointer flex flex-col items-center gap-1"
            >
              <span className="text-xs tracking-widest uppercase text-white/40 font-semibold">Email</span>
              <a href="mailto:contact_us@thedemingshouse.com" className="hover:text-white hover:text-accent transition-colors duration-300">
                contact_us@thedemingshouse.com
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="group cursor-pointer flex flex-col items-center gap-1"
            >
              <span className="text-xs tracking-widest uppercase text-white/40 font-semibold">Phone</span>
              <a href="tel:+917039499648" className="hover:text-white hover:text-accent transition-colors duration-300">
                +91 7039499648
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="group flex flex-col items-center gap-1"
            >
              <span className="text-xs tracking-widest uppercase text-white/40 font-semibold">Address</span>
              <p className="text-white/80">
                A.M. Residency, 101 - D, Mumbai-10
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 bg-[#1A1C2C] py-5 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm font-body tracking-wide text-center">
            <span className="text-base text-white/40">©</span>
            <p>The Deming's House. All rights reserved.</p>
          </div>

          {/* Right side - Logo + Scroll Button */}
          <div className="flex items-center gap-8">
            {/* AcmeFlare Logo text */}
            <div className="flex flex-col items-end group cursor-pointer">
              <span className="font-heading font-bold text-xl tracking-tight leading-none text-white/90 group-hover:text-white transition-colors duration-300">
                acmeflare
              </span>
              <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] mt-1.5 group-hover:text-accent transition-colors duration-300">
                Monetizing Innovations
              </span>
            </div>

            {/* Scroll To Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
                rotate: isVisible ? 0 : -45
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.4)"
              }}
              whileTap={{ scale: 0.9, y: 0 }}
              className={`hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center bg-transparent backdrop-blur-md cursor-pointer transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] ${!isVisible && 'pointer-events-none'}`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white/80" strokeWidth={1.5} />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

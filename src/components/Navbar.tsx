import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Course", href: "#course" },
  { label: "FAQ's", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);

          const sections = navLinks.map((l) => l.href.slice(1));
          let current = "home";
          const scrollPosition = window.scrollY + 100; // Offset for navbar height

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;

            if (scrollPosition >= elementTop) {
              current = sections[i];
              break;
            }
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navButtons = useMemo(() => {
    return navLinks.map((link) => {
      const active = activeSection === link.href.slice(1);
      return (
        <motion.button
          key={link.href}
          onClick={() => handleClick(link.href)}
          className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${active
            ? "text-white"
            : "text-foreground/70 hover:text-primary"
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {active && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full -z-10 shadow-md"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          {link.label}
        </motion.button>
      );
    });
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg"
        : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 pl-4 pr-6 sm:px-8 lg:px-12 relative">

        {/* Logo */}
        <a href="#home" className="flex items-center justify-center group">
          <motion.img
            src="/1_page-0001-Photoroom.png"
            alt="The Deming's House"
            className="h-16 w-auto md:h-18 lg:h-20 object-contain transition-transform duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-2">
          {navButtons}
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-end">
          <motion.button
            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X className="h-7 w-7 text-foreground" /> : <Menu className="h-7 w-7 text-foreground" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-border shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-3">
              {navLinks.map((link, index) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`py-3 px-5 rounded-lg font-semibold text-left transition-all duration-200 ${active
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                      : "bg-secondary/50 text-foreground hover:bg-secondary hover:shadow-sm"
                      }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

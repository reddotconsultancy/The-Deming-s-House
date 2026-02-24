import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    headline: "Transforming Healthcare Education",
    subheading: "Empowering non-clinical professionals with world-class healthcare training and certification programs.",
    cta: "Explore Our Courses",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&auto=format&q=80"
  },
  {
    headline: "Learn From Industry Experts",
    subheading: "Gain practical skills from seasoned healthcare professionals with decades of real-world experience.",
    cta: "Get Started Today",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1920&h=1080&fit=crop&auto=format&q=80"
  },
  {
    headline: "Your Career in Healthcare Starts Here",
    subheading: "ISO-certified programs designed to fast-track your journey into the healthcare industry.",
    cta: "Discover More",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&h=1080&fit=crop&auto=format&q=80"
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary">

      {/* Background Image with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].headline}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="max-w-4xl mx-auto text-center px-10 sm:px-14 lg:px-20"
            >
              {/* Headline with stagger effect */}
              <motion.h1
                className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[current].headline}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="font-body text-[15px] sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[current].subheading}
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href="#course"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block font-heading font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 py-3 md:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 shadow-xl"
              >
                {slides[current].cta}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prev}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex items-center justify-center absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all duration-300 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </motion.button>
      <motion.button
        onClick={next}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex items-center justify-center absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all duration-300 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </motion.button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-500 ${i === current
              ? "bg-white w-10 shadow-lg shadow-white/50"
              : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

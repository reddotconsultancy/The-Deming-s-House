import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1580281657527-47d1b0e7b33d?auto=format&fit=crop&w=1600&q=80",
      title: "Advanced Healthcare Training",
      description: "State-of-the-art facilities and expert instructors"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-ec7d2f2b01c1?auto=format&fit=crop&w=1600&q=80",
      title: "Professional Medical Education",
      description: "Comprehensive programs for healthcare professionals"
    },
    {
      image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=1600&q=80",
      title: "Healthcare Excellence",
      description: "Leading the future of non-clinical training"
    }
  ];

  const features = [
    "Patient Safety & Quality Improvement",
    "Medical Tourism & Global Healthcare",
    "Healthcare Marketing Strategies",
    "Insurance & Revenue Cycle Expertise"
  ];

  useEffect(() => {
    // Preload images sequentially to find working URLs
    const testImage = new Image();
    testImage.onload = () => {
      console.log("Test image loaded successfully");
      setImagesLoaded(true);
    };
    testImage.onerror = () => {
      console.log("Test image failed, trying alternative...");
      // Try alternative URL format
      testImage.src = "https://images.unsplash.com/photo-155975267-3a682dddeb4?w=1200&h=800&fit=crop&crop=face&auto=format";
    };
    testImage.src = slides[0].image; // Test first image

    gsap.to(imageRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const prevSlide = () =>
    setCurrentSlide((c) => (c - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((c) => (c + 1) % slides.length);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Transforming Healthcare Through{" "}
              <span className="text-blue-600">Non-Clinical Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              We empower the next generation of healthcare professionals with
              industry-focused training, global standards, and real-world skills.
            </motion.p>

            <div className="space-y-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-700">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {imagesLoaded && (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-[480px] object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </AnimatePresence>
              )}

              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:scale-105 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow hover:scale-105 transition"
              >
                <ChevronRight />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide
                        ? "w-10 bg-blue-600"
                        : "w-2 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

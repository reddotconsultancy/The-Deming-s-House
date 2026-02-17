import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is this program designed for?",
    answer: "Our programs are specifically designed for non-clinical professionals looking to enter or advance in the healthcare industry. This includes career changers, administrators, marketing professionals, and anyone passionate about healthcare.",
  },
  {
    question: "What certifications will I receive?",
    answer: "Upon successful completion, you will receive an ISO-certified healthcare education credential recognized by employers across the industry. We also provide continuing education credits applicable to various professional development requirements.",
  },
  {
    question: "How long does the program take to complete?",
    answer: "Our standard program runs for 12 weeks with flexible scheduling options. We offer both full-time intensive tracks and part-time evening/weekend schedules to accommodate working professionals.",
  },
  {
    question: "Is financial assistance available?",
    answer: "Yes, we offer various financial assistance options including payment plans, early-bird discounts, and corporate sponsorship programs. Contact our admissions team for personalized guidance.",
  },
  {
    question: "What career support do you provide?",
    answer: "We provide comprehensive career services including resume review, interview preparation, networking events with healthcare employers, and dedicated placement support for up to 12 months after graduation.",
  },
  {
    question: "Can I study online or is it in-person only?",
    answer: "We offer both online and in-person learning options. Our hybrid model allows you to choose the format that best suits your lifestyle, with live virtual sessions and on-demand recorded content.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Everything you need to know about our programs and enrollment.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-border/50 rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading text-base md:text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

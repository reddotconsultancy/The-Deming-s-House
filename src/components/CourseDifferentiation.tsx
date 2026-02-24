import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
    {
        title: "Time-Efficient Learning:",
        desc: "Our course is carefully tailored and designed to be completed within 6 months, including an internship, ensuring you gain practical experience alongside theoretical knowledge.",
    },
    {
        title: "Comprehensive Insurance Training:",
        desc: "Considering the international market, where a majority of the population uses insurance, we provide specialized training on checking eligibility, reading insurance cards, and understanding more than 10 major healthcare insurance policies used in Gulf countries. This unique skill set will help you stand out in group hiring scenarios.",
    },
    {
        title: "Focus on Medical Tourism and Healthcare Marketing:",
        desc: "With people traveling globally for medical and aesthetic treatments, medical tourism is in high demand. Our course includes a comprehensive module on medical tourism, along with PR and healthcare marketing, equipping you with the expertise to thrive in this growing field.",
    },
];

const CourseDifferentiation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-24 bg-white" ref={ref}>
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <div className="flex flex-col">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                            className="group"
                        >
                            <div className="py-6 md:py-8">
                                <p className="font-body text-base md:text-[17px] leading-relaxed text-foreground/80">
                                    <span className="font-bold text-foreground mr-2">{point.title}</span>
                                    {point.desc}
                                </p>
                            </div>

                            {/* Divider (except for last item) */}
                            {index !== points.length - 1 && (
                                <div className="h-px w-full bg-border/40 transition-colors duration-300 group-hover:bg-accent/20" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseDifferentiation;

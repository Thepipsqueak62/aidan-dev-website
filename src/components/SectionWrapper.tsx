import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {staggerContainer} from "@/lib/animations";


interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.div>
    );
}
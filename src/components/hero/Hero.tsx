import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {fadeIn, fadeUp, staggerContainer} from "@/lib/animations";


export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center pt-14 sm:pt-16 overflow-hidden"
        >
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Soft radial glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                        <Badge variant="secondary" className="text-xs font-mono px-3 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 inline-block animate-pulse" />
                            Available for work
                        </Badge>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-6"
                    >
                        Hi, I'm{" "}
                        <span className="text-primary">Aidan</span>
                        <br />
                        <span className="text-muted-foreground font-light">Fullstack</span>{" "}
                        Developer
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-xl"
                    >
                        I build fast, accessible, and thoughtful web applications — from
                        clean APIs to polished UIs. Focused on delivering real value through
                        well-crafted code.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 mb-12 sm:mb-16"
                    >
                        <Button size="lg" className="w-full xs:w-auto text-sm sm:text-base" asChild>
                            <a href="#projects">View My Work</a>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full xs:w-auto text-sm sm:text-base" asChild>
                            <a href="#contact">Get in Touch</a>
                        </Button>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={fadeIn} className="flex items-center gap-5">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
              Find me on
            </span>
                        <div className="h-px flex-1 max-w-[40px] bg-border" />
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={18} />
                            </motion.a>
                            <motion.a
                                href="mailto:you@example.com"
                                whileHover={{ y: -2 }}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.a
                href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Scroll down"
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ArrowDown size={14} />
                </motion.div>
            </motion.a>
        </section>
    );
}
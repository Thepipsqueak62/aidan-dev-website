"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {SectionWrapper} from "@/components/SectionWrapper";
import {fadeUp, slideInLeft, slideInRight} from "@/lib/animations";




const stats = [
    { value: "3+", label: "Years experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "10+", label: "Happy clients" },
];

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-28 scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <motion.div variants={fadeUp}>
                        <SectionHeading label="About" title="Who I am" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-10 sm:mt-14 items-start">
                        {/* Text */}
                        <motion.div
                            variants={slideInLeft}
                            className="space-y-4 text-muted-foreground leading-relaxed"
                        >
                            <p className="text-base sm:text-lg">
                                I'm a fullstack developer who loves turning complex problems into
                                clean, simple solutions. I work across the entire stack —
                                designing data models, building REST/GraphQL APIs, and crafting
                                responsive UIs that feel great to use.
                            </p>
                            <p className="text-sm sm:text-base">
                                My background spans{" "}
                                <span className="text-foreground font-medium">
                  Node.js, React, TypeScript, and PostgreSQL
                </span>
                                , with a growing interest in distributed systems and developer
                                tooling.
                            </p>
                            <p className="text-sm sm:text-base">
                                Outside of code, I enjoy contributing to open source, writing
                                about software architecture, and endlessly tweaking my terminal
                                setup.
                            </p>

                            {/* Tech pills */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"].map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats card */}
                        <motion.div variants={slideInRight}>
                            <Card className="overflow-hidden">
                                <CardContent className="pt-6 pb-6">
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                        {stats.map((stat, i) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                            >
                                                <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                                                    {stat.value}
                                                </p>
                                                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-tight">
                                                    {stat.label}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <Separator className="my-5" />
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground text-xs font-mono">Location</span>
                                            <span className="font-medium text-sm">Your City · Remote</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground text-xs font-mono">Status</span>
                                            <span className="flex items-center gap-1.5 font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Open to work
                      </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground text-xs font-mono">Focus</span>
                                            <span className="font-medium text-sm">Fullstack / Backend</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}

export function SectionHeading({
                                   label,
                                   title,
                               }: {
    label: string;
    title: string;
}) {
    return (
        <div className="mb-1">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                {label}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
        </div>
    );
}
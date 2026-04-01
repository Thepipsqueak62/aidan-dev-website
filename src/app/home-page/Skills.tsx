"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import { SectionHeading } from "./About";
import {SectionWrapper} from "@/components/SectionWrapper";
import {fadeUp, scaleIn} from "@/lib/animations";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


const skillGroups = [
    {
        category: "Frontend",
        icon: "◈",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: "◎",
        skills: ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
        category: "Database",
        icon: "◉",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
    },
    {
        category: "DevOps & Tooling",
        icon: "◐",
        skills: ["Docker", "GitHub Actions", "Vercel", "AWS", "Linux", "Nginx"],
    },
    {
        category: "Testing",
        icon: "◑",
        skills: ["Vitest", "Jest", "Playwright", "React Testing Library", "Supertest"],
    },
    {
        category: "Other",
        icon: "◒",
        skills: ["Git", "Figma", "Agile", "System Design", "Technical Writing"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-28 scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <motion.div variants={fadeUp}>
                        <SectionHeading label="Skills" title="My tech stack" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-14">
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={group.category}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full hover:shadow-sm transition-shadow">
                                    <CardHeader className="pb-3 pt-5">
                                        <CardTitle className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
                                            <span className="text-primary text-base">{group.icon}</span>
                                            {group.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {group.skills.map((skill, si) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: si * 0.04, duration: 0.3 }}
                                                >
                                                    <Badge variant="secondary" className="text-[11px] sm:text-xs">
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
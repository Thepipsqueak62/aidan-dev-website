"use client"

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "./About";
import {SectionWrapper} from "@/components/SectionWrapper";
import {fadeUp, scaleIn} from "@/lib/animations";
import {useEffect, useState} from "react";
import ProjectsData from "@/app/sanity-querys/projects-data";
import {urlFor} from "@/lib/sanity";





export default function Projects() {
    const [projectsdata,setProjects] = useState<ProjectDataInterface[]>([]);

    useEffect(() => {
        const loadData = async () =>{
            try {
                const newData = await ProjectsData()
                setProjects(newData);
            }
            catch (error){
                console.log("Error Loading Projects:",error);
            }
        }
        loadData();
    }, []);

    return (
        <section id="projects" className="py-20 sm:py-28 scroll-mt-16 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <motion.div variants={fadeUp}>
                        <SectionHeading label="Projects" title="Things I've built" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-10 sm:mt-14">
                        {projectsdata.map((project, i) => (
                            <motion.div
                                key={project.projectTitle}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>


                    <motion.div variants={fadeUp} className="mt-10 text-center">
                        <Button variant="outline" size="sm" asChild>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                            >
                                <FaGithub size={14} />
                                More on GitHub
                            </a>
                        </Button>
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: ProjectDataInterface }) {
    return (
        <Card className="flex flex-col h-full transition-shadow duration-200 hover:shadow-md">
            {project.projectImage && (
                <img
                    src={urlFor(project.projectImage).url()}
                    alt={project.projectTitle}
                    width={500}
                    height={300}
                    className="rounded-t-md object-cover w-full h-48"
                />
            )}
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm sm:text-base">{project.projectTitle}</CardTitle>
                    {project.featured && (
                        <Badge
                            variant="secondary"
                            className="text-[10px] font-mono shrink-0"
                        >
                            Featured
                        </Badge>
                    )}
                </div>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {project.ProjectDescription}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 pb-3">
                <div className="flex flex-wrap gap-1.5">
                    {(project.tags ?? []).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] sm:text-xs font-mono">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-2 pt-0">
                {project.github && (
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={13} className="mr-1.5" />
                            Code
                        </a>
                    </Button>
                )}
                {project.live && (
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={13} className="mr-1.5" />
                            Live
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
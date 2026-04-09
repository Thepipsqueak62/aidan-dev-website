"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, CheckCircle } from "lucide-react";
import {FaDev, FaDiscord, FaGithub, FaLinkedinIn} from "react-icons/fa";

import { SectionHeading } from "./About";
import {SectionWrapper} from "@/components/SectionWrapper";
import {fadeUp, slideInLeft, slideInRight} from "@/lib/animations";

const socials = [
    {
        icon: Mail,
        label: "aidanali0001@gmail.com",
        href: "aidanali0001@gmail.com",
        isReactIcon: false,
    },
    {
        icon: FaGithub,
        label: "https://github.com/Thepipsqueak62",
        href: "https://github.com/Thepipsqueak62",
        isReactIcon: true,
    },
    {
        icon: FaLinkedinIn,
        label: "linkedin.com/in/yourhandle",
        href: "https://linkedin.com",
        isReactIcon: true,
    },
    {
        icon:FaDiscord,
        label: "Add me on Discord",
        href: "https://discord.com/users/1392773662406344764",
    },
    {
        icon: FaDev,
        label: "Dev.To",
        href: "https://dev.to/aidanali",
    }
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async — replace with Resend / Formspree / EmailJS
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 sm:py-28 scroll-mt-16 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <motion.div variants={fadeUp}>
                        <SectionHeading label="Contact" title="Let's talk" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-10 sm:mt-14 items-start">
                        {/* Left */}
                        <motion.div variants={slideInLeft} className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                Whether you have a project in mind, an interesting problem to
                                solve, or just want to connect — my inbox is always open. I
                                typically respond within 24 hours.
                            </p>

                            <div className="space-y-3">
                                {socials.map(({ icon: Icon, label, href, isReactIcon }) => (
                                    <motion.a
                                        key={href}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                    >
                    <span className="w-8 h-8 rounded-md bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                      {isReactIcon ? (
                          <Icon size={14} />
                      ) : (
                          <Icon size={14} />
                      )}
                    </span>
                                        <span className="truncate">{label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: form */}
                        <motion.div variants={slideInRight}>
                            <Card>
                                <CardContent className="pt-6 pb-6">
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10 space-y-3"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                                className="flex justify-center"
                                            >
                                                <CheckCircle className="w-10 h-10 text-green-500" />
                                            </motion.div>
                                            <p className="text-base font-semibold">Message sent!</p>
                                            <p className="text-sm text-muted-foreground">
                                                Thanks for reaching out. I'll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="name" className="text-xs">Name</Label>
                                                    <Input id="name" placeholder="Jane Smith" required className="h-9 text-sm" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="email" className="text-xs">Email</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="jane@example.com"
                                                        required
                                                        className="h-9 text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="subject" className="text-xs">Subject</Label>
                                                <Input id="subject" placeholder="Project inquiry" required className="h-9 text-sm" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="message" className="text-xs">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell me about your project..."
                                                    rows={4}
                                                    required
                                                    className="text-sm resize-none"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                className="w-full gap-2"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                    />
                                                ) : (
                                                    <Send size={14} />
                                                )}
                                                {loading ? "Sending..." : "Send Message"}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
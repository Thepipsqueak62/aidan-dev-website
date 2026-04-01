"use client"


import Hero from "@/components/hero/Hero";
import About from "@/app/home-page/About";
import Projects from "@/app/home-page/Projects";
import Skills from "@/app/home-page/Skills";
import Footer from "@/components/Footer";
import Contact from "@/app/home-page/Contact";

export default function Home() {
    return (
        <div className="pt-14 sm:pt-16">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact/>
            <Footer/>
        </div>
    );
}

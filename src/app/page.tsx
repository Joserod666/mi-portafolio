import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import SkillProgressBars from "@/components/SkillProgressBars";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationCertifications from "@/components/EducationCertifications";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <TechStack />
      <SkillProgressBars />
      <Experience />
      <Projects />
      <EducationCertifications />
      <Footer />
      <ChatWidget />
    </main>
  );
}

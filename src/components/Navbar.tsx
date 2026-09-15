"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Code2, Gauge, Briefcase, FolderGit2, GraduationCap, Mail, User } from "lucide-react";
import { cvData } from "@/data/cvData";

const navItems = [
  { name: "Inicio", href: "#hero", icon: User },
  { name: "Stack Técnico", href: "#stack", icon: Code2 },
  { name: "Conocimientos", href: "#conocimientos", icon: Gauge },
  { name: "Experiencia", href: "#experiencia", icon: Briefcase },
  { name: "Proyectos", href: "#proyectos", icon: FolderGit2 },
  { name: "Educación & Certs", href: "#educacion", icon: GraduationCap },
  { name: "Contacto", href: "#contacto", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080d1a]/85 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg shadow-cyan-950/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-semibold text-lg text-slate-100 tracking-wide"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              GR
            </span>
            <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">
              Gustavo<span className="text-cyan-400 font-light ml-1">Rodríguez</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button: CV Download */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/CV_Gustavo_Completo.pdf"
              download="CV_Gustavo_Rodriguez_Cortes.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 shadow-sm shadow-cyan-500/10 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/CV_Gustavo_Completo.pdf"
              download="CV_Gustavo_Rodriguez_Cortes.pdf"
              className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-medium"
              title="Descargar CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

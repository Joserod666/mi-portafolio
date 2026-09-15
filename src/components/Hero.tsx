"use client";

import { motion } from "framer-motion";
import { Download, Mail, Radio, Phone, MapPin, Sparkles, ChevronRight, Code2, Bot, Cpu } from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/Icons";
import { cvData } from "@/data/cvData";
import Image from "next/image";

export default function Hero() {
  const { profile } = cvData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible para Oportunidades Laborales</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hola, soy <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-400 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                {profile.title}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {profile.bio}
            </p>

            {/* Key Quick Highlight Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{profile.location}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>IA Generativa & RAG</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Angular · TypeScript · Python</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#proyectos"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
              >
                <span>Explorar Proyectos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/CV_Gustavo_Completo.pdf"
                download="CV_Gustavo_Rodriguez_Cortes.pdf"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Descargar CV</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-slate-400 text-xs">
              <span className="font-semibold text-slate-300">Contacto Directo:</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Hero Card with Real Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl glass-card p-6 border border-slate-800/80 shadow-2xl space-y-6">
              {/* Profile Image & Badge Header */}
              <div className="relative group">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Floating Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 space-y-1">
                    <h3 className="text-lg font-bold text-white flex items-center justify-between">
                      <span>{profile.name}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">{profile.title}</p>
                    <p className="text-[11px] text-slate-400">Politécnico Grancolombiano · 2026</p>
                  </div>
                </div>
              </div>

              {/* Capstone Highlight Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Proyecto Destacado Capstone
                  </span>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800">
                    Banco de Bogotá
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Widget de Soporte Inteligente (IA & RAG)
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Asistente embebible con LangChain, ChromaDB, LLaMA 3.1 vía Groq y FastAPI. Reconocido entre las iniciativas destacadas de practicantes del banco.
                </p>
              </div>

              {/* Media Channels Highlight */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={cvData.additionalInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/40 hover:bg-red-950/20 transition-all group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 group-hover:text-red-400">
                    <YoutubeIcon className="w-4 h-4 text-red-500" />
                    <span>YouTube</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">@TecnoCuriosidades</p>
                </a>

                <a
                  href={cvData.additionalInfo.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 group-hover:text-emerald-400">
                    <Radio className="w-4 h-4 text-emerald-500" />
                    <span>Spotify Podcast</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">TecnoCuriosidades</p>
                </a>
              </div>

              {/* Code Snippet Aesthetic Footer */}
              <div className="p-3 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-400 border border-slate-800/60 flex items-center justify-between">
                <span className="text-cyan-400">$ git checkout -b feature/junior-dev</span>
                <span className="text-emerald-400">✓ Ready</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

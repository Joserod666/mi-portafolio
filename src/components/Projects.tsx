"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Radio, Sparkles, X, Code2, Tag, Calendar } from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { cvData, Project } from "@/data/cvData";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portafolio de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos <span className="text-gradient-cyan">Destacados</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Soluciones reales en Inteligencia Artificial Generativa (RAG), desarrollo móvil nativo en Android y difusión de tecnología.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cvData.projects.map((proj, index) => {
            const isCapstone = proj.title.includes("Widget de Soporte");

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card rounded-2xl overflow-hidden border transition-all flex flex-col justify-between group cursor-pointer ${
                  isCapstone
                    ? "border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-950/20"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
                onClick={() => setSelectedProject(proj)}
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-md">
                      {proj.type}
                    </span>
                    {isCapstone && (
                      <span className="px-3 py-1 rounded-full bg-amber-950/90 backdrop-blur-md border border-amber-500/40 text-xs font-bold text-amber-300 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Iniciativa Capstone Banco
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-slate-900/80 text-[11px] font-mono text-slate-300 border border-slate-800">
                    {proj.period}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-2 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* External links */}
                    {proj.links && (
                      <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80 text-xs">
                        {proj.links.youtube && (
                          <a
                            href={proj.links.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 font-medium text-red-400 hover:text-red-300"
                          >
                            <YoutubeIcon className="w-4 h-4" />
                            <span>YouTube</span>
                          </a>
                        )}
                        {proj.links.spotify && (
                          <a
                            href={proj.links.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300"
                          >
                            <Radio className="w-4 h-4" />
                            <span>Spotify Podcast</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel max-w-2xl w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-semibold">
                    {selectedProject.type}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedProject.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    Tecnologías e Integraciones
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.links && (
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4">
                    {selectedProject.links.youtube && (
                      <a
                        href={selectedProject.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-bold hover:bg-red-900/60 transition-colors flex items-center gap-2"
                      >
                        <YoutubeIcon className="w-4 h-4 text-red-500" />
                        Ver en YouTube
                      </a>
                    )}
                    {selectedProject.links.spotify && (
                      <a
                        href={selectedProject.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-900/60 transition-colors flex items-center gap-2"
                      >
                        <Radio className="w-4 h-4 text-emerald-500" />
                        Escuchar Podcast en Spotify
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

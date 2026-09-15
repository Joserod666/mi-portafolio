"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experiencia" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia <span className="text-gradient-cyan">Laboral</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Historial de desarrollo, soporte especializado y liderazgo operativo en entornos altamente exigentes.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {experience.map((exp, index) => {
            const isFeatured = exp.company === "Banco de Bogotá";

            return (
              <motion.div
                key={`${exp.company}-${exp.role}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Timeline Point Badge */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isFeatured
                      ? "bg-cyan-500 border-white shadow-lg shadow-cyan-500/50 scale-125"
                      : "bg-slate-900 border-slate-700 group-hover:border-cyan-400"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isFeatured ? "bg-slate-950" : "bg-cyan-400"
                    }`}
                  />
                </div>

                {/* Date Tag for Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-xs font-semibold text-cyan-400 text-right w-24">
                  {exp.period}
                </div>

                {/* Card Body */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 glass-card border transition-all ${
                    isFeatured
                      ? "border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-900/90 shadow-xl shadow-cyan-950/20"
                      : "border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/50 flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {exp.company}
                        </span>
                        {exp.client && (
                          <span className="text-xs font-medium text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                            Cliente: {exp.client}
                          </span>
                        )}
                        {isFeatured && (
                          <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-md border border-amber-600/40 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Rol Financiero & IA Capstone
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1 md:hidden">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities List */}
                  <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags if available */}
                  {exp.technologies && (
                    <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2">
                      <span className="text-[11px] font-semibold text-slate-400 self-center mr-1">
                        Tech Stack:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Search, Calendar, Building2, CheckCircle, ExternalLink, School } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function EducationCertifications() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertifications = cvData.certifications.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.year.includes(searchTerm)
  );

  return (
    <section id="educacion" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formación & Logros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educación & <span className="text-gradient-cyan">Certificaciones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Grado académico en Ingeniería de Software y formación continua en Inteligencia Artificial, nube y desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <School className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Educación Formativa</h3>
            </div>

            <div className="space-y-4">
              {cvData.education.map((edu, index) => {
                const isDegree = edu.degree.includes("Ingeniería de Software");

                return (
                  <motion.div
                    key={`${edu.degree}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`glass-card rounded-xl p-5 border transition-all ${
                      isDegree
                        ? "border-cyan-500/40 bg-gradient-to-r from-cyan-950/40 to-slate-900/80 shadow-md shadow-cyan-950/20"
                        : "border-slate-800/80"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-base font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-900">
                        {edu.period}
                      </span>
                    </div>

                    {edu.institution && (
                      <p className="text-xs text-slate-300 mt-2 flex items-center gap-1.5 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.institution}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications with Real-time Search */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Licencias & Certificaciones</h3>
                  <p className="text-[11px] text-slate-400">{cvData.certifications.length} certificaciones acreditadas</p>
                </div>
              </div>
            </div>

            {/* Search Input Filter */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por título, emisor (Amazon, Claude, Ubits, Microsoft)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Certifications List */}
            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredCertifications.length > 0 ? (
                filteredCertifications.map((cert, index) => (
                  <motion.div
                    key={`${cert.title}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card rounded-xl p-4 border border-slate-800/80 hover:border-cyan-500/30 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-100 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cert.title}</span>
                      </h4>
                      <p className="text-[11px] text-slate-400 pl-5">
                        Emisor: <span className="text-cyan-300 font-medium">{cert.issuer}</span>
                      </p>
                    </div>

                    <span className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-800 shrink-0">
                      {cert.year}
                    </span>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No se encontraron certificaciones coincidentes.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

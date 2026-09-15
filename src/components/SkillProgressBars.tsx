"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Code2, Database, Cloud, Smartphone, CheckCircle2 } from "lucide-react";
import { cvData } from "@/data/cvData";

const categoryIcons: Record<string, any> = {
  "Frontend": Code2,
  "Backend / DB": Database,
  "IA & Nube": Cloud,
  "Mobile": Smartphone,
};

export default function SkillProgressBars() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Frontend", "Backend / DB", "IA & Nube", "Mobile"];

  const filteredSkills = selectedCategory === "Todos"
    ? cvData.skillProgress
    : cvData.skillProgress.filter((s) => s.category === selectedCategory);

  return (
    <section id="conocimientos" className="py-20 relative bg-slate-950/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Gauge className="w-3.5 h-3.5" />
            <span>Nivel de Dominio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conocimientos & <span className="text-gradient-cyan">Competencias</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Grado de experiencia práctica y aplicación real de tecnologías clave en proyectos financieros, IA y desarrollo móvil.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 scale-105"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => {
            const CategoryIcon = categoryIcons[skill.category] || Code2;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/30 space-y-3"
              >
                {/* Header: Skill name, category badge and percentage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 shadow-sm shadow-cyan-500/50 relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                  </motion.div>
                </div>

                {/* Context Highlight Tag */}
                {skill.highlight && (
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{skill.highlight}</span>
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Database, Cloud, Bot, Smartphone, Kanban, Globe, 
  Terminal, CheckCircle2, Layers
} from "lucide-react";
import { cvData } from "@/data/cvData";

const categoryIcons: Record<string, any> = {
  "Frontend": Code2,
  "Backend / DB": Database,
  "Cloud / DevOps": Cloud,
  "IA / Datos": Bot,
  "Mobile": Smartphone,
  "Metodologías": Kanban,
  "Idiomas": Globe,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...cvData.skills.map((s) => s.category)];

  const filteredSkills = selectedCategory === "Todos"
    ? cvData.skills
    : cvData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack Técnico & <span className="text-gradient-cyan">Herramientas</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tecnologías y metodologías utilizadas en entornos de desarrollo financiero, IA generativa y aplicaciones móviles.
          </p>
        </div>

        {/* Category Filter Tabs */}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((item, index) => {
            const IconComponent = categoryIcons[item.category] || Terminal;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/30 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5 group-hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

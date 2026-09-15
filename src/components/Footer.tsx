"use client";

import { useState } from "react";
import { Mail, Phone, Radio, Copy, Check, Car, ArrowUp, Heart } from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/Icons";
import { cvData } from "@/data/cvData";

export default function Footer() {
  const { profile, additionalInfo } = cvData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative pt-20 pb-12 border-t border-slate-800/80 bg-[#050812]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Contact Banner Header */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800/80 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>¿Conectamos?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Buscas un Ingeniero de Software con <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">enfoque en resultados e innovación?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Estoy disponible para integrarme a equipos de alto rendimiento en desarrollo frontend con Angular, TypeScript, Python o soluciones basadas en Inteligencia Artificial.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? "¡Email Copiado!" : profile.email}</span>
            </button>

            <a
              href={`tel:${profile.phone}`}
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{profile.phone}</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Media Channels Promotion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* YouTube Card */}
          <a
            href={additionalInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-red-500/40 hover:bg-red-950/10 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500">
                <YoutubeIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-900">
                YouTube
              </span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
              TecnoCuriosidades
            </h4>
            <p className="text-xs text-slate-400">
              Canal de divulgación sobre tecnología, desarrollo de software y cultura digital.
            </p>
          </a>

          {/* Spotify Podcast Card */}
          <a
            href={additionalInfo.podcast}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-emerald-950/10 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">
                Spotify Podcast
              </span>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              TecnoCuriosidades Podcast
            </h4>
            <p className="text-xs text-slate-400">
              Episodios semanales explorando tendencias tecnológicas e innovación.
            </p>
          </a>

          {/* Additional Info / Driving License */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                  Información Adicional
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Licencia de Conducir
              </h4>
              <p className="text-xs text-slate-300 font-medium">
                Categoría: <span className="text-cyan-400 font-bold">{additionalInfo.driverLicense}</span>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver Arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Desarrollado con Next.js, TypeScript y Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "José Gustavo Rodríguez Cortés | Ingeniero de Software",
  description:
    "Portafolio profesional de José Gustavo Rodríguez Cortés - Ingeniero de Software graduado del Politécnico Grancolombiano. Experiencia en Banco de Bogotá, Frontend Angular, TypeScript, Python e IA Generativa (RAG).",
  keywords: [
    "José Gustavo Rodríguez Cortés",
    "Ingeniero de Software",
    "Frontend Angular",
    "Full Stack Junior",
    "Banco de Bogotá",
    "Politécnico Grancolombiano",
    "TypeScript",
    "Python",
    "RAG",
    "LangChain",
    "Bogotá Colombia"
  ],
  authors: [{ name: "José Gustavo Rodríguez Cortés" }],
  openGraph: {
    title: "José Gustavo Rodríguez Cortés | Ingeniero de Software",
    description:
      "Portafolio profesional de José Gustavo Rodríguez Cortés. Desarrollador Frontend Angular, Full Stack Junior con proyectos en IA Generativa (RAG) y desarrollo móvil.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}

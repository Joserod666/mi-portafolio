import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { cvData } from "@/data/cvData";

// List of supported Groq models with fallback priority
const GROQ_MODELS = [
  "groq/compound",
  "groq/compound-mini",
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
];

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        role: "assistant",
        content:
          "⚠️ Para habilitar las respuestas en tiempo real con IA, por favor añade tu `GROQ_API_KEY` en el archivo `.env.local` del proyecto.",
      });
    }

    const { messages, message } = await req.json();

    const systemPrompt = `Eres el asistente virtual interactivo con IA de José Gustavo Rodríguez Cortés. Tu objetivo es responder preguntas de reclutadores, líderes técnicos y visitantes sobre la trayectoria, experiencia, habilidades y proyectos de José Gustavo.

INFORMACIÓN OFICIAL Y EXCLUSIVA DEL CV DE JOSÉ GUSTAVO:
${JSON.stringify(cvData)}

REGLAS ESTRICTAS DE RESPUESTA:
1. Responde de forma amable, profesional, precisa y concisa en idioma español.
2. Basar ÚNICAMENTE tus respuestas en la información real contenida arriba. NO inventes empresas, proyectos, tecnologías, fechas ni responsabilidades.
3. Si el usuario pregunta por información, tecnologías o datos que NO están presentes en la Hoja de Vida de José Gustavo, responde amablemente indicando que no cuentas con esa información específica sobre su perfil.
4. Resalta su experiencia destacada como Practicante Empresarial en el Banco de Bogotá (Tribu de Transformación Operativa, proyecto capstone con IA Generativa/RAG) y sus habilidades principales en Angular, TypeScript, Python y RAG cuando sea relevante.`;

    const formattedMessages = Array.isArray(messages) && messages.length > 0
      ? messages
      : [{ role: "user", content: message || "Hola" }];

    const groq = new Groq({ apiKey });

    let completion = null;
    let lastError = null;

    // Try models in order of availability
    for (const modelId of GROQ_MODELS) {
      try {
        completion = await groq.chat.completions.create({
          model: modelId,
          messages: [
            { role: "system", content: systemPrompt },
            ...formattedMessages,
          ],
          temperature: 0.3,
          max_completion_tokens: 600,
        });
        if (completion?.choices[0]?.message?.content) {
          break; // Model succeeded!
        }
      } catch (err: any) {
        console.warn(`Model ${modelId} failed:`, err?.message || err);
        lastError = err;
      }
    }

    if (!completion || !completion.choices[0]?.message?.content) {
      throw lastError || new Error("No available Groq model responded.");
    }

    const reply = completion.choices[0].message.content;

    return NextResponse.json({
      role: "assistant",
      content: reply,
    });
  } catch (error: any) {
    console.error("Error en /api/chat:", error);
    
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "Ocurrió un inconveniente al conectar con el modelo de IA de Groq. Por favor verifica que tu `GROQ_API_KEY` sea válida o inténtalo nuevamente en unos segundos.",
      },
      { status: 500 }
    );
  }
}

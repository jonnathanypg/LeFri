/**
 * server/langfuse.ts — Observabilidad Langfuse (proyecto lefriapp-prod).
 *
 * Registra el LangfuseSpanProcessor de OpenTelemetry para exportar
 * las observaciones creadas en skill-adapter.ts a
 * https://labmonitor.weblifetech.com
 *
 * Sin LANGFUSE_PUBLIC_KEY/SECRET_KEY: no hace nada (no-op) y la app
 * funciona exactamente igual. Importar este módulo al inicio de index.ts.
 */
import path from "path";
import dotenv from "dotenv";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { LangfuseSpanProcessor } from "@langfuse/otel";

// Si las variables vienen vacías (por ejemplo por herencia de shell o PM2), cargar explícitamente desde .env
if (!process.env.LANGFUSE_PUBLIC_KEY || !process.env.LANGFUSE_SECRET_KEY) {
  dotenv.config({ path: path.join(process.cwd(), ".env"), override: true });
}

const hasKeys = Boolean(
  process.env.LANGFUSE_PUBLIC_KEY && process.env.LANGFUSE_SECRET_KEY
);

export let langfuseProcessor: LangfuseSpanProcessor | null = null;
export let langfuseProvider: NodeTracerProvider | null = null;

try {
  if (hasKeys) {
    langfuseProcessor = new LangfuseSpanProcessor();
    langfuseProvider = new NodeTracerProvider({
      spanProcessors: [langfuseProcessor],
    });
    langfuseProvider.register();
    console.log(
      `[Langfuse] tracing activo -> ${process.env.LANGFUSE_BASE_URL || "https://labmonitor.weblifetech.com"}`
    );
  } else {
    console.log("[Langfuse] sin keys: observabilidad desactivada (no-op).");
  }
} catch (err) {
  console.warn("[Langfuse] no se pudo iniciar, se continúa sin trazas:", err);
}

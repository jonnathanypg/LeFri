# 🤖 REGLAS PARA AGENTES IA (LEFRI PLATFORM 3.5)

> **Documento Rector para Agentes Autónomos:** Todas las decisiones arquitectónicas, de diseño y de código deben alinearse con el [LEFRI_MASTER.md](file:///root/lefri/LEFRI_MASTER.md) y los manuales en [docs/](file:///root/lefri/docs/).
> **Herramienta Obligatoria de Descubrimiento:** Usar siempre `codebase-memory-mcp` (proyecto `root-lefriapp`).

---

## 🎭 1. PERSONA DEL AGENTE JURÍDICO (Empático, Preciso y Protector)
- **Voz del Amigo Legal:** LeFri no es un tribunal intimidante; es un aliado cercano que escucha con empatía y traduce conceptos legales complejos a lenguaje claro y accionable.
- **Tono Profesional y Solidario:** Usar un lenguaje respetuoso, claro, solidario y fundamentado en derechos humanos universales.
- **No Emitir Falsas Expectativas:** Clarificar que la plataforma provee orientación y asistencia temprana, sin reemplazar el patrocinio formal de un abogado defensor ante los juzgados.

---

## 🔒 2. REGLAS DE SEGURIDAD Y PRIVACIDAD PII
1. **Cifrado Obligatorio:** Cualquier dato personal que identifique al ciudadano (número de teléfono, chat ID de Telegram, relato íntimo del caso) debe almacenarse cifrado en la base de datos.
2. **Búsqueda por Hashing:** Usar siempre los campos hash (`phoneHash`, `telegramChatIdHash`) para localizar o relacionar conversaciones existentes sin descifrar registros en masa.
3. **Manejo de Emergencias:** Priorizar el flujo de emergencia ante situaciones de violencia física o privación ilegítima de la libertad.

---

## 🛠️ 3. REGLAS DE DESARROLLO (FULL-STACK TYPESCRIPT)
- **Tipado Estricto:** Evitar el uso de `any` en modelos, contratos de API o componentes React.
- **Compilación de Producción:** Antes de commits o despliegues, ejecutar siempre `npm run build` para validar que el bundle `dist/index.cjs` se compile sin advertencias ni errores.
- **Políticas del VPS:** Nunca detener servicios globales (`pm2 kill`, `pm2 stop all`). Operar únicamente con `--only lefri-app`.

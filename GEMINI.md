# 📝 MEMORIA COMPARTIDA (GEMINI) — LEFRI PLATFORM 3.5

Este archivo contiene las directrices de desarrollo, arquitectura y operación del proyecto **LeFri (Legal Friend)** para agentes de IA (Gemini, Claude, GPT).

---

## 🏛️ ARQUITECTURA CORE Y COMPENDIO MAESTRO
- **Compendio Central Unificado:** Todo el detalle de arquitectura, flujo de datos, adaptadores de IA y esquemas de cifrado se encuentra en [LEFRI_MASTER.md](file:///root/lefri/LEFRI_MASTER.md).
- **Biblioteca Modular:** En la carpeta [docs/](file:///root/lefri/docs/) se encuentran los manuales de auditoría, documentación técnica, guía de estilo y el protocolo IAGS.
- **Sistema:** Monolito Full-Stack TypeScript:
  - Frontend: React 18 + Vite + TailwindCSS.
  - Backend: Node.js + Express + Mongoose (MongoDB).
  - WebSockets: Comunicación en tiempo real para chat streaming.
  - WhatsApp: Microservicio desacoplado en `whatsapp-api/` con Baileys.
- **Puerto de Producción:** `8080` (orquestado por PM2 bajo el nombre `lefri-app`).
- **Dominio Oficial:** `https://lefri.fundacionunderlife.org`.
- **Knowledge Graph:** Utilizar siempre `codebase-memory-mcp` (proyecto `root-lefriapp`) para descubrimiento de dependencias y funciones.

---

## 🛠️ REGLAS DE ORO DE DESARROLLO
1. **Idempotencia y Cifrado:** No persistir datos personales en texto plano. Utilizar siempre las utilidades de cifrado del core y generar el hash SHA-256 para búsquedas indexadas.
2. **Failover de IA:** El subsistema de IA utiliza `SkillAdapter` para conmutar dinámicamente entre OpenAI y Google Gemini.
3. **Respeto a Políticas del VPS:** Nunca detener servicios ajenos al proyecto. Al reiniciar o comprobar logs:
   ```bash
   pm2 restart lefri-app
   pm2 logs lefri-app --lines 100
   ```
4. **Sincronización Git Obligatoria:** Tras validar cambios en `main`, sincronizar inmediatamente con `dev`:
   ```bash
   git checkout dev && git merge main && git push origin dev && git checkout main
   ```

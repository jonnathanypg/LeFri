# 🛠️ CLAUDE DEVELOPER MANUAL (LEFRI PLATFORM 3.5)

> **Documentación Centralizada:** Consultar [LEFRI_MASTER.md](file:///root/lefri/LEFRI_MASTER.md) para la visión integral del sistema y [docs/](file:///root/lefri/docs/) para manuales especializados.
> **Herramienta Obligatoria de Descubrimiento:** Usar siempre `codebase-memory-mcp` (proyecto `root-lefriapp`).

---

## 🚀 COMANDOS ESENCIALES DEL SISTEMA

### 🌐 Desarrollo y Compilación Full-Stack (Node.js & Vite)
- **Instalar dependencias:** `npm install`
- **Compilar cliente y servidor para producción:** `npm run build` (genera `dist/index.cjs` y estáticos en `dist/public`)
- **Iniciar en desarrollo:** `npm run dev` (corre en el puerto `8080` con HMR)
- **Verificar tipos TypeScript:** `npm run check` (o `npx tsc --noEmit`)

### ⏱️ Gestión del Servicio PM2 (Producción)
- **Verificar estado:** `pm2 status lefri-app`
- **Reiniciar servicio:** `pm2 restart lefri-app`
- **Ver logs recientes:** `pm2 logs lefri-app --lines 100`

---

## 🤖 COMPORTAMIENTO PARA AGENTES IA
- Adherirse a las directrices de [AGENTS.md](file:///root/lefri/AGENTS.md) y [GEMINI.md](file:///root/lefri/GEMINI.md).
- Respetar el cifrado de datos de identidad ciudadana y el protocolo de emergencias.
- Seguir estrictamente las políticas del VPS (`/root/AGENTS.md`).

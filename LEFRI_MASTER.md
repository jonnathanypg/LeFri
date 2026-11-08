# ⚖️ LEFRI (LEGAL FRIEND): COMPENDIO MAESTRO DE ARQUITECTURA, MULTI-AGENTE JURÍDICO Y JUSTICIA TEMPRANA

> **Documento Canónico Unificado**  
> **Versión del Sistema:** LeFri Platform V3.5 (Producción VPS Ubuntu AMD EPYC, 8 vCPUs, 23 GB RAM)  
> **Fecha de Consolidación:** Noviembre 2026  
> **Arquitectura:** Full-Stack TypeScript (React 18 + Vite / Node.js + Express / Mongoose & MongoDB)  
> **Misión:** Democratización del acceso universal a la justicia temprana, orientación legal empática y defensa de derechos humanos (B2C / Interés Público).  
> **Lanzador Oficial:** **FUNDACIÓN UNDERLIFE** (Soporte Técnico y de Infraestructura: **WEBLIFETECH**).  

---

## 📑 ÍNDICE MAESTRO

1. [Visión Holística, Manifiesto y Propuesta de Valor](#1-visión-holística-manifiesto-y-propuesta-de-valor)
2. [Evolución Histórica y Fases del Proyecto](#2-evolución-histórica-y-fases-del-proyecto)
3. [Topología de Infraestructura, VPS y Orquestación PM2](#3-topología-de-infraestructura-vps-y-orquestación-pm2)
4. [Arquitectura de Red, Dominio y Configuración Nginx](#4-arquitectura-de-red-dominio-y-configuración-nginx)
5. [Capa de Frontend: Cliente React, Vite y UX de Emergencia](#5-capa-de-frontend-cliente-react-vite-y-ux-de-emergencia)
6. [Capa de Backend: Servidor Express, WebSockets y Seguridad](#6-capa-de-backend-servidor-express-websockets-y-seguridad)
7. [Arquitectura de Datos, Cifrado PII y Modelos Mongoose](#7-arquitectura-de-datos-cifrado-pii-y-modelos-mongoose)
8. [Ecosistema Multi-Agente Jurídico y Adaptadores de IA](#8-ecosistema-multi-agente-jurídico-y-adaptadores-de-ia)
9. [Microservicio WhatsApp Voice y Canales Omnicanal](#9-microservicio-whatsapp-voice-y-canales-omnicanal)
10. [Auditoría del Sistema, Deuda Técnica y Bugs Corregidos](#10-auditoría-del-sistema-deuda-técnica-y-bugs-corregidos)
11. [Hoja de Ruta Estratégica: Embajadores de País y MCP Jurídico](#11-hoja-de-ruta-estratégica-embajadores-de-país-y-mcp-jurídico)
12. [Directrices Operativas para Agentes de Desarrollo y Políticas del VPS](#12-directrices-operativas-para-agentes-de-desarrollo-y-políticas-del-vps)
13. [Índice de Documentación Modular Complementaria](#13-índice-de-documentación-modular-complementaria)

---

## 1. VISIÓN HOLÍSTICA, MANIFIESTO Y PROPUESTA DE VALOR

### 1.1 El Manifiesto de LeFri (Legal Friend)
Las leyes y códigos jurídicos suelen ser intimidantes, costosos y redactados en un lenguaje inaccesible. Cuando un ciudadano en situación de vulnerabilidad sufre un despido intempestivo, vulneración de derechos o desalojo injustificado, no necesita de inmediato un litigio costoso: necesita un **"Amigo Legal" (Legal Friend)**. Un aliado comprensivo y confiable que escuche su caso en lenguaje natural, cite la normativa constitucional aplicable y le ofrezca rutas de acción viables y gratuitas.

### 1.2 Pilares de la Plataforma
- **Orientación Jurídica Gratuita e Inmediata:** Respuestas en tiempo real para consultas de derecho laboral, familia, inquilinato, penal básico y garantías constitucionales.
- **Botón de Pánico y Atención de Emergencias:** Flujo prioritario de geolocalización e instrucciones inmediatas ante detenciones arbitrarias, violencia intrafamiliar o desalojos.
- **Acceso Omnicanal:** Disponible vía Web App ([`lefri.fundacionunderlife.org`](https://lefri.fundacionunderlife.org)), WhatsApp y Telegram.
- **Generación Guiada de Documentos:** Creación automatizada de minutas, reclamos formales, peticiones de amparo y cartas de mediación ciudadana en formato PDF listos para firmar.

---

## 2. EVOLUCIÓN HISTÓRICA Y FASES DEL PROYECTO

### 📅 Fase 1: Prototipo Inicial y Pruebas Cloud (Q1 2026)
- Creación de la arquitectura base en Node.js y React.
- Integración inicial con Google Gemini AI y LangChain.
- Implementación del wizard de intake legal con clasificación semántica.

### 📅 Fase 2: Robustecimiento de Cifrado y VPS Migration (Q2-Q3 2026)
- **Eliminación de Dependencia Cloud Run:** Migración completa a infraestructura VPS Contabo autogestionada bajo PM2 y Nginx.
- **Cifrado Criptográfico de Datos Sensibles:** Implementación de encriptación AES en campos PII (`phone`, `telegramChatId`, `summary`) con hashing SHA-256 unidireccional (`phoneHash`) para búsquedas sin descifrado en masa.
- **Desacoplamiento de WhatsApp:** Separación del motor Baileys en `whatsapp-api` para aislar reinicios del core.

### 📅 Fase 3: Estandarización IAGS, Langfuse y Producción (Q4 2026)
- Integración de observabilidad con Langfuse (`server/langfuse.ts`).
- Soporte bilingüe completo (Español / Inglés) con i18n reactivo.
- Unificación de habilidades de agentes en el directorio `skills/`.

---

## 3. TOPOLOGÍA DE INFRAESTRUCTURA, VPS Y ORQUESTACIÓN PM2

### 3.1 Especificaciones de Servidor
- **VPS:** Ubuntu 24.04 LTS (AMD EPYC, 8 vCPUs, 23 GB RAM).
- **Entorno de Ejecución:** Node.js v22.x LTS.
- **Puerto Interno:** `8080` (HTTP y WebSockets).

### 3.2 Proceso PM2 (`ecosystem.config.cjs`)
El proceso en producción corre bajo el nombre estándar **`lefri-app`**:
- **Script:** `dist/index.cjs` (Bundle compilado optimizado con esbuild/vite).
- **Modo:** `fork` con autoreinicio y límite de memoria a `600M`.
- **Variables de Entorno:**
  - `NODE_ENV=production`
  - `PORT=8080`
  - `DEFAULT_LLM_PROVIDER=openai` (Fallback automático a Gemini)
  - `DEFAULT_LLM_MODEL=gpt-4o-mini`

---

## 4. ARQUITECTURA DE RED, DOMINIO Y CONFIGURACIÓN NGINX

Configuración centralizada en `/etc/nginx/sites-available/lefri.fundacionunderlife.org`:
- **Dominio Público:** `https://lefri.fundacionunderlife.org`
- **SSL:** Certificado Let's Encrypt con renovación automática Certbot.
- **Proxy Inverso:**
  - `location /` → Proxy pass a `http://127.0.0.1:8080` con soporte completo de WebSockets (`Upgrade: $http_upgrade`, `Connection: "upgrade"`).
  - Timeouts ampliados a `300s` para respuestas largas de inferencia jurídica.

---

## 5. CAPA DE FRONTEND: CLIENTE REACT, VITE Y UX DE EMERGENCIA

### 5.1 Stack Tecnológico
- **Core:** React 18, TypeScript, Vite.
- **Estilos & UI:** TailwindCSS, Radix UI, Framer Motion (animaciones fluidas), Lucide Icons.
- **Ruteo:** Wouter / React Router unificado.

### 5.2 Vistas Clave
- **Landing Home ([`client/src/pages/landing-home.tsx`](file:///root/lefri/client/src/pages/landing-home.tsx)):** Portada institucional de Fundación Underlife y llamado a la acción.
- **Legal Intake Wizard ([`client/src/components/legal-intake-wizard.tsx`](file:///root/lefri/client/src/components/legal-intake-wizard.tsx)):** Formulario paso a paso que analiza el relato del ciudadano y deriva al agente especialista.
- **Módulo de Emergencia ([`client/src/pages/emergencia.tsx`](file:///root/lefri/client/src/pages/emergencia.tsx)):** Interfaz de alto contraste para situaciones de crisis con captura de geolocalización y números de asistencia directa.

---

## 6. CAPA DE BACKEND: SERVIDOR EXPRESS, WEBSOCKETS Y SEGURIDAD

- **Express Server ([`server/index.ts`](file:///root/lefri/server/index.ts)):** Manejo de sesiones, autenticación Google OAuth, API REST y carga de documentos vía Multer.
- **WebSockets en Tiempo Real:** Canal bidireccional para streaming de respuestas de IA palabra por palabra hacia el chat del cliente.
- **Generación de PDFs Jurídicos:** Puppeteer headless para compilar resoluciones, acuerdos de mediación y cartas formales con membrete oficial.

---

## 7. ARQUITECTURA DE DATOS, CIFRADO PII Y MODELOS MONGOOSE

### 7.1 Esquema de Persistencia
- Base de datos NoSQL MongoDB con esquemas estructurados mediante Mongoose.
- Fallback en memoria (`IStorage` / `MemStorage`) en caso de interrupción del cluster de base de datos.

### 7.2 Protección Criptográfica de Datos
- **Cifrado Transparente:** Los campos de identidad ciudadana (`phone`, `telegramChatId`, `summary`, etc.) se almacenan encriptados con AES.
- **Búsqueda por Hash SHA-256:** Para permitir búsquedas instantáneas y vincular mensajes entrantes de WhatsApp o Telegram sin exponer el PII, se guardan hashes determinísticos:
  - `phoneHash = SHA-256(phone)`
  - `telegramChatIdHash = SHA-256(chatId)`

---

## 8. ECOSISTEMA MULTI-AGENTE JURÍDICO Y ADAPTADORES DE IA

### 8.1 Especialistas Jurídicos (`skills/`)
1. **`Coordinator_Agent.md`:** Triaje inicial, detección de urgencia y enrutamiento hacia el especialista idóneo.
2. **`Legal_Assistant.md`:** Asesor general en derecho laboral, civil, inquilinato y familia.
3. **`Legal_Research_Agent.md`:** Búsqueda y contrastación de códigos orgánicos, jurisprudencia y convenios internacionales.
4. **`Citizen_Mediator_Agent.md`:** Redacción de actas de mediación y propuestas de conciliación extrajudicial.
5. **`Document_Generation_Agent.md`:** Generador de minutas, quejas formales y recursos de protección.
6. **`Emergency_Agent`:** Protocolo de respuesta inmediata ante privación de libertad o violencia.

### 8.2 Adaptador de Modelos (`SkillAdapter`)
- Permite conmutar transparentemente entre **OpenAI (GPT-4o / GPT-4o-mini)** y **Google Gemini (Gemini 2.5 Flash / Pro)** con failover automático si se detecta agotamiento de cuota o latencia excesiva.

---

## 9. MICROSERVICIO WHATSAPP VOICE Y CANALES OMNICANAL

- Microservicio desacoplado en `whatsapp-api/` basado en la librería Baileys.
- Escucha notas de voz y mensajes de texto, procesa la transcripción de audio y se comunica con el servidor Express en el puerto 8080 para devolver orientación legal inmediata directamente a la conversación de WhatsApp del ciudadano.

---

## 10. AUDITORÍA DEL SISTEMA, DEUDA TÉCNICA Y BUGS CORREGIDOS

### 10.1 Problemas Corregidos
- **Duplicación de Usuarios por Cifrado:** Resuelto con la creación de los índices `phoneHash` y `telegramChatIdHash`.
- **Desacoplamiento de Google Cloud Run:** Eliminadas todas las llamadas duras a APIs de GCP; el sistema corre de forma 100% nativa en el VPS.
- **CORS y Headers de WebSocket:** Normalizadas las cabeceras en Nginx y Express para garantizar compatibilidad con dominios cruzados.

### 10.2 Deuda Técnica y Buenas Prácticas
- Mantener la compilación regular del frontend con Vite hacia `dist/` antes de desplegar.
- Limpiar periódicamente la carpeta `uploads/` de archivos temporales de puppeteer.

---

## 11. HOJA DE RUTA ESTRATÉGICA: EMBAJADORES DE PAÍS Y MCP JURÍDICO

- **Embajadores por País:** Adaptación contextualizada de jurisprudencia local para Ecuador, Colombia, Perú, México, España y Estados Unidos.
- **Servidor MCP Jurídico:** Exposición de los prompts legales y bases de conocimiento a través del Model Context Protocol para ser consumidos por IDEs y agentes autónomos.

---

## 12. DIRECTRICES OPERATIVAS PARA AGENTES DE DESARROLLO Y POLÍTICAS DEL VPS

1. **🛡️ Regla de Oro del VPS:** Nunca detener servicios ajenos al proyecto (`pm2 kill`, `pm2 stop all`). Operar siempre con `--only lefri-app`.
2. **Sincronización Git:** Mantener siempre sincronizadas las ramas `dev` y `main`:
   ```bash
   git checkout dev && git merge main && git push origin dev && git checkout main
   ```
3. **Idempotencia y Compilación:** Al realizar cambios en el cliente o servidor, ejecutar `npm run build` para actualizar `dist/index.cjs`.
4. **Codebase Memory MCP:** Usar siempre el proyecto `root-lefriapp` para descubrimiento y trazabilidad de código antes de editar archivos.

---

## 13. ÍNDICE DE DOCUMENTACIÓN MODULAR COMPLEMENTARIA

- 📘 [README.md](file:///root/lefri/README.md) — Manifiesto en inglés, inicio rápido e insignias de proyecto.
- 🇪🇸 [README.es.md](file:///root/lefri/README.es.md) — Manifiesto en español y visión de Fundación Underlife.
- 🤖 [AGENTS.md](file:///root/lefri/AGENTS.md) — Directrices de comportamiento y persona del agente jurídico empático.
- 📝 [GEMINI.md](file:///root/lefri/GEMINI.md) — Memoria compartida, reglas del VPS y stack tecnológico.
- 🛠️ [CLAUDE.md](file:///root/lefri/CLAUDE.md) — Comandos rápidos de compilación, linters y ejecución.
- 📁 [docs/](file:///root/lefri/docs/) — Manuales detallados de auditoría, documentación técnica, guía de estilo y protocolo IAGS.

---
*Fin del Compendio Maestro — LeFri Platform V3.5 — Noviembre 2026*

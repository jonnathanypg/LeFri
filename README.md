# LeFri ⚖️🤝 — Legal Friend
### *Plataforma Global de Orientación Legal, Derechos Ciudadanos y Justicia Temprana con IA*

> **LeFri** *(diminutivo de **Legal Friend**)*: Democratizando el acceso universal a la justicia temprana, orientación legal empática y defensa de derechos humanos.  
> Impulsado por Inteligencia Artificial Multi-Agente, integración constitucional internacional y canales omnicanal (Web, WhatsApp, Telegram, Voz).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Online-success.svg)](https://lefri.fundacionunderlife.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/jonnathanypg/LeFriApp?style=social)](https://github.com/jonnathanypg/LeFriApp)
[![Supported by Weblifetech](https://img.shields.io/badge/Infrastructure%20by-Weblifetech-orange.svg)](https://weblifetech.com)
[![Supported by Underlife](https://img.shields.io/badge/Sponsored%20by-Fundaci%C3%B3n%20Underlife-red.svg)](https://fundacionunderlife.org)

---

## 🌟 Visión e Historia: El Nacimiento de "Legal Friend"

El derecho y las leyes a menudo resultan intimidantes, costosos y redactados en un lenguaje técnico inaccesible. Cuando una persona sufre una vulneración de derechos, un despido intempestivo o una situación de violencia, lo primero que necesita no es un juicio costoso, sino un **"Legal Friend" (un amigo legal)**: alguien de confianza que escuche su caso con empatía, le explique qué dice la ley en palabras sencillas y le señale las rutas de acción posibles.

De esa visión nace **LeFri** *(Legal Friend)*, concebido como una plataforma **Open Source de impacto social** cuyo objetivo es romper estas barreras mediante:
1. **Orientación Legal Gratuita e Instantánea:** Mediador ciudadano asistido por IA multi-agente con búsqueda de reformas en tiempo real (Tavily) y vector stores jurídicos (Pinecone RAG).
2. **Contextualización Constitucional Multi-País:** Conexión nativa con **The Constitute Project API** para comparar artículos, tratados y constituciones de más de 20 naciones.
3. **Botón de Emergencia y Triage Humanitario:** Mecanismo de auxilio ante emergencias graves, ordenado por heaps de prioridad y sincronización offline.
4. **Asistente de Voz y Accesibilidad Universal:** Reconocimiento de voz para ciudadanos con analfabetismo o dificultades de escritura.
5. **Canales Omnicanal Integrados:** Acceso vía Web App, WhatsApp (Baileys) y Telegram Bot.

---

## 🏛️ Respaldado y Financiado por la Comunidad

El despliegue en producción, servidores, infraestructura de red y modelos de IA en línea están financiados y respaldados gracias al compromiso social de:

- **[Fundación Underlife](https://fundacionunderlife.org):** Impulso a proyectos de derechos humanos, asistencia a comunidades vulnerables y acceso a la justicia.
- **[Weblifetech](https://weblifetech.com):** Aportando infraestructura Cloud, servidores VPS de alto rendimiento, microservicios de voz/IA y observabilidad con Langfuse.
- **Liderazgo del Proyecto:** Jonnatan Peña (Ecuador) junto a la comunidad de desarrolladores y juristas independientes.

---

## 🌎 Convocatoria Global: Programa de Embajadores por País

Buscamos expandir **LeFriApp** a todas las naciones del mundo hispanohablante y global. Para lograrlo, abrimos el **Programa de Embajadores y Aliados Internacionales**:

### ¿A quién buscamos?
- **Abogados, Juristas y Estudiantes de Derecho** con vocación social.
- **Universidades y Consultorios Jurídicos Gratuitos**.
- **ONGs de Derechos Humanos y Colectivos de Víctimas**.
- **Desarrolladores y Comunidades Tecnológicas Open Source**.

### Rol del Embajador:
- **Adaptación Normativa:** Alimentar los RAG y prompts de los agentes con los códigos y leyes vigentes de su jurisdicción.
- **Vínculos de Apoyo:** Conectar a abogados pro-bono locales con ciudadanos cuyos casos requieran representación formal.
- **Despliegues Locales:** Difundir la plataforma o coordinar instancias federadas del proyecto.

> 🤝 **¿Te interesa ser Embajador en tu país?**  
> Consulta nuestra guía en [CONTRIBUTING.md](CONTRIBUTING.md) o escríbenos directamente a **[lefri@fundacionunderlife.org](mailto:lefri@fundacionunderlife.org)** con el asunto `[EMBAJADOR LEFRIAPP] - [País]`.

---

## 🏗️ Arquitectura Técnica y Tecnologías

El repositorio está construido bajo una arquitectura modular de alto rendimiento:

- **Frontend:**
  - [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)
  - [i18next](https://www.i18next.com/) (Español, Inglés, Portugués en expansión)
  - TanStack React Query & Framer Motion
- **Backend & Orquestación:**
  - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
  - [Prisma ORM](https://www.prisma.io/) sobre MariaDB / MySQL
  - Multi-Agent Orchestrator: Coordinator, Legal Research, Process Planning, Document Generation, Citizen Mediator.
  - LLM Provider Agnostic: OpenAI (GPT-4o), Google Gemini, Groq (Llama 3.3).
  - Grounding en tiempo real con [Tavily Search API](https://tavily.com/).
  - Base de datos vectorial con [Pinecone](https://www.pinecone.io/).
  - Integración Constitucional con [The Constitute Project](https://www.constituteproject.org/).
- **Omnicanalidad & Servicios:**
  - WhatsApp Business Engine (Baileys Multi-File Auth).
  - Bot de Telegram para alertas de emergencia y soporte.
  - Speech-To-Text vía MediaSuite STT microservice.
  - Observabilidad y trazabilidad de prompts con [Langfuse](https://langfuse.com/) y [LangSmith](https://smith.langchain.com/).

---

## 🚀 Despliegue y Puesta en Marcha Local

### Prerrequisitos
- Node.js >= 20.x
- MariaDB o MySQL >= 8.0
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jonnathanypg/LeFriApp.git
   cd LeFriApp
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   Copia el archivo de variables sanitizadas para la comunidad:
   ```bash
   cp .env.example .env
   ```
   Edita las credenciales básicas (`DATABASE_URL`, claves de IA como `OPENAI_API_KEY` o `GEMINI_API_KEY`).

4. **Inicializar la base de datos:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Iniciar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible de inmediato en `http://localhost:8080`.

---

## 🔒 Privacidad, Ética y Responsabilidad Legal

- **Carácter Informativo:** LeFriApp provee orientación general y educativa en derechos; nunca formula asesoría jurídica formal ni garantiza resultados en procesos judiciales.
- **Minimización de Datos:** La plataforma no recolecta documentos sensibles como números de cuenta, cédulas o datos de menores de edad.
- **Seguridad en Producción:** Sesiones protegidas por tokens cifrados (`express-session` con almacén MySQL), encabezados seguros y validación de tipos con Zod.

---

## 🤝 Cómo Contribuir

¡Las contribuciones de desarrolladores, diseñadores, lingüistas y juristas son el corazón de LeFriApp!  
Por favor lee nuestro [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las pautas de estilo, cómo reportar issues o cómo enviar Pull Requests.

---

## 📄 Licencia

Este proyecto está liberado para el beneficio de la comunidad bajo la licencia **[MIT License](LICENSE)**.

---

<p align="center">
  Hecho con ❤️ para la defensa de los derechos ciudadanos y la justicia social en todo el mundo.<br/>
  <b>Fundación Underlife & Weblifetech</b>
</p>

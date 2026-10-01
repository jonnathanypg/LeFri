# LeFri ⚖️🤝 — Legal Friend
### *Global Open-Source Platform for AI-Powered Legal Guidance, Civic Rights & Early Justice*

<p align="center">
  <b><a href="README.es.md">Leer en Español 🇪🇸</a></b> | <b><a href="#-quick-start">Quick Start</a></b> | <b><a href="#-country-ambassadors-program">Country Ambassadors</a></b> | <b><a href="#-author--lead-architect">Author</a></b>
</p>

> **LeFri** *(short for **Legal Friend**)*: Democratizing universal access to early justice, empathetic legal orientation, and human rights defense.  
> Powered by Multi-Agent Artificial Intelligence, international constitutional intelligence, and omnichannel accessibility (Web, WhatsApp, Telegram, Voice).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Online-success.svg)](https://lefri.fundacionunderlife.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/jonnathanypg/LeFriApp?style=social)](https://github.com/jonnathanypg/LeFriApp)
[![Supported by Weblifetech](https://img.shields.io/badge/Infrastructure%20by-Weblifetech-orange.svg)](https://weblifetech.com)
[![Supported by Underlife](https://img.shields.io/badge/Sponsored%20by-Fundaci%C3%B3n%20Underlife-red.svg)](https://fundacionunderlife.org)

---

## 🌟 Vision & Story: The Birth of "Legal Friend"

Laws and legal codes are often intimidating, cost-prohibitive, and shrouded in inaccessible jargon. When vulnerable citizens face wrongful termination, human rights violations, or family crises, they don't immediately need an expensive lawsuit—they need a **"Legal Friend"**: a trustworthy, empathetic ally that listens in plain language, cites actual statutes, and outlines viable courses of action.

From this vision emerges **LeFri** *(Legal Friend)*, designed as a global **Open Source public-interest platform** to dismantle these barriers through:

1. **Instant, Free Legal Guidance:** Citizen mediator powered by multi-agent AI, real-time statute updates ([Tavily](https://tavily.com/)), and legal vector knowledge ([Pinecone RAG](https://www.pinecone.io/)).
2. **Multi-Country Constitutional Intelligence:** Native integration with **The Constitute Project API** across 20+ Latin American and global jurisdictions.
3. **Emergency Triage & Civic Assistance:** Priority heap dispatching ([`LegalTriageHeap`](server/services/data-structures/triage-heap.ts)) and offline queueing for urgent situations.
4. **Voice Accessibility (Speech-to-Text):** Voice note input ensuring illiterate or low-literacy citizens can access justice without typing.
5. **Omnichannel Messaging:** Direct access via Web App, WhatsApp (Baileys WebSocket engine), and Telegram Bot.

---

## 🏛️ Sponsored & Powered by the Community

Production hosting, cloud VPS compute, AI inference pipelines, and network infrastructure are sponsored and backed by:

- **[Fundación Underlife](https://fundacionunderlife.org):** Championing human rights, community welfare, and access to justice for vulnerable populations.
- **[Weblifetech](https://weblifetech.com):** Providing high-performance Cloud VPS infrastructure, speech/audio microservices, and AI telemetry with Langfuse.
- **Project Leadership:** Jonnatan Peña (Ecuador) in partnership with independent developers and pro-bono jurists worldwide.

---

## 🌎 Global Call: Country Ambassadors Program

We are actively expanding **LeFri (Legal Friend)** to every nation. We invite legal professionals, law faculties, and software engineers to join as **Country Ambassadors**:

### Who We Are Looking For:
- **Lawyers, Jurists & Law Students** passionate about social impact.
- **University Legal Aid Clinics & Pro-Bono Organizations**.
- **Human Rights NGOs & Advocacy Groups**.
- **Open-Source Software Engineers & AI Researchers**.

### Ambassador Responsibilities:
- **Statutory Curation:** Enrich local vector databases and agent prompts with national codes, labor laws, and constitutional jurisprudence.
- **Referral Networks:** Bridge citizens whose cases require court litigation to accredited legal aid clinics and pro-bono attorneys.
- **Local Node Deployments:** Coordinate community instances and local outreach.

> 🤝 **Want to become a Country Ambassador?**  
> Read [CONTRIBUTING.md](CONTRIBUTING.md) or reach out directly to **[jonnathan@fundacionunderlife.org](mailto:jonnathan@fundacionunderlife.org)** with subject `[LEFRI AMBASSADOR] - [Your Country]`.

---

## 🏗️ Technical Architecture & Stack

LeFri is engineered with a high-performance modular stack:

- **Frontend:**
  - [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
  - [i18next](https://www.i18next.com/) (Trilingual: English, Spanish, Portuguese)
  - TanStack React Query & Framer Motion
- **Backend & AI Orchestration:**
  - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
  - [Prisma ORM](https://www.prisma.io/) on MySQL / MariaDB
  - **Multi-Agent Orchestrator:** Coordinator, Legal Research, Process Planning, Document Generation, Citizen Mediator.
  - **Model Agnostic:** OpenAI (GPT-4o), Google Gemini, Groq (Llama 3.3).
  - Grounding via [Tavily Search API](https://tavily.com/) and [Pinecone Vector DB](https://www.pinecone.io/).
  - Comparative constitutional search via [The Constitute Project](https://www.constituteproject.org/).
- **Omnichannel & Infrastructure:**
  - Integrated WhatsApp Engine (Baileys Multi-File Auth).
  - Telegram Emergency Alert Bot.
  - Speech-To-Text via MediaSuite STT engine.
  - LLM Observability & Traceability via [Langfuse](https://langfuse.com/) & [LangSmith](https://smith.langchain.com/).

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js >= 20.x
- MySQL or MariaDB >= 8.0
- npm or pnpm

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jonnathanypg/LeFriApp.git
   cd LeFriApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Add your database connection string (`DATABASE_URL`) and preferred AI keys (`OPENAI_API_KEY`, `GEMINI_API_KEY`, etc.).

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Access the web app at `http://localhost:8080`.

---

## 🔒 Privacy, Ethics & Legal Disclaimer

- **Informative Nature:** LeFri provides educational, civic, and informational guidance. It DOES NOT provide formal legal advice, court representation, nor does it guarantee judicial outcomes.
- **Data Minimization:** The system strictly minimizes data collection and does not store sensitive identity credentials, financial numbers, or minor child information.
- **Enterprise Security:** Encrypted session cookies, TLS endpoints, and Zod runtime schema validation.

---

## 🤝 Contributing

Contributions from developers, legal scholars, translators, and designers are welcome!  
Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for code standards, reporting issues, and submitting Pull Requests.

---

## 👨‍💻 Author & Lead Architect

This project was conceived, designed, and developed by:

<div align="center">
  <h3><b>Jonnatan Peña</b></h3>
  <p><b>Lead Software Engineer & AI Systems Architect</b> · Ecuador 🇪🇨</p>
  <p>
    <a href="https://github.com/jonnathanypg">
      <img src="https://img.shields.io/badge/GitHub-jonnathanypg-181717?style=flat&logo=github" alt="GitHub Profile" />
    </a>
  </p>
  <p><i>Dedicated to leveraging Artificial Intelligence, Open-Source Software, and civic technology to democratize human rights and access to justice globally.</i></p>
</div>

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

---

<p align="center">
  <b>LeFri (Legal Friend)</b> · Crafted with ❤️ for citizen empowerment and human rights defense across the globe.<br/>
  <b>Fundación Underlife & Weblifetech</b>
</p>

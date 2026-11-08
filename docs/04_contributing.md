# 🤝 Contributing & Country Ambassadors Guide

<p align="center">
  <b><a href="CONTRIBUTING.es.md">Guía en Español 🇪🇸</a></b>
</p>

Thank you for your interest in contributing to **LeFri** *(Legal Friend)*! This is an open-source, public-interest initiative sponsored by **Fundación Underlife** and **Weblifetech**, led by **Jonnatan Peña**.

Our mission is to **democratize universal access to legal orientation, early justice, and citizen rights**, serving as a transparent, empathetic AI ally powered by multi-agent architectures, constitutional intelligence, and accessible channels (Web, WhatsApp, Telegram, Voice).

---

## 🌎 Country Ambassadors Network

We are actively recruiting **Country Ambassadors and Partner Organizations** worldwide to localize and deploy **LeFri (Legal Friend)** to national legal frameworks:

### What Does a Country Ambassador Do?
1. **Statutory & Jurisprudential Curation:**
   - Integrate national constitutions, statutory codes, and labor laws into our RAG pipelines (`Pinecone` & `scripts/seed-laws.ts`).
   - Map local human rights agencies, emergency response lines, and pro-bono clinics into the emergency triage engine (`server/services/data-structures/triage-heap.ts`).
2. **Language & Dialect Localization:**
   - Supervise and refine translations under `client/public/locales/[country_code]` and local legal terminology in `LegalConceptTrie`.
3. **Institutional Alliances:**
   - Connect university legal clinics, human rights NGOs, and bar associations.
4. **Local Deployments & Outreach:**
   - Guide community instances and advocate for citizen empowerment.

> 📬 **Apply to Become an Ambassador in Your Country:**  
> Email us directly at **[jonnathan@fundacionunderlife.org](mailto:jonnathan@fundacionunderlife.org)** with subject:  
> `[LEFRI AMBASSADOR] - [Your Country] - [Your Name / Organization]`.

---

## 🛠️ Developer Contribution Workflow

### 1. Environment Setup
1. Fork the repository on GitHub: `https://github.com/jonnathanypg/LeFriApp`
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LeFriApp.git
   cd LeFriApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up development environment:
   ```bash
   cp .env.example .env
   # Edit .env with your local development credentials
   ```
5. Synchronize the database schema (Prisma ORM):
   ```bash
   npx prisma generate
   npx prisma db push
   ```
6. Start development server:
   ```bash
   npm run dev
   ```

### 2. Branches & Commits
- Create a feature branch:
  ```bash
  git checkout -b feature/labor-code-colombia
  # or for fixes
  git checkout -b fix/whatsapp-reconnect
  ```
- Use conventional semantic commits (`feat:`, `fix:`, `docs:`, `i18n:`, `refactor:`).
- Verify TypeScript types before committing:
  ```bash
  npm run check
  ```

### 3. Ethical Principles & Legal Responsibility
Every contribution, prompt, and function must strictly adhere to:
- **Informative Nature:** Agents guide and educate; they never guarantee judicial outcomes nor replace licensed attorneys.
- **Data Minimization:** Never collect, store, or log sensitive government IDs, passwords, financial records, or minors' data.
- **Humanitarian Triage:** Urgent crises (violence, detention) must prioritize official rescue channels and emergency contacts.

---

## 💡 Priority Roadmap
- 🌐 **New Languages & Native Dialects:** Quechua, Guaraní, Aymara, Maya, Portuguese, French.
- 🏛️ **National Constitutional Adapters:** Integration with The Constitute Project and official legal gazettes.
- 🎙️ **Voice Accessibility:** Enhancing speech-to-text accuracy across regional accents.
- 📱 **Omnichannel Resilience:** Offline caching and messaging bot optimizations.

Join us in building accessible justice for everyone! ⚖️🤝

# 🤝 Guía de Contribución y Adopción Internacional en LeFriApp

¡Gracias por tu interés en sumarte a **LeFriApp**! Este es un proyecto **Open Source** con impacto social global, nacido bajo el patrocinio tecnológico y de infraestructura de la **Fundación Underlife** y **Weblifetech**, liderado por **Jonnatan Peña**.

Nuestra misión es **democratizar el acceso a la orientación legal, justicia temprana y derechos ciudadanos a nivel mundial**, combinando modelos de inteligencia artificial multi-agente, datos constitucionales abiertos y canales accesibles (Web, WhatsApp, Telegram, Voz).

---

## 🌎 Red de Embajadores por País (Country Ambassadors)

Estamos en búsqueda activa de **Embajadores y Organizaciones Aliadas** en cada país para adaptar y desplegar LeFriApp a sus marcos normativos específicos:

### ¿Qué hace un Embajador de LeFriApp?
1. **Curaduría Normativa y Jurisdiccional:**
   - Incorporar códigos orgánicos, leyes primarias y constituciones del país en la base de conocimientos RAG (`Pinecone` y `scripts/seed-laws.ts`).
   - Mapear las entidades públicas de auxilio y derechos humanos locales en el servicio de emergencia (`server/services/data-structures/triage-heap.ts`).
2. **Localización de Lenguaje y Dialectos:**
   - Supervisar y enriquecer las traducciones en `client/public/locales/[código_país]` y vocabulario jurídico local en `LegalConceptTrie`.
3. **Alianzas Institucionales:**
   - Vincular consultorios jurídicos gratuitos universitarios, ONGs defensoras de DDHH y colegios de abogados.
4. **Instancias y Despliegues Locales:**
   - Orientar a comunidades que deseen levantar su propio fork o nodo federado de LeFriApp.

> 📬 **¿Quieres ser Embajador en tu país?**  
> Escríbenos a **[lefri@fundacionunderlife.org](mailto:lefri@fundacionunderlife.org)** con el asunto `[EMBAJADOR LEFRIAPP] - [Tu País] - [Tu Nombre/Organización]`.

---

## 🛠️ Cómo Contribuir con Código

### 1. Preparación del Entorno
1. Haz un fork del repositorio en GitHub: `https://github.com/jonnathanypg/LeFriApp`
2. Clona tu bifurcación:
   ```bash
   git clone https://github.com/TU_USUARIO/LeFriApp.git
   cd LeFriApp
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura tus variables de desarrollo:
   ```bash
   cp .env.example .env
   # Edita .env con tus credenciales de desarrollo locales
   ```
5. Sincroniza la base de datos (Prisma ORM):
   ```bash
   npx prisma generate
   npx prisma db push
   ```
6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### 2. Flujo de Ramas y Commits
- Crea una rama descriptiva para tu funcionalidad:
  ```bash
  git checkout -b feature/adaptacion-codigo-laboral-co
  # o para correcciones
  git checkout -b fix/whatsapp-reconnect-issue
  ```
- Usa mensajes de commit semánticos (`feat:`, `fix:`, `docs:`, `i18n:`, `refactor:`).
- Asegúrate de verificar los tipos y calidad antes de enviar:
  ```bash
  npm run check
  ```

### 3. Principios de Ética y Responsabilidad Legal de la IA
Todo código, prompt de agente o función que se añada a LeFriApp debe cumplir rigurosamente con:
- **Naturaleza Informativa:** Los agentes de IA nunca garantizan resultados legales ni reemplazan formalmente al abogado habilitado; guían al ciudadano en sus derechos y rutas de acción.
- **Minimización de Datos:** Jamás registrar o almacenar innecesariamente documentos de identidad personales, contraseñas o datos de menores.
- **Triage Humanitario:** En situaciones de violencia o riesgo inminente, el sistema debe priorizar el auxilio inmediato y canales de emergencia.

---

## 💡 Áreas Prioritarias de Contribución
- 🌐 **Nuevos Idiomas y Lenguas Nativas:** Traducción a Quechua, Guaraní, Aymara, Maya, Portugués, Francés.
- 🏛️ **Adaptadores Jurídicos por País:** Soporte profundo con The Constitute Project y gacetas oficiales de cada nación.
- 🎙️ **Accesibilidad y Voz:** Optimización del reconocimiento de voz en dialectos regionales.
- 📱 **Canales Omnicanal:** Mejoras en la resiliencia de bots de WhatsApp y Telegram para personas de bajos recursos y sin conectividad continua.

¡Tu aporte construye justicia accesible para miles de personas! ⚖️🤝

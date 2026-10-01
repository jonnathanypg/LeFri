export interface HomeContent {
  brandTagline: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroText1: string;
  heroText2: string;
  btnKnowRights: string;
  btnExploreConstitution: string;
  signIn: string;
  stats: {
    articlesVal: string;
    articlesLbl: string;
    plainVal: string;
    plainLbl: string;
    freeVal: string;
    freeLbl: string;
    stepVal: string;
    stepLbl: string;
  };
  knowRightsBadge: string;
  knowRightsTitle: string;
  knowRightsP1: string;
  knowRightsP2Start: string;
  knowRightsP2Accent: string;
  missionBadge: string;
  missionTitle: string;
  missionP1: string;
  missionP2: string;
  missionCallout: string;
  missionP3: string;
  howBadge: string;
  howTitle: string;
  howSubtitle: string;
  steps: Array<{
    stepNumber: string;
    title: string;
    desc: string;
    actionText?: string;
    badgeText?: string;
  }>;
  toolsBadge: string;
  toolsTitle: string;
  tools: Array<{
    title: string;
    desc: string;
    btnText: string;
    disclaimer?: string;
  }>;
  urgencyTitle: string;
  urgencyDesc: string;
  urgencyBtn: string;
  actionBadge: string;
  actionTitle: string;
  actionSubtitle: string;
  actionQuestions: string[];
  actionFlow: string;
  dailyBadge: string;
  dailyTitle: string;
  dailySubtitle: string;
  dailyAreas: Array<{
    title: string;
    desc: string;
  }>;
  dailyBtnAll: string;
  cohesionBadge: string;
  cohesionTitle: string;
  cohesionP1: string;
  cohesionP2: string;
  cohesionPoints: string[];
  cohesionCallout: string;
  justiceBadge: string;
  justiceTitle: string;
  justiceQuote: string;
  justiceP1: string;
  justiceCallout: string;
  justiceP2: string;
  techBadge: string;
  techTitle: string;
  techSubtitle: string;
  techPrinciples: Array<{
    title: string;
    desc: string;
  }>;
  jurisdictionBadge: string;
  jurisdictionTitle: string;
  jurisdictionSubtitle: string;
  jurisdictionMainBadge: string;
  jurisdictionMainTitle: string;
  jurisdictionMainDesc: string;
  jurisdictionNextBadge: string;
  jurisdictionNextTitle: string;
  jurisdictionNextDesc: string;
  jurisdictionMotto: string;
  accessBadge: string;
  accessTitle: string;
  accessSubtitle: string;
  accessPoints: string[];
  accessNote: string;
  audienceBadge: string;
  audienceTitle: string;
  audienceP1: string;
  audienceComplementaryTitle: string;
  audienceList: string[];
  approachBadge: string;
  approachTitle: string;
  approachSubtitle: string;
  approachElements: Array<{
    title: string;
    desc: string;
  }>;
  approachFooter: string;
  impactBadge: string;
  impactTitle: string;
  impactSubtitle: string;
  impactList: string[];
  impactFooter: string;
  ecuadorBadge: string;
  ecuadorTitle: string;
  ecuadorP1: string;
  ecuadorP2: string;
  ecuadorCardTitle: string;
  ecuadorCardDesc: string;
  alliancesBadge: string;
  alliancesTitle: string;
  alliancesSubtitle: string;
  alliancesList: string[];
  alliancesFooter: string;
  alliancesBtn: string;
  collabBadge: string;
  collabTitle: string;
  collabP1: string;
  collabP2: string;
  collabTags: string[];
  collabBtnWant: string;
  collabBtnSupport: string;
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
    isImportant?: boolean;
  }>;
  ctaFinalBadge: string;
  ctaFinalTitle: string;
  ctaFinalP1: string;
  ctaFinalBold: string;
  footerBrandSubtitle: string;
  footerInitiative: string;
  footerUnderlife: string;
  footerDisclaimerTitle: string;
  footerDisclaimerText: string;
}

export const homeTranslations: Record<'es' | 'en' | 'pt', HomeContent> = {
  es: {
    brandTagline: "Educación cívica, orientación inicial y acceso a derechos",
    heroBadge: "Educación Cívica · Orientación Inicial · Acceso a Derechos",
    heroTitle1: "Entiende tus derechos.",
    heroTitle2: "Comprende tu situación. Sabe qué hacer.",
    heroSubtitle: "Educación cívica, orientación inicial y acceso comprensible a derechos para todas las personas.",
    heroText1: "Las leyes y la Constitución pertenecen a toda la ciudadanía, pero su lenguaje técnico puede convertirse en una barrera para quienes necesitan comprenderlas con mayor urgencia.",
    heroText2: "LeFri transforma información jurídica compleja en explicaciones claras, herramientas prácticas y rutas comprensibles para que puedas conocer tus derechos, identificar una posible vulneración y saber cuál puede ser tu siguiente paso.",
    btnKnowRights: "Conocer mis derechos",
    btnExploreConstitution: "Explorar la Constitución",
    signIn: "Ingresar",
    stats: {
      articlesVal: "+400",
      articlesLbl: "Artículos y disposiciones explicados",
      plainVal: "100%",
      plainLbl: "Lenguaje ciudadano",
      freeVal: "Gratuito",
      freeLbl: "Acceso para todas las personas",
      stepVal: "Paso a paso",
      stepLbl: "Explicaciones y orientación comprensible"
    },
    knowRightsBadge: "Conoce tus derechos",
    knowRightsTitle: "La ley puede ser compleja. Tus derechos no deberían serlo.",
    knowRightsP1: "No necesitas ser abogado para entender qué dice la Constitución. LeFri utiliza lenguaje ciudadano, explicaciones sencillas y herramientas digitales para acercar los derechos fundamentales a la vida cotidiana.",
    knowRightsP2Start: "Porque conocer un derecho es importante. ",
    knowRightsP2Accent: "Comprenderlo es el primer paso para poder ejercerlo.",
    missionBadge: "Nuestra Misión",
    missionTitle: "Reducir la distancia entre las personas y sus derechos",
    missionP1: "Las normas que protegen nuestra dignidad, nuestro trabajo, nuestra familia, nuestra libertad y nuestra igualdad existen para toda la sociedad.",
    missionP2: "Sin embargo, la complejidad del lenguaje jurídico, la falta de información y la dificultad para identificar qué hacer pueden convertirse en barreras para ejercer esos derechos.",
    missionCallout: "LeFri nace para reducir esa distancia. Nuestro propósito es acercar el conocimiento constitucional y la orientación inicial a las personas mediante tecnología comprensible, gratuita y centrada en el ciudadano.",
    missionP3: "No se trata solamente de mostrar información. Se trata de ayudar a una persona a comprender, identificar y actuar de manera informada.",
    howBadge: "¿Cómo te ayuda LeFri?",
    howTitle: "Del desconocimiento a la comprensión",
    howSubtitle: "LeFri organiza la información jurídica para que puedas avanzar paso a paso.",
    steps: [
      {
        stepNumber: "PASO 01",
        title: "Cuéntanos tu situación",
        desc: "Describe tu duda utilizando tus propias palabras. No necesitas conocer términos jurídicos ni saber qué artículo corresponde a tu problema.",
        actionText: "Consultar ahora"
      },
      {
        stepNumber: "PASO 02",
        title: "Identifica tus derechos",
        desc: "LeFri te ayuda a relacionar tu situación con principios, derechos y disposiciones constitucionales relevantes en un lenguaje pensado para ciudadanos.",
        actionText: "Explorar derechos"
      },
      {
        stepNumber: "PASO 03",
        title: "Comprende qué significa",
        desc: "Una norma puede ser difícil de interpretar con lenguaje técnico. Explicamos conceptos jurídicos complejos mediante lenguaje claro, contexto y ejemplos cotidianos.",
        actionText: "Entender conceptos"
      },
      {
        stepNumber: "PASO 04",
        title: "Conoce tus siguientes pasos",
        desc: "Cuando corresponda, te orientamos sobre qué acciones, documentos, instituciones o vías de atención pueden estar relacionadas con tu situación.",
        badgeText: "La herramienta orienta. La decisión sigue siendo tuya."
      }
    ],
    toolsBadge: "Herramientas",
    toolsTitle: "Una plataforma diseñada para convertir información en comprensión",
    tools: [
      {
        title: "La Constitución explicada",
        desc: "Explora la Constitución artículo por artículo. Comprende qué establece, qué derechos reconoce y cómo puede relacionarse con situaciones de la vida cotidiana.",
        btnText: "Explorar la Constitución"
      },
      {
        title: "Consulta de derechos",
        desc: "Escribe una pregunta o describe una situación con tus propias palabras. LeFri identifica temas jurídicos relevantes y te ayuda a comprender qué derechos podrían estar relacionados con tu caso.",
        btnText: "Hacer una consulta"
      },
      {
        title: "Triaje y orientación inicial",
        desc: "No todas las situaciones requieren el mismo camino. LeFri ayuda a organizar inicialmente una consulta para identificar su naturaleza y mostrar información y posibles rutas de acción relacionadas.",
        btnText: "Analizar mi situación"
      },
      {
        title: "Explicación ciudadana",
        desc: "Los textos jurídicos pueden contener conceptos difíciles incluso para personas con experiencia. LeFri transforma conceptos y disposiciones complejas en explicaciones más accesibles.",
        btnText: "Entender un concepto"
      },
      {
        title: "Documentos y guías",
        desc: "Cuando una situación requiere presentar una solicitud, reclamo o documento, LeFri puede proporcionar orientación sobre su estructura y contenido básico según las herramientas disponibles.",
        btnText: "Explorar documentos",
        disclaimer: "* Los documentos deben revisarse y adaptarse a las circunstancias concretas antes de ser utilizados."
      },
      {
        title: "Seguimiento de procesos",
        desc: "Guarda consultas y continúa explorando una situación sin perder el contexto de lo que ya has revisado en la plataforma.",
        btnText: "Mis procesos"
      }
    ],
    urgencyTitle: "Orientación para situaciones urgentes",
    urgencyDesc: "Cuando una situación presenta características de emergencia o riesgo, la prioridad no es obtener una explicación extensa: es identificar rápidamente una vía adecuada de ayuda. LeFri puede presentar información de emergencia y orientar hacia servicios o contactos pertinentes.",
    urgencyBtn: "Ver opciones de emergencia",
    actionBadge: "De la información a la acción",
    actionTitle: "Saber qué dice la ley es importante. Saber qué hacer después también.",
    actionSubtitle: "Muchas personas no necesitan comenzar con una explicación de cientos de páginas. Necesitan una respuesta comprensible a preguntas sencillas:",
    actionQuestions: [
      "¿Qué está pasando?",
      "¿Qué derecho aplica?",
      "¿Qué significa la norma?",
      "¿Qué opciones existen?",
      "¿A quién acudir?"
    ],
    actionFlow: "Comprender → Identificar → Decidir → Buscar ayuda adecuada",
    dailyBadge: "Derechos en la vida cotidiana",
    dailyTitle: "Tus derechos no existen solamente en los libros",
    dailySubtitle: "La Constitución y las leyes tienen relación con situaciones que pueden aparecer todos los días.",
    dailyAreas: [
      { title: "Trabajo", desc: "Comprende principios y derechos relacionados con el trabajo, remuneración, igualdad, seguridad social y protección laboral." },
      { title: "Salud", desc: "Conoce los principios constitucionales relacionados con la protección de la salud y el acceso a servicios." },
      { title: "Familia", desc: "Comprende derechos, garantías y principios relacionados con la vida familiar y la protección de sus integrantes." },
      { title: "Vivienda", desc: "Explora las disposiciones relacionadas con vivienda, dignidad y condiciones de vida adecuadas." },
      { title: "Igualdad y no discriminación", desc: "Comprende los principios de igualdad y las garantías frente a situaciones de discriminación." },
      { title: "Personas con discapacidad", desc: "Consulta información relacionada con derechos específicos, igualdad de oportunidades, inclusión y protección." },
      { title: "Libertad y privacidad", desc: "Comprende las garantías constitucionales relacionadas con libertad personal, intimidad y protección de la vida privada." },
      { title: "Participación ciudadana", desc: "Conoce las bases constitucionales sobre participación, ejercicio democrático, ciudadanía y relación con las instituciones." }
    ],
    dailyBtnAll: "Explorar todos los derechos",
    cohesionBadge: "Cohesión Social",
    cohesionTitle: "Una sociedad que conoce sus derechos también puede participar mejor en la vida de su comunidad",
    cohesionP1: "La cohesión social se construye cuando las personas pueden participar, relacionarse, resolver conflictos de manera pacífica y confiar en mecanismos e instituciones capaces de responder a sus necesidades. El desconocimiento puede aumentar la distancia entre ciudadanos, instituciones y comunidades.",
    cohesionP2: "Por eso, LeFri busca contribuir a una ciudadanía con mayor capacidad para:",
    cohesionPoints: [
      "Comprender sus derechos.",
      "Reconocer situaciones que pueden requerir atención.",
      "Participar de manera informada.",
      "Buscar soluciones por vías adecuadas.",
      "Acceder a servicios y asistencia cuando sea necesario."
    ],
    cohesionCallout: "El acceso comprensible a la información jurídica no resuelve por sí solo los problemas sociales. Pero puede reducir una barrera importante para la participación y el ejercicio de derechos.",
    justiceBadge: "Acceso a la Justicia",
    justiceTitle: "La primera barrera puede ser no saber por dónde empezar",
    justiceQuote: "“¿Qué hago?”",
    justiceP1: "Para muchas personas, buscar ayuda legal puede comenzar con esa pregunta muy básica. LeFri busca facilitar ese primer paso mediante información comprensible, orientación inicial y herramientas digitales.",
    justiceCallout: "Cuando un caso requiere asesoría, representación o intervención profesional, la plataforma debe servir como punto de orientación y no como sustituto de un abogado, defensor público u otra autoridad competente.",
    justiceP2: "Comprender mejor una situación puede ayudar a una persona a buscar la ayuda adecuada con mayor claridad.",
    techBadge: "Tecnología con Responsabilidad",
    techTitle: "Innovar también significa proteger",
    techSubtitle: "LeFri utiliza tecnología e inteligencia artificial para facilitar el acceso a información y orientación. Pero la tecnología no debe sustituir los derechos, la privacidad ni el criterio humano. Por eso trabajamos bajo estos principios:",
    techPrinciples: [
      { title: "Claridad", desc: "La información debe ser comprensible para el ciudadano, sin tecnicismos innecesarios." },
      { title: "Privacidad", desc: "Los datos personales deben tratarse bajo rigurosos principios de protección, seguridad y cifrado." },
      { title: "Transparencia", desc: "El usuario debe comprender qué puede y qué no puede hacer la plataforma con total honestidad." },
      { title: "Responsabilidad", desc: "La herramienta orienta pero no sustituye la representación ni la asesoría jurídica profesional." },
      { title: "Inclusión", desc: "El acceso a la información debe considerar distintas capacidades, niveles educativos y barreras de comprensión." },
      { title: "Actualización", desc: "La información jurídica debe poder revisarse y actualizarse continuamente cuando cambien las normas aplicables." }
    ],
    jurisdictionBadge: "Información y Jurisdicción",
    jurisdictionTitle: "Cada país tiene sus propias leyes",
    jurisdictionSubtitle: "Los derechos fundamentales pueden compartir principios comunes, pero cada país posee su propia Constitución, legislación, instituciones y procedimientos. Por eso, LeFri utiliza una arquitectura preparada para incorporar módulos jurídicos específicos por jurisdicción.",
    jurisdictionMainBadge: "Jurisdicción principal",
    jurisdictionMainTitle: "Ecuador",
    jurisdictionMainDesc: "Constitución, derechos fundamentales, mecanismos constitucionales y orientación adaptada al contexto institucional ecuatoriano.",
    jurisdictionNextBadge: "Próximas jurisdicciones",
    jurisdictionNextTitle: "Perú · Colombia · Brasil · Más",
    jurisdictionNextDesc: "La arquitectura de LeFri está diseñada para permitir futuras adaptaciones regionales mediante módulos jurídicos específicos por país.",
    jurisdictionMotto: "Una plataforma. Diferentes jurisdicciones. Contenido adaptado a cada realidad.",
    accessBadge: "Accesibilidad",
    accessTitle: "Tecnología que busca hablar el lenguaje de la ciudadanía",
    accessSubtitle: "LeFri está diseñada para reducir barreras de comprensión en todos los niveles:",
    accessPoints: [
      "Lenguaje claro",
      "Navegación sencilla",
      "Explicaciones paso a paso",
      "Contenido adaptable",
      "Experiencia multilingüe",
      "Acceso desde cualquier dispositivo"
    ],
    accessNote: "La expansión internacional de la plataforma se realizará mediante adaptación jurídica y contextual de cada jurisdicción, manteniendo una infraestructura tecnológica común.",
    audienceBadge: "Audiencia",
    audienceTitle: "Para cualquier persona que necesite comprender mejor sus derechos",
    audienceP1: "LeFri está pensada para ciudadanos que desean conocer sus derechos sin necesidad de tener formación jurídica. Puede ser especialmente útil como herramienta de primera orientación para personas que enfrentan barreras económicas, educativas, territoriales o informativas para acceder a información jurídica.",
    audienceComplementaryTitle: "También puede servir como herramienta complementaria para:",
    audienceList: [
      "Organizaciones comunitarias",
      "Fundaciones y org. sociales",
      "Líderes comunitarios",
      "Instituciones educativas",
      "Organizaciones de apoyo",
      "Programas de inclusión social"
    ],
    approachBadge: "Nuestro Enfoque",
    approachTitle: "Tecnología al servicio de las personas",
    approachSubtitle: "LeFri no busca reemplazar a las instituciones. Busca ayudar a las personas a llegar mejor informadas a ellas. Queremos construir una herramienta que conecte tres elementos esenciales:",
    approachElements: [
      { title: "Ciudadanía", desc: "Personas capaces de comprender mejor sus derechos, identificar vulneraciones y conocer sus opciones." },
      { title: "Comunidad", desc: "Organizaciones y redes que ayudan a acercar información y orientación a quienes más la necesitan en el territorio." },
      { title: "Instituciones", desc: "Servicios públicos, profesionales y mecanismos de protección a los que una persona puede acudir cuando necesita asistencia especializada." }
    ],
    approachFooter: "Conectar estos tres niveles puede contribuir a una relación más informada y constructiva entre ciudadanía, comunidad e instituciones.",
    impactBadge: "Impacto Real",
    impactTitle: "De una consulta individual a una comunidad más informada",
    impactSubtitle: "El impacto de LeFri no se mide solamente por cuántas personas visitan una página. También importa si una persona:",
    impactList: [
      "Comprendió mejor su derecho.",
      "Identificó una situación que requería atención.",
      "Conoció una ruta de acción viable.",
      "Pudo preparar una solicitud o documento.",
      "Encontró una institución a la que acudir.",
      "Comprendió cuándo requería asistencia profesional."
    ],
    impactFooter: "Queremos utilizar estos datos de manera responsable para evaluar qué barreras de información existen y cómo podemos mejorar continuamente la herramienta.",
    ecuadorBadge: "Ecuador",
    ecuadorTitle: "Construyendo un modelo de acceso digital a derechos desde Ecuador",
    ecuadorP1: "LeFri tiene su origen en Ecuador y busca desarrollar un modelo local de educación cívica, orientación inicial y acceso comprensible a derechos que pueda ser utilizado directamente por la ciudadanía.",
    ecuadorP2: "El objetivo no es solamente digitalizar información. Es desarrollar una herramienta que pueda acercarse progresivamente a comunidades, organizaciones sociales y personas que enfrentan mayores barreras de acceso a información jurídica.",
    ecuadorCardTitle: "Un piloto local. Una infraestructura preparada para crecer.",
    ecuadorCardDesc: "El trabajo inicial se concentra en Ecuador. La arquitectura tecnológica permite proyectar posteriormente la adaptación de la plataforma a otras jurisdicciones de América Latina.",
    alliancesBadge: "Alianzas",
    alliancesTitle: "Los derechos se fortalecen cuando diferentes actores trabajan juntos",
    alliancesSubtitle: "LeFri se desarrolla mediante la colaboración sinérgica entre múltiples sectores:",
    alliancesList: [
      "Sociedad civil y fundaciones",
      "Profesionales del derecho",
      "Universidades y centros de estudio",
      "Organizaciones comunitarias",
      "Instituciones públicas",
      "Aliados tecnológicos"
    ],
    alliancesFooter: "Las alianzas permiten validar contenidos, mejorar la accesibilidad, acercar la plataforma a las comunidades y garantizar su sostenibilidad en el tiempo.",
    alliancesBtn: "Conoce nuestro modelo de colaboración",
    collabBadge: "Colabora con LeFri",
    collabTitle: "Ayuda a acercar información sobre derechos a quienes más la necesitan",
    collabP1: "LeFri es una iniciativa de Fundación Underlife orientada a facilitar la educación cívica, la comprensión de derechos y la orientación inicial mediante herramientas digitales.",
    collabP2: "Estamos abiertos a construir alianzas para:",
    collabTags: [
      "Validación jurídica",
      "Investigación y evaluación",
      "Accesibilidad",
      "Implementación comunitaria",
      "Tecnología",
      "Difusión",
      "Financiamiento de proyectos"
    ],
    collabBtnWant: "Quiero colaborar",
    collabBtnSupport: "Apoyar el proyecto",
    faqBadge: "Claridad y Transparencia",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Respuestas directas a las dudas comunes sobre el alcance y uso de la plataforma.",
    faqs: [
      {
        question: "¿Qué es LeFri?",
        answer: "LeFri es una plataforma digital de educación cívica, comprensión constitucional y orientación inicial sobre derechos fundamentales."
      },
      {
        question: "¿Necesito conocimientos de derecho?",
        answer: "No. La plataforma está diseñada para personas sin formación jurídica y utiliza lenguaje ciudadano para explicar conceptos y disposiciones de manera clara."
      },
      {
        question: "¿LeFri es un abogado?",
        answer: "No. LeFri no sustituye a un abogado, defensor público, juez, autoridad administrativa ni otro profesional o institución competente. La plataforma proporciona información y orientación inicial para ayudar al usuario a comprender mejor una situación y conocer posibles siguientes pasos.",
        isImportant: true
      },
      {
        question: "¿Las respuestas de LeFri son asesoría jurídica?",
        answer: "No deben considerarse representación ni asesoría jurídica personalizada. Cuando una situación requiere análisis profesional, representación o intervención institucional, el usuario debe acudir al profesional o servicio competente."
      },
      {
        question: "¿Puedo utilizar LeFri gratis?",
        answer: "Sí. El acceso a las herramientas de educación cívica y comprensión constitucional de LeFri es completamente gratuito para toda la ciudadanía."
      },
      {
        question: "¿La plataforma funciona en otros países?",
        answer: "La arquitectura tecnológica está preparada para incorporar distintas jurisdicciones. Sin embargo, cada país requiere contenidos jurídicos específicos, validación y adaptación rigurosa a sus instituciones y procedimientos."
      },
      {
        question: "¿Qué información utiliza LeFri?",
        answer: "Los contenidos jurídicos se organizan a partir de fuentes normativas y constitucionales correspondientes a la jurisdicción disponible. La información se mantiene actualizada y se revisa ante cambios legales relevantes."
      },
      {
        question: "¿Qué ocurre con mis datos?",
        answer: "La privacidad y la seguridad son componentes fundamentales de la plataforma. Cumplimos con estándares de protección de datos (LOPDP / RGPD) y cifrado seguro. Consulta nuestra Política de Privacidad para más detalles."
      },
      {
        question: "¿Puedo utilizar LeFri para presentar una denuncia o demanda?",
        answer: "LeFri puede ofrecer orientación sobre documentos y rutas disponibles cuando esas funciones estén habilitadas. La generación de una guía documental no garantiza que una autoridad lo admita ni sustituye la debida revisión profesional."
      },
      {
        question: "¿LeFri puede ayudarme en una emergencia?",
        answer: "Para situaciones de emergencia o riesgo inmediato, la prioridad debe ser contactar directamente a los servicios oficiales de emergencia (como el 911 o policía local). Las funciones de emergencia de LeFri facilitan información y contactos rápidos, pero no sustituyen a los servicios oficiales."
      }
    ],
    ctaFinalBadge: "Conoce · Comprende · Actúa",
    ctaFinalTitle: "Tus derechos son tuyos. Empieza por conocerlos.",
    ctaFinalP1: "La Constitución no debería sentirse distante. La información jurídica no debería estar reservada para quienes conocen su lenguaje.",
    ctaFinalBold: "LeFri busca hacer que comprender tus derechos sea un proceso más claro, accesible y humano.",
    footerBrandSubtitle: "LEFRI — Educación cívica · Comprensión de derechos · Orientación inicial",
    footerInitiative: "Una iniciativa de",
    footerUnderlife: "Fundación Underlife",
    footerDisclaimerTitle: "Nota de uso:",
    footerDisclaimerText: "LeFri proporciona información y orientación inicial. No sustituye la asesoría jurídica, representación profesional, decisiones de autoridades ni servicios de emergencia. La información disponible puede variar según la jurisdicción y debe verificarse antes de tomar decisiones legales relevantes."
  },

  en: {
    brandTagline: "Civic education, initial guidance and access to rights",
    heroBadge: "Civic Education · Initial Guidance · Access to Rights",
    heroTitle1: "Understand your rights.",
    heroTitle2: "Grasp your situation. Know what to do.",
    heroSubtitle: "Civic education, initial guidance and understandable access to rights for everyone.",
    heroText1: "Laws and the Constitution belong to all citizens, but technical legal terminology often becomes a barrier for those who need to understand them most urgently.",
    heroText2: "LeFri transforms complex legal information into plain-language explanations, practical tools, and actionable paths so you can know your rights, spot violations, and decide your next steps.",
    btnKnowRights: "Learn my rights",
    btnExploreConstitution: "Explore the Constitution",
    signIn: "Sign In",
    stats: {
      articlesVal: "+400",
      articlesLbl: "Articles and clauses explained",
      plainVal: "100%",
      plainLbl: "Plain citizen language",
      freeVal: "Free",
      freeLbl: "Open access for everyone",
      stepVal: "Step by step",
      stepLbl: "Clear guides and orientation"
    },
    knowRightsBadge: "Know your rights",
    knowRightsTitle: "The law can be complex. Your rights shouldn't be.",
    knowRightsP1: "You don't need a law degree to understand what the Constitution says. LeFri uses citizen language, simple explanations, and digital tools to bring fundamental rights into daily life.",
    knowRightsP2Start: "Because knowing a right is essential. ",
    knowRightsP2Accent: "Understanding it is the first step to exercising it.",
    missionBadge: "Our Mission",
    missionTitle: "Bridging the gap between people and their rights",
    missionP1: "The rules that safeguard our dignity, labor, family, liberty, and equality exist for everyone in society.",
    missionP2: "Yet, legalistic jargon, lack of information, and uncertainty about next steps create obstacles to exercising those rights.",
    missionCallout: "LeFri was born to bridge that gap. Our purpose is to bring constitutional knowledge and first-step orientation to people through accessible, free, citizen-centered technology.",
    missionP3: "It is not just about displaying text. It is about empowering someone to understand, identify, and act with confidence.",
    howBadge: "How does LeFri help you?",
    howTitle: "From uncertainty to clarity",
    howSubtitle: "LeFri organizes legal knowledge so you can move forward step by step.",
    steps: [
      {
        stepNumber: "STEP 01",
        title: "Tell us your situation",
        desc: "Describe your inquiry using your everyday words. You don't need to know legal terms or which article applies to your case.",
        actionText: "Consult now"
      },
      {
        stepNumber: "STEP 02",
        title: "Identify your rights",
        desc: "LeFri helps you connect your situation with relevant constitutional principles, guarantees, and provisions in plain language.",
        actionText: "Explore rights"
      },
      {
        stepNumber: "STEP 03",
        title: "Understand what it means",
        desc: "A legal article can be hard to interpret. We break down complex concepts with clear explanations, real-world context, and examples.",
        actionText: "Understand concepts"
      },
      {
        stepNumber: "STEP 04",
        title: "Discover your next steps",
        desc: "Where appropriate, we guide you on actions, document formats, institutions, or public agencies relevant to your situation.",
        badgeText: "The tool guides you. The decision remains yours."
      }
    ],
    toolsBadge: "Tools",
    toolsTitle: "A platform built to turn legal information into understanding",
    tools: [
      {
        title: "The Constitution Explained",
        desc: "Explore the Constitution article by article. Understand what it establishes, which rights it recognizes, and how it applies to everyday life.",
        btnText: "Explore Constitution"
      },
      {
        title: "Rights Consultation",
        desc: "Ask a question or describe an event in your own words. LeFri identifies relevant legal topics and clarifies which rights protect you.",
        btnText: "Ask a question"
      },
      {
        title: "Triage & Initial Guidance",
        desc: "Not every case follows the same route. LeFri helps organize your inquiry to identify its nature and outline potential courses of action.",
        btnText: "Analyze my situation"
      },
      {
        title: "Citizen Explanations",
        desc: "Legal texts can be dense even for experts. LeFri translates intricate provisions into digestible explanations for universal access.",
        btnText: "Understand a concept"
      },
      {
        title: "Documents & Guides",
        desc: "When an issue requires filing a petition, claim, or document, LeFri provides structured guidance on standard formats and essentials.",
        btnText: "Explore documents",
        disclaimer: "* Generated documents must be reviewed and adapted to specific circumstances before formal submission."
      },
      {
        title: "Process Tracking",
        desc: "Save your inquiries and continue reviewing your situation without losing previous context on the platform.",
        btnText: "My processes"
      }
    ],
    urgencyTitle: "Guidance for Urgent Situations",
    urgencyDesc: "When a situation poses immediate danger or emergency, the priority is not an extensive explanation—it is finding the right help fast. LeFri provides emergency guidance and directs users to official contacts.",
    urgencyBtn: "View emergency options",
    actionBadge: "From Information to Action",
    actionTitle: "Knowing what the law says matters. Knowing what to do next matters too.",
    actionSubtitle: "People don't need hundreds of technical pages to start. They need clear answers to fundamental questions:",
    actionQuestions: [
      "What is happening?",
      "Which right applies?",
      "What does the law mean?",
      "What options exist?",
      "Where can I turn to?"
    ],
    actionFlow: "Understand → Identify → Decide → Seek the right help",
    dailyBadge: "Rights in Daily Life",
    dailyTitle: "Your rights don't just live in textbooks",
    dailySubtitle: "The Constitution and statutes impact situations you encounter every single day.",
    dailyAreas: [
      { title: "Labor & Work", desc: "Understand rights regarding fair wages, dismissal, workplace equality, social security, and employee protection." },
      { title: "Healthcare", desc: "Learn constitutional guarantees concerning public health protection and healthcare service access." },
      { title: "Family", desc: "Explore rights, child welfare protections, custody principles, and family stability guarantees." },
      { title: "Housing", desc: "Examine constitutional provisions related to dignified housing and adequate living conditions." },
      { title: "Equality & Non-Discrimination", desc: "Understand equality principles and legal safeguards against discrimination in all settings." },
      { title: "Persons with Disabilities", desc: "Review specific guarantees for universal access, reasonable accommodations, inclusion, and welfare." },
      { title: "Liberty & Privacy", desc: "Learn fundamental safeguards protecting personal freedom, physical integrity, and private data." },
      { title: "Civic Participation", desc: "Discover constitutional mechanisms for democratic involvement, petitions, and relationship with state bodies." }
    ],
    dailyBtnAll: "Explore all rights",
    cohesionBadge: "Social Cohesion",
    cohesionTitle: "A society that knows its rights participates more effectively in its community",
    cohesionP1: "Social cohesion thrives when citizens can engage, resolve disputes peacefully, and trust mechanisms built to address their needs. Information gaps widen distances between citizens, communities, and public institutions.",
    cohesionP2: "For this reason, LeFri helps foster a community empowered to:",
    cohesionPoints: [
      "Understand their rights clearly.",
      "Recognize situations that require timely attention.",
      "Participate with informed awareness.",
      "Seek solutions through peaceful, lawful channels.",
      "Access public assistance and services whenever needed."
    ],
    cohesionCallout: "Making legal information accessible does not solve social dilemmas on its own, but it removes a critical barrier to civic participation and justice.",
    justiceBadge: "Access to Justice",
    justiceTitle: "The greatest hurdle is often not knowing where to begin",
    justiceQuote: "“What do I do now?”",
    justiceP1: "For many individuals, seeking legal remedy starts with that simple, vulnerable question. LeFri facilitates that first step through accessible explanations and initial orientation.",
    justiceCallout: "When a case requires formal legal counsel, representation, or judicial intervention, the platform acts as an initial guide—never as a replacement for an attorney, public defender, or court authority.",
    justiceP2: "Understanding your situation clearly helps you seek specialized professional aid with confidence.",
    techBadge: "Responsible Technology",
    techTitle: "Innovating also means safeguarding",
    techSubtitle: "LeFri uses modern artificial intelligence to facilitate access to civic information. However, tech must never override rights, privacy, or human discernment. We operate under strict principles:",
    techPrinciples: [
      { title: "Clarity", desc: "Information must be readable and plain for every citizen, free of convoluted jargon." },
      { title: "Privacy", desc: "Personal information is governed by strict privacy standards, zero-leak protocols, and end-to-end encryption." },
      { title: "Transparency", desc: "Users are always informed of what the platform can and cannot do with complete honesty." },
      { title: "Responsibility", desc: "The platform advises and educates, but never replaces licensed legal representation or court decisions." },
      { title: "Inclusion", desc: "Access accounts for diverse abilities, literacy levels, and socio-economic realities." },
      { title: "Continuous Updates", desc: "Legal contents are routinely revised and updated when statutory codes change." }
    ],
    jurisdictionBadge: "Information & Jurisdiction",
    jurisdictionTitle: "Every country has its own legal framework",
    jurisdictionSubtitle: "Fundamental rights share universal principles, but each sovereign nation possesses its distinct constitution, statutes, courts, and procedures. LeFri is built with modular jurisdiction architecture.",
    jurisdictionMainBadge: "Primary Jurisdiction",
    jurisdictionMainTitle: "Ecuador",
    jurisdictionMainDesc: "National Constitution, constitutional guarantees, judicial mechanisms, and guidance adapted to Ecuador's institutional landscape.",
    jurisdictionNextBadge: "Upcoming Jurisdictions",
    jurisdictionNextTitle: "Peru · Colombia · Brazil · More",
    jurisdictionNextDesc: "LeFri's architecture allows localized regional modules adapted to other Latin American legal systems.",
    jurisdictionMotto: "One platform. Diverse jurisdictions. Content calibrated to local reality.",
    accessBadge: "Accessibility",
    accessTitle: "Technology that speaks the citizen's language",
    accessSubtitle: "LeFri is designed from the ground up to dismantle barriers of comprehension:",
    accessPoints: [
      "Plain, friendly language",
      "Intuitive navigation",
      "Step-by-step guidance",
      "Adaptive content",
      "Multilingual capabilities",
      "Universal device support"
    ],
    accessNote: "International expansion is carried out through legal and cultural validation for each jurisdiction while sharing a robust technological core.",
    audienceBadge: "Audience",
    audienceTitle: "Built for anyone seeking to understand their rights",
    audienceP1: "LeFri is intended for everyday citizens who want to grasp their legal guarantees without needing previous training in law. It serves as a vital first-response tool for people facing economic, geographical, or educational barriers.",
    audienceComplementaryTitle: "It also serves as a complementary tool for:",
    audienceList: [
      "Grassroots community groups",
      "Foundations and NGOs",
      "Civic community leaders",
      "Educational institutions",
      "Citizen support centers",
      "Social inclusion initiatives"
    ],
    approachBadge: "Our Approach",
    approachTitle: "Technology serving humanity",
    approachSubtitle: "LeFri does not seek to displace institutions. It seeks to help citizens arrive better informed. We build a tool connecting three pillars:",
    approachElements: [
      { title: "Citizenship", desc: "Individuals equipped to understand their rights, identify infractions, and weigh their choices." },
      { title: "Community", desc: "Organizations and grassroots networks bringing guidance and support to those who need it most." },
      { title: "Institutions", desc: "Public services, defenders, and protection mechanisms citizens can approach when expert intervention is needed." }
    ],
    approachFooter: "Connecting these three pillars fosters an informed, constructive relationship between citizens, community networks, and state bodies.",
    impactBadge: "Real Impact",
    impactTitle: "From an individual question to an empowered community",
    impactSubtitle: "LeFri's success is not measured solely by website traffic. What truly counts is whether a person:",
    impactList: [
      "Understood their legal right clearly.",
      "Identified an unfair situation that needed attention.",
      "Discovered a viable route of action.",
      "Drafted a petition, claim, or official request.",
      "Located the proper public institution to consult.",
      "Recognized when professional legal representation was required."
    ],
    impactFooter: "We utilize anonymized insights responsibly to identify systemic information gaps and continually enhance civic access.",
    ecuadorBadge: "Ecuador",
    ecuadorTitle: "Pioneering digital access to rights from Ecuador",
    ecuadorP1: "LeFri originated in Ecuador to forge a homegrown model of civic education, initial orientation, and comprehensible access to justice directly for citizens.",
    ecuadorP2: "Our objective goes far beyond digitizing texts: it is building a living tool that reaches marginalized communities and social organizations facing the steepest legal barriers.",
    ecuadorCardTitle: "A local pilot. An infrastructure prepared to scale.",
    ecuadorCardDesc: "Initial operations focus on Ecuador. The platform's technological core is primed for future adaptation across Latin America.",
    alliancesBadge: "Alliances",
    alliancesTitle: "Rights grow stronger when diverse actors unite",
    alliancesSubtitle: "LeFri grows through dynamic collaboration across sectors:",
    alliancesList: [
      "Civil society and foundations",
      "Legal professionals and bar associations",
      "Universities and academic research centers",
      "Community organizations",
      "Public ombudsman institutions",
      "Technology partners"
    ],
    alliancesFooter: "Partnerships validate legal content, boost accessibility, connect with local communities, and sustain the initiative over time.",
    alliancesBtn: "Learn about our collaboration model",
    collabBadge: "Collaborate with LeFri",
    collabTitle: "Help bring rights awareness to those who need it most",
    collabP1: "LeFri is an initiative of Fundación Underlife dedicated to promoting civic literacy, constitutional comprehension, and early legal orientation through digital tools.",
    collabP2: "We welcome partnerships in:",
    collabTags: [
      "Legal Validation",
      "Research & Impact Evaluation",
      "Accessibility & Inclusion",
      "Community Outreach",
      "Technology & AI",
      "Civic Awareness",
      "Project Funding"
    ],
    collabBtnWant: "I want to collaborate",
    collabBtnSupport: "Support the project",
    faqBadge: "Clarity & Transparency",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Direct answers to common questions about the platform's scope and utility.",
    faqs: [
      {
        question: "What is LeFri?",
        answer: "LeFri is a digital platform for civic education, constitutional literacy, and first-step rights orientation."
      },
      {
        question: "Do I need legal knowledge to use it?",
        answer: "No. The platform is designed specifically for people without legal training, using plain citizen language to explain articles and provisions clearly."
      },
      {
        question: "Is LeFri a lawyer?",
        answer: "No. LeFri does not replace an attorney, public defender, magistrate, or competent administrative body. The platform provides initial orientation to help you understand your situation and identify viable next steps.",
        isImportant: true
      },
      {
        question: "Are LeFri's responses legal advice?",
        answer: "They should not be construed as personalized legal representation or legal counsel. Whenever an issue requires professional representation or formal litigation, users should consult a qualified attorney."
      },
      {
        question: "Can I use LeFri for free?",
        answer: "Yes. Access to LeFri's civic education and constitutional literacy tools is 100% free for all citizens."
      },
      {
        question: "Does the platform work in other countries?",
        answer: "The technological architecture is designed to support multiple jurisdictions. However, each country requires specific legal validation, context calibration, and alignment with local institutions."
      },
      {
        question: "What sources does LeFri rely on?",
        answer: "Legal content is curated directly from official constitutional texts, codes, and statutory sources for the active jurisdiction, regularly updated to reflect legislative changes."
      },
      {
        question: "What happens to my data?",
        answer: "Privacy and security are core priorities. We follow strict data protection standards (GDPR / LOPDP) and end-to-end data encryption. Review our Privacy Policy for full details."
      },
      {
        question: "Can I file a formal complaint or lawsuit through LeFri?",
        answer: "LeFri can guide you on document structures and standard channels when enabled. Generating a template does not guarantee acceptance by authorities nor does it replace official filing procedures."
      },
      {
        question: "Can LeFri help in an emergency?",
        answer: "In cases of immediate physical danger or critical risk, always call official emergency hotlines (such as 911 or local police). LeFri provides quick guidance and contacts, but does not replace official emergency services."
      }
    ],
    ctaFinalBadge: "Know · Understand · Act",
    ctaFinalTitle: "Your rights belong to you. Start by knowing them.",
    ctaFinalP1: "The Constitution should never feel distant. Legal knowledge must not be reserved only for those who know technical jargon.",
    ctaFinalBold: "LeFri strives to make understanding your rights clear, accessible, and human.",
    footerBrandSubtitle: "LEFRI — Civic Education · Rights Comprehension · Initial Guidance",
    footerInitiative: "An initiative of",
    footerUnderlife: "Fundación Underlife",
    footerDisclaimerTitle: "Usage Notice:",
    footerDisclaimerText: "LeFri provides civic information and initial orientation. It does not substitute professional legal counsel, legal representation, judicial rulings, or emergency services. Information may vary across jurisdictions and should be verified before making significant legal choices."
  },

  pt: {
    brandTagline: "Educação cidadã, orientação inicial e acesso a direitos",
    heroBadge: "Educação Cidadã · Orientação Inicial · Acesso a Direitos",
    heroTitle1: "Entenda seus direitos.",
    heroTitle2: "Compreenda sua situação. Saiba o que fazer.",
    heroSubtitle: "Educação cívica, orientação inicial e acesso compreensível a direitos para todas as pessoas.",
    heroText1: "As leis e a Constituição pertencem a toda a cidadania, mas a linguagem técnica pode se tornar uma barreira para quem precisa compreendê-las com maior urgência.",
    heroText2: "O LeFri transforma informações jurídicas complexas em explicações claras, ferramentas práticas e rotas compreensíveis para que você conheça seus direitos, identifique possíveis violações e saiba o seu próximo passo.",
    btnKnowRights: "Conhecer meus direitos",
    btnExploreConstitution: "Explorar a Constituição",
    signIn: "Entrar",
    stats: {
      articlesVal: "+400",
      articlesLbl: "Artigos e disposições explicados",
      plainVal: "100%",
      plainLbl: "Linguagem cidadã",
      freeVal: "Gratuito",
      freeLbl: "Acesso livre para todas as pessoas",
      stepVal: "Passo a passo",
      stepLbl: "Explicações e orientação acessível"
    },
    knowRightsBadge: "Conheça seus direitos",
    knowRightsTitle: "A lei pode ser complexa. Seus direitos não deveriam ser.",
    knowRightsP1: "Você não precisa ser advogado para entender o que diz a Constituição. O LeFri utiliza linguagem cidadã, explicações simples e ferramentas digitais para aproximar os direitos fundamentais do dia a dia.",
    knowRightsP2Start: "Porque conhecer um direito é importante. ",
    knowRightsP2Accent: "Compreendê-lo é o primeiro passo para poder exercê-lo.",
    missionBadge: "Nossa Missão",
    missionTitle: "Reduzir a distância entre as pessoas e seus direitos",
    missionP1: "As normas que protegem nossa dignidade, nosso trabalho, nossa família, nossa liberdade e nossa igualdade existem para toda a sociedade.",
    missionP2: "No entanto, a complexidade da linguagem jurídica, a falta de informação e a dúvida sobre o que fazer podem criar barreiras para exercer esses direitos.",
    missionCallout: "O LeFri nasce para reduzir essa distância. Nosso propósito é aproximar o conhecimento constitucional e a orientação inicial das pessoas por meio de tecnologia compreensível, gratuita e centrada no cidadão.",
    missionP3: "Não se trata apenas de mostrar dados. Trata-se de capacitar cada pessoa a compreender, identificar e agir de forma informada.",
    howBadge: "Como o LeFri ajuda você?",
    howTitle: "Do desconhecimento à compreensão",
    howSubtitle: "O LeFri organiza o conhecimento jurídico para que você avance passo a passo.",
    steps: [
      {
        stepNumber: "PASSO 01",
        title: "Conte sua situação",
        desc: "Descreva sua dúvida com suas próprias palavras. Você não precisa conhecer termos jurídicos nem saber qual artigo corresponde ao seu caso.",
        actionText: "Consultar agora"
      },
      {
        stepNumber: "PASSO 02",
        title: "Identifique seus direitos",
        desc: "O LeFri ajuda a relacionar sua situação com princípios, direitos e dispositivos constitucionais pertinentes, em linguagem cidadã.",
        actionText: "Explorar direitos"
      },
      {
        stepNumber: "PASSO 03",
        title: "Compreenda o significado",
        desc: "Interpretar uma norma com jargão técnico pode ser difícil. Explicamos conceitos jurídicos complexos com clareza, contexto e exemplos cotidianos.",
        actionText: "Entender conceitos"
      },
      {
        stepNumber: "PASSO 04",
        title: "Conheça seus próximos passos",
        desc: "Quando cabível, orientamos sobre ações, modelos documentais, órgãos públicos e canais de atenção pertinentes ao seu caso.",
        badgeText: "A ferramenta orienta. A decisão continua sendo sua."
      }
    ],
    toolsBadge: "Ferramentas",
    toolsTitle: "Uma plataforma desenvolvida para transformar informação em compreensão",
    tools: [
      {
        title: "A Constituição explicada",
        desc: "Explore a Constituição artigo por artigo. Compreenda o que ela estabelece, quais direitos reconhece e como se relaciona com a vida cotidiana.",
        btnText: "Explorar a Constituição"
      },
      {
        title: "Consulta de direitos",
        desc: "Escreva uma pergunta ou descreva uma situação com suas próprias palavras. O LeFri identifica temas jurídicos relevantes e esclarece seus direitos.",
        btnText: "Fazer uma consulta"
      },
      {
        title: "Triagem e orientação inicial",
        desc: "Nem todos os casos demandam o mesmo percurso. O LeFri ajuda a estruturar inicialmente sua consulta para identificar possíveis caminhos.",
        btnText: "Analisar minha situação"
      },
      {
        title: "Explicação cidadã",
        desc: "Textos jurídicos podem conter termos complexos até para especialistas. O LeFri traduz conceitos e normas em linguagem acessível a todos.",
        btnText: "Entender um conceito"
      },
      {
        title: "Documentos e guias",
        desc: "Quando o caso requer um requerimento, reclamação ou formulário, o LeFri orienta sobre a estrutura e os requisitos essenciais.",
        btnText: "Explorar documentos",
        disclaimer: "* Os documentos gerados devem ser revisados e adaptados a cada circunstância concreta antes do uso formal."
      },
      {
        title: "Acompanhamento de processos",
        desc: "Guarde suas consultas e continue explorando sua situação sem perder o histórico do que já foi analisado na plataforma.",
        btnText: "Meus processos"
      }
    ],
    urgencyTitle: "Orientação para situações urgentes",
    urgencyDesc: "Quando uma situação envolve perigo imediato ou risco, a prioridade não é uma explicação extensa: é localizar rapidamente o socorro adequado. O LeFri fornece orientações rápidas e canais pertinentes.",
    urgencyBtn: "Ver opções de emergência",
    actionBadge: "Da informação à ação",
    actionTitle: "Saber o que diz a lei é importante. Saber o que fazer depois também.",
    actionSubtitle: "A maioria das pessoas não precisa começar com centenas de páginas técnicas. Precisa de respostas claras para dúvidas essenciais:",
    actionQuestions: [
      "O que está acontecendo?",
      "Qual direito se aplica?",
      "O que significa a norma?",
      "Quais opções existem?",
      "A quem posso recorrer?"
    ],
    actionFlow: "Compreender → Identificar → Decidir → Buscar auxílio adequado",
    dailyBadge: "Direitos no cotidiano",
    dailyTitle: "Seus direitos não existem apenas nos livros",
    dailySubtitle: "A Constituição e as leis se relacionam com situações que ocorrem todos os dias.",
    dailyAreas: [
      { title: "Trabalho", desc: "Compreenda direitos trabalhistas, remuneração justa, estabilidade, previdência social e proteção laboral." },
      { title: "Saúde", desc: "Conheça os preceitos constitucionais referentes à preservação da saúde e acesso a serviços públicos." },
      { title: "Família", desc: "Compreenda direitos, garantias à infância, pensão alimentícia e proteção integral à família." },
      { title: "Moradia", desc: "Explore as disposições relativas à moradia digna, posse e condições adequadas de vida." },
      { title: "Igualdade e não discriminação", desc: "Compreenda os princípios constitucionais de igualdade e combate a qualquer tipo de discriminação." },
      { title: "Pessoas com deficiência", desc: "Consulte garantias específicas de acessibilidade universal, inclusão social e proteção especial." },
      { title: "Liberdade e privacidade", desc: "Compreenda as garantias de liberdade individual, intimidade e proteção de dados pessoais." },
      { title: "Participação cidadã", desc: "Conheça os canais constitucionais de controle social, petições e relação com o poder público." }
    ],
    dailyBtnAll: "Explorar todos os direitos",
    cohesionBadge: "Coesão Social",
    cohesionTitle: "Uma sociedade que conhece seus direitos participa melhor da vida comunitária",
    cohesionP1: "A coesão social se fortalece quando as pessoas podem participar, resolver conflitos pacificamente e confiar em instituições preparadas para atendê-las. O desconhecimento aprofunda o abismo entre cidadãos, comunidades e instituições.",
    cohesionP2: "Por isso, o LeFri atua para capacitar a cidadania a:",
    cohesionPoints: [
      "Compreender seus direitos fundamentais.",
      "Reconhecer situações que requerem atenção imediata.",
      "Participar ativamente de maneira informada.",
      "Buscar soluções por vias pacíficas e regulares.",
      "Acessar serviços públicos e assistência quando indispensável."
    ],
    cohesionCallout: "O acesso compreensível à informação jurídica não resolve sozinho os desafios sociais, mas derruba uma barreira crucial para a cidadania e a justiça.",
    justiceBadge: "Acesso à Justiça",
    justiceTitle: "A primeira barreira costuma ser não saber por onde começar",
    justiceQuote: "“O que eu faço agora?”",
    justiceP1: "Para muitas pessoas, buscar ajuda jurídica começa com essa pergunta tão básica. O LeFri facilita esse primeiro passo por meio de orientação inicial e ferramentas digitais intuitivas.",
    justiceCallout: "Quando um caso exige assistência profissional, representação ou atuação judicial, a plataforma atua como ponto de partida—jamais como substituta de advogados, defensores públicos ou magistrados.",
    justiceP2: "Compreender melhor sua situação ajuda você a buscar a assistência adequada com muito mais segurança.",
    techBadge: "Tecnologia com Responsabilidade",
    techTitle: "Inovar também é proteger",
    techSubtitle: "O LeFri aplica inteligência artificial para aproximar o cidadão de seus direitos. No entanto, a tecnologia nunca deve sobrepor a privacidade, os direitos ou o discernimento humano. Nossos princípios:",
    techPrinciples: [
      { title: "Clareza", desc: "As orientações devem ser transparentes e diretas para qualquer pessoa, sem jargões desnecessários." },
      { title: "Privacidade", desc: "Os dados pessoais são resguardados por protocolos estritos de confidencialidade e criptografia robusta." },
      { title: "Transparência", desc: "O usuário é informado de forma aberta sobre as capacidades e os limites da plataforma." },
      { title: "Responsabilidade", desc: "A ferramenta orienta e esclarece, mas não substitui a representação técnica profissional." },
      { title: "Inclusão", desc: "O design considera públicos diversos, diferentes níveis de escolaridade e múltiplos dispositivos." },
      { title: "Atualização", desc: "O acervo legislativo é revisado e atualizado continuamente conforme as reformas jurídicas." }
    ],
    jurisdictionBadge: "Informação e Jurisdição",
    jurisdictionTitle: "Cada país possui sua própria ordem jurídica",
    jurisdictionSubtitle: "Os direitos fundamentais compartilham raízes universais, mas cada nação possui sua própria Constituição, leis, tribunais e ritos. O LeFri possui uma arquitetura preparada para múltiplos módulos jurisdicionais.",
    jurisdictionMainBadge: "Jurisdição Principal",
    jurisdictionMainTitle: "Equador",
    jurisdictionMainDesc: "Constituição, direitos fundamentais, remédios constitucionais e orientação contextualizada para as instituições equatorianas.",
    jurisdictionNextBadge: "Próximas Jurisdições",
    jurisdictionNextTitle: "Peru · Colômbia · Brasil · Mais",
    jurisdictionNextDesc: "A arquitetura do LeFri foi concebida para expansão modular e adaptação às legislações de outros países da América Latina.",
    jurisdictionMotto: "Uma plataforma. Diversas jurisdições. Conteúdo adaptado a cada realidade.",
    accessBadge: "Acessibilidade",
    accessTitle: "Tecnologia que fala o idioma da cidadania",
    accessSubtitle: "O LeFri foi projetado para eliminar barreiras de compreensão em todos os pontos:",
    accessPoints: [
      "Linguagem simples e direta",
      "Navegação intuitiva",
      "Orientações passo a passo",
      "Conteúdo adaptável",
      "Experiência multilíngue",
      "Acesso em qualquer dispositivo"
    ],
    accessNote: "A expansão internacional é viabilizada com rigorosa validação jurídica local, mantendo uma infraestrutura tecnológica unificada.",
    audienceBadge: "Público",
    audienceTitle: "Para qualquer pessoa que precise compreender seus direitos",
    audienceP1: "O LeFri é feito para qualquer cidadão que deseje conhecer suas garantias sem precisar de formação prévia em Direito. É uma ferramenta de primeira resposta para pessoas que enfrentam barreiras econômicas, territoriais ou informativas.",
    audienceComplementaryTitle: "Também atua como suporte valioso para:",
    audienceList: [
      "Coletivos e movimentos comunitários",
      "Fundações e organizações sociais",
      "Líderes comunitários",
      "Escolas e instituições de ensino",
      "Entidades de apoio social",
      "Programas de inclusão e cidadania"
    ],
    approachBadge: "Nosso Enfoque",
    approachTitle: "Tecnologia a serviço das pessoas",
    approachSubtitle: "O LeFri não pretende substituir as instituições. Visa preparar os cidadãos para chegarem mais bem informados a elas. Conectamos três pilares essenciais:",
    approachElements: [
      { title: "Cidadania", desc: "Pessoas preparadas para entender seus direitos, identificar abusos e tomar decisões conscientes." },
      { title: "Comunidade", desc: "Redes e organizações que levam suporte e esclarecimento a quem mais necessita nos territórios." },
      { title: "Instituições", desc: "Serviços públicos, defensores e mecanismos estatais a que o cidadão recorre quando precisa de atuação especializada." }
    ],
    approachFooter: "A conexão desses três níveis promove relações mais transparentes e colaborativas entre sociedade civil, comunidades e instituições.",
    impactBadge: "Impacto Real",
    impactTitle: "De uma dúvida individual a uma comunidade consciente",
    impactSubtitle: "O impacto do LeFri não é medido apenas pelo número de acessos. O que realmente importa é se uma pessoa:",
    impactList: [
      "Compreendeu seu direito com segurança.",
      "Identificou uma situação que exigia atenção urgente.",
      "Conheceu uma rota de ação viável.",
      "Elaborou uma petição ou requerimento inicial.",
      "Encontrou o órgão público competente para recorrer.",
      "Compreendeu quando necessitava de representação jurídica especializada."
    ],
    impactFooter: "Analisamos essas informações com responsabilidade para diagnosticar gargalos informativos e aperfeiçoar a ferramenta constantemente.",
    ecuadorBadge: "Equador",
    ecuadorTitle: "Construindo um modelo de acesso digital à cidadania a partir do Equador",
    ecuadorP1: "O LeFri teve origem no Equador com o propósito de desenhar um modelo local de educação cívica, orientação inicial e acesso compreensível a direitos feito diretamente para o cidadão.",
    ecuadorP2: "O objetivo vai muito além de digitalizar textos: é desenvolver um instrumento vivo que chegue a comunidades, coletivos e pessoas com maior vulnerabilidade de acesso à justiça.",
    ecuadorCardTitle: "Um piloto local. Uma infraestrutura preparada para crescer.",
    ecuadorCardDesc: "As operações iniciais se concentram no Equador. A base tecnológica permite planejar a expansão para outros países da América Latina.",
    alliancesBadge: "Alianças",
    alliancesTitle: "Os direitos se fortalecem com o trabalho conjunto",
    alliancesSubtitle: "O LeFri se desenvolve através da colaboração multissetorial:",
    alliancesList: [
      "Sociedade civil e fundações",
      "Profissionais e entidades do Direito",
      "Universidades e centros de pesquisa",
      "Organizações comunitárias de base",
      "Instituições públicas e defensorias",
      "Parceiros de inovação e tecnologia"
    ],
    alliancesFooter: "As parcerias legitimam o conteúdo, fortalecem a acessibilidade, aproximam a plataforma das comunidades e garantem sua sustentabilidade.",
    alliancesBtn: "Conheça nosso modelo de cooperação",
    collabBadge: "Colabore com o LeFri",
    collabTitle: "Ajude a levar conhecimento sobre direitos a quem mais precisa",
    collabP1: "O LeFri é uma iniciativa da Fundación Underlife voltada a promover a educação cívica, o entendimento constitucional e a orientação inicial por meios digitais.",
    collabP2: "Estamos abertos a construir parcerias em:",
    collabTags: [
      "Validação jurídica",
      "Pesquisa e impacto",
      "Acessibilidade e inclusão",
      "Atuação comunitária",
      "Tecnologia e inteligência artificial",
      "Comunicação e difusão",
      "Apoio e financiamento de projetos"
    ],
    collabBtnWant: "Quero colaborar",
    collabBtnSupport: "Apoiar o projeto",
    faqBadge: "Transparência e Confiança",
    faqTitle: "Perguntas Frequentes",
    faqSubtitle: "Respostas claras e diretas sobre o funcionamento e alcance da plataforma.",
    faqs: [
      {
        question: "O que é o LeFri?",
        answer: "O LeFri é uma plataforma digital de educação cidadã, compreensão constitucional e orientação inicial sobre direitos fundamentais."
      },
      {
        question: "Preciso entender de leis para utilizar?",
        answer: "Não. A plataforma foi criada exatamente para pessoas sem formação jurídica, com linguagem simples e acolhedora."
      },
      {
        question: "O LeFri substitui um advogado?",
        answer: "Não. O LeFri não substitui advogados, defensores públicos, juízes nem qualquer autoridade competente. A ferramenta fornece orientação e esclarecimento para ajudar você a entender seu caso e agir com clareza.",
        isImportant: true
      },
      {
        question: "As respostas equivalem a consultoria jurídica?",
        answer: "Não devem ser interpretadas como consultoria jurídica formal ou representação judicial. Situações que demandam medidas judiciais exigem o acompanhamento de um profissional habilitado."
      },
      {
        question: "O uso da plataforma é gratuito?",
        answer: "Sim. O acesso a todas as ferramentas de educação cidadã e estudo da Constituição é 100% gratuito para todas as pessoas."
      },
      {
        question: "A plataforma funciona em outros países?",
        answer: "A estrutura tecnológica está pronta para integrar novas jurisdições. Contudo, cada país requer curadoria normativa local e validação com os órgãos competentes."
      },
      {
        question: "De onde vêm as informações do LeFri?",
        answer: "Os conteúdos são estruturados a partir das Constituições oficiais e legislações vigentes de cada jurisdição atendida, atualizados periodicamente."
      },
      {
        question: "Como meus dados são protegidos?",
        answer: "A segurança e o sigilo são valores inegociáveis. Cumprimos parâmetros rigorosos de proteção de dados (LGPD / GDPR) com tráfego criptografado. Veja nossa Política de Privacidade."
      },
      {
        question: "Posso registrar queixas ou processos pelo LeFri?",
        answer: "O LeFri oferece guias sobre documentos e procedimentos cabíveis. A elaboração de um modelo orientativo não garante acolhimento judicial automático nem substitui os protocolos oficiais."
      },
      {
        question: "O LeFri pode me salvar em uma emergência grave?",
        answer: "Em situações de risco iminente à integridade física, ligue imediatamente para os números oficiais de emergência (como o 190 ou 193). As ferramentas do LeFri fornecem apoio e contatos, mas não operam como serviço de socorro oficial."
      }
    ],
    ctaFinalBadge: "Conheça · Compreenda · Aja",
    ctaFinalTitle: "Seus direitos pertencem a você. Comece conhecendo-os.",
    ctaFinalP1: "A Constituição não deve parecer distante. O conhecimento das leis não deve ficar restrito a quem domina termos técnicos.",
    ctaFinalBold: "O LeFri existe para tornar o entendimento dos seus direitos um processo claro, acessível e humano.",
    footerBrandSubtitle: "LEFRI — Educação Cidadã · Compreensão de Direitos · Orientação Inicial",
    footerInitiative: "Uma iniciativa da",
    footerUnderlife: "Fundación Underlife",
    footerDisclaimerTitle: "Aviso de uso:",
    footerDisclaimerText: "O LeFri oferece informações cívicas e orientação preliminar. Não substitui assistência jurídica profissional, representação judicial, despachos oficiais nem serviços de urgência. As informações variam por jurisdição e devem ser verificadas antes de decisões jurídicas relevantes."
  }
};

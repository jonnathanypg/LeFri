export type Language = 'es' | 'en' | 'pt';

export interface OptionItem {
  label: string;
  value: string;
  desc: string;
}

export interface QuestionCopy {
  badge: string;
  title: string;
  subtitle: string;
  placeholder?: string;
  options?: OptionItem[];
}

export interface FlowTranslations {
  flowTitle: {
    login: string;
    register: string;
    collaborate: string;
    support: string;
  };
  stepOf: (current: number, total: number) => string;
  enterHint: string;
  pressEnter: string;
  textareaHint: string;
  validations: {
    validEmail: string;
    requiredField: string;
    passwordLength: string;
    passwordMatch: string;
  };
  buttons: {
    back: string;
    continue: string;
    submitLogin: string;
    submitRegister: string;
    submitCollaborate: string;
    submitSupport: string;
    saving: string;
    switchToRegister: string;
    switchToLogin: string;
    loginWithExisting: string;
    orGoogle: string;
    google: string;
    classicForm: string;
    conversationalForm: string;
    backToHome: string;
  };
  messages: {
    welcomeBack: string;
    welcomeBackDesc: string;
    registered: string;
    registeredDesc: string;
    proposalReceived: string;
    proposalReceivedDesc: string;
    supportReceived: string;
    supportReceivedDesc: string;
    sessionWithExisting: string;
    userAlreadyExists: string;
    userAlreadyExistsAccount: string;
    invalidCredentials: string;
    googleError: string;
  };
  loginQuestions: {
    email: QuestionCopy;
    password: QuestionCopy;
  };
  registerQuestions: {
    name: QuestionCopy;
    email: QuestionCopy;
    legalNeed: QuestionCopy;
    password: QuestionCopy;
    confirmPassword: QuestionCopy;
  };
  collaborateQuestions: {
    name: QuestionCopy;
    organization: QuestionCopy;
    area: QuestionCopy;
    email: QuestionCopy;
    phone: QuestionCopy;
    message: QuestionCopy;
    password: QuestionCopy;
    confirmPassword: QuestionCopy;
  };
  supportQuestions: {
    name: QuestionCopy;
    area: QuestionCopy;
    email: QuestionCopy;
    phone: QuestionCopy;
    message: QuestionCopy;
    password: QuestionCopy;
    confirmPassword: QuestionCopy;
  };
}

export const conversationalTranslations: Record<Language, FlowTranslations> = {
  es: {
    flowTitle: {
      login: "Acceso a LeFri",
      register: "Registro de Nuevo Ciudadano",
      collaborate: "Propuesta de Colaboración y Alianza",
      support: "Apoyo y Sostenibilidad del Proyecto"
    },
    stepOf: (current, total) => `Paso ${current} de ${total}`,
    enterHint: "para avanzar",
    pressEnter: "Presiona",
    textareaHint: "Puedes detallar tus ideas con total confianza.",
    validations: {
      validEmail: "Por favor ingresa un correo electrónico válido.",
      requiredField: "Por favor completa este campo.",
      passwordLength: "La contraseña debe tener al menos 6 caracteres.",
      passwordMatch: "Las contraseñas no coinciden. Por favor revisa."
    },
    buttons: {
      back: "Atrás",
      continue: "Continuar",
      submitLogin: "Entrar a LeFri",
      submitRegister: "Crear Cuenta e Ingresar",
      submitCollaborate: "Enviar Propuesta e Ingresar",
      submitSupport: "Confirmar Apoyo e Ingresar",
      saving: "Guardando y conectando...",
      switchToRegister: "¿Crear nueva cuenta?",
      switchToLogin: "¿Ya tienes cuenta? Iniciar Sesión",
      loginWithExisting: "Iniciar Sesión con esta cuenta",
      orGoogle: "O continuar con Google",
      google: "Google",
      classicForm: "Form Clásico",
      conversationalForm: "Experiencia Guiada",
      backToHome: "Volver a la Home"
    },
    messages: {
      welcomeBack: "¡Bienvenido de nuevo!",
      welcomeBackDesc: "Acceso verificado. Redirigiendo a tu panel...",
      registered: "¡Bienvenido a LeFri!",
      registeredDesc: "Tu cuenta ha sido creada exitosamente. Ingresando...",
      proposalReceived: "¡Propuesta de colaboración recibida!",
      proposalReceivedDesc: "Tu cuenta ha sido creada e ingresas directamente a la plataforma.",
      supportReceived: "¡Aporte recibido con éxito!",
      supportReceivedDesc: "Gracias por tu apoyo. Tu cuenta ha sido creada e ingresas al sistema.",
      sessionWithExisting: "Sesión iniciada con tu cuenta existente. Bienvenido.",
      userAlreadyExists: "Ya existe una cuenta con este correo. La propuesta se guardó, pero por favor inicia sesión con tu contraseña habitual.",
      userAlreadyExistsAccount: "Ya existe una cuenta con este correo electrónico. Puedes iniciar sesión directamente con tu contraseña o con Google.",
      invalidCredentials: "Credenciales inválidas o correo no registrado. Por favor verifica.",
      googleError: "Error al iniciar sesión con Google."
    },
    loginQuestions: {
      email: {
        badge: "Paso 1 • Identificación",
        title: "¡Bienvenido de vuelta! ¿Cuál es tu correo registrado?",
        subtitle: "Ingresa el correo electrónico asociado a tu cuenta de LeFri.",
        placeholder: "nombre@ejemplo.com"
      },
      password: {
        badge: "Paso 2 • Seguridad",
        title: "Ingresa tu contraseña de acceso",
        subtitle: "Tus consultas y casos jurídicos están protegidos con cifrado de alta seguridad.",
        placeholder: "••••••••"
      }
    },
    registerQuestions: {
      name: {
        badge: "Paso 1 • Perfil",
        title: "¿Cuál es tu nombre completo?",
        subtitle: "Personalizaremos tus consultas jurídicas y orientaciones cívicas con este nombre.",
        placeholder: "Ej. María Pérez"
      },
      email: {
        badge: "Paso 2 • Contacto",
        title: "¿Cuál es tu correo electrónico?",
        subtitle: "Aquí recibirás el seguimiento de tus consultas y respaldo de tus derechos.",
        placeholder: "maria@ejemplo.com"
      },
      legalNeed: {
        badge: "Paso 3 • Área de Consulta",
        title: "¿En qué área legal requieres orientación hoy?",
        subtitle: "Esto calibra a nuestro mediador con el código y normativa adecuada.",
        options: [
          { label: "Laboral (Trabajo, Sueldos, Despido)", value: "laboral", desc: "Derechos laborales y seguridad social" },
          { label: "Familia, Niñez y Alimentos", value: "familia", desc: "Garantías y protección familiar" },
          { label: "Vivienda, Contratos e Inquilinato", value: "civil", desc: "Derecho a vivienda y acuerdos" },
          { label: "Derechos Fundamentales / Urgencia", value: "penal", desc: "Libertad personal y debido proceso" }
        ]
      },
      password: {
        badge: "Paso 4 • Contraseña",
        title: "Crea tu contraseña de acceso",
        subtitle: "Mínimo 6 caracteres para acceder inmediatamente a tu cuenta.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Paso Final • Confirmación",
        title: "Confirma tu contraseña",
        subtitle: "Vuelve a escribirla para entrar de forma inmediata a la plataforma.",
        placeholder: "••••••••"
      }
    },
    collaborateQuestions: {
      name: {
        badge: "Alianza • Paso 1",
        title: "¿Cuál es tu nombre o el de tu equipo?",
        subtitle: "Queremos conocer a la persona u organización que desea colaborar con LeFri.",
        placeholder: "Ej. Dra. Carmen Morales / Colectivo Cívico"
      },
      organization: {
        badge: "Alianza • Paso 2",
        title: "¿Representas a alguna organización, fundación o universidad?",
        subtitle: "Si colaboras de forma independiente o como particular, puedes indicar 'Independiente'.",
        placeholder: "Ej. Universidad Central / Fundación Semillas / Particular"
      },
      area: {
        badge: "Alianza • Paso 3",
        title: "¿En qué área te gustaría colaborar?",
        subtitle: "Selecciona la vía donde tu experiencia puede aportar mayor impacto ciudadano.",
        options: [
          { label: "Validación Jurídica y Contenido", value: "legal_validation", desc: "Revisión técnica de normas y explicaciones" },
          { label: "Implementación Comunitaria y Territorio", value: "community", desc: "Talleres, difusión local y líderes cívicos" },
          { label: "Investigación y Evaluación de Impacto", value: "research", desc: "Estudios de acceso a justicia y métricas" },
          { label: "Accesibilidad e Inclusión", value: "accessibility", desc: "Adaptación para discapacidad, lenguas originarias" },
          { label: "Desarrollo Tecnológico y Datos", value: "tech", desc: "Modelos de lenguaje, agentes e integraciones" }
        ]
      },
      email: {
        badge: "Alianza • Paso 4",
        title: "¿A qué correo podemos contactarte?",
        subtitle: "Te enviaremos los detalles del modelo de colaboración y los siguientes pasos.",
        placeholder: "contacto@organizacion.org"
      },
      phone: {
        badge: "Alianza • Paso 5",
        title: "Teléfono o WhatsApp de contacto (Opcional)",
        subtitle: "Nos ayuda a coordinar reuniones breves de enlace con el equipo de Fundación Underlife.",
        placeholder: "+593 99 999 9999"
      },
      message: {
        badge: "Alianza • Paso 6",
        title: "Cuéntanos brevemente sobre tu propuesta de colaboración",
        subtitle: "¿Qué iniciativas, ideas o recursos te gustaría compartir o articular con LeFri?",
        placeholder: "Escribe aquí los detalles principales de tu interés en colaborar..."
      },
      password: {
        badge: "Paso 7 • Tu Acceso a la Plataforma",
        title: "Crea una contraseña para tu cuenta en LeFri",
        subtitle: "Con este correo y contraseña tendrás acceso directo como miembro a la plataforma para dar seguimiento a la colaboración.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmación",
        title: "Confirma tu contraseña",
        subtitle: "Al confirmar, tu propuesta quedará registrada y entrarás de inmediato a la plataforma sin pasos adicionales.",
        placeholder: "••••••••"
      }
    },
    supportQuestions: {
      name: {
        badge: "Apoyo • Paso 1",
        title: "¿Cuál es tu nombre o el de tu entidad?",
        subtitle: "Agradecemos tu interés en impulsar la democratización del acceso a derechos.",
        placeholder: "Ej. Juan Morales / Fondo Cívico"
      },
      area: {
        badge: "Apoyo • Paso 2",
        title: "¿Cómo te gustaría apoyar el proyecto LeFri?",
        subtitle: "Cada aporte permite mantener el servicio 100% gratuito para la ciudadanía.",
        options: [
          { label: "Financiamiento o Donación para Operaciones", value: "funding", desc: "Infraestructura, servidores e investigación legal" },
          { label: "Difusión Institucional y Medios", value: "outreach", desc: "Campañas ciudadanas y cobertura en comunidades" },
          { label: "Patrocinio Pro-Bono o Red Legal", value: "probono", desc: "Canalización de casos vulnerables a defensores" },
          { label: "Infraestructura Tecnológica y Servidores", value: "tech_support", desc: "Servicios en la nube, APIs y conectividad" }
        ]
      },
      email: {
        badge: "Apoyo • Paso 3",
        title: "¿Cuál es tu correo electrónico?",
        subtitle: "Te enviaremos la carpeta del proyecto de Fundación Underlife y opciones de canalización.",
        placeholder: "nombre@entidad.org"
      },
      phone: {
        badge: "Apoyo • Paso 4",
        title: "Teléfono o WhatsApp (Opcional)",
        subtitle: "Para coordinar detalles específicos con la coordinación ejecutiva.",
        placeholder: "+593 99 999 9999"
      },
      message: {
        badge: "Apoyo • Paso 5",
        title: "Mensaje o comentarios adicionales",
        subtitle: "Comparte con nosotros cualquier expectativa, consulta o detalle sobre tu apoyo.",
        placeholder: "Escribe aquí tu mensaje..."
      },
      password: {
        badge: "Paso 6 • Acceso Inmediato",
        title: "Crea tu contraseña para ingresar a LeFri",
        subtitle: "Podrás acceder al sistema, consultar derechos y visualizar el avance del proyecto.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmación",
        title: "Confirma tu contraseña",
        subtitle: "Al pulsar finalizar, tu apoyo quedará canalizado y entrarás directamente a la aplicación.",
        placeholder: "••••••••"
      }
    }
  },

  en: {
    flowTitle: {
      login: "Sign In to LeFri",
      register: "New Citizen Registration",
      collaborate: "Collaboration & Partnership Proposal",
      support: "Project Support & Sustainability"
    },
    stepOf: (current, total) => `Step ${current} of ${total}`,
    enterHint: "to proceed",
    pressEnter: "Press",
    textareaHint: "You can explain your thoughts with complete confidence.",
    validations: {
      validEmail: "Please enter a valid email address.",
      requiredField: "Please fill out this field.",
      passwordLength: "Password must have at least 6 characters.",
      passwordMatch: "Passwords do not match. Please review."
    },
    buttons: {
      back: "Back",
      continue: "Continue",
      submitLogin: "Sign In to LeFri",
      submitRegister: "Create Account & Enter",
      submitCollaborate: "Submit Proposal & Enter",
      submitSupport: "Confirm Support & Enter",
      saving: "Saving and connecting...",
      switchToRegister: "Create a new account?",
      switchToLogin: "Already have an account? Sign In",
      loginWithExisting: "Sign In with this account",
      orGoogle: "Or continue with Google",
      google: "Google",
      classicForm: "Classic Form",
      conversationalForm: "Guided Flow",
      backToHome: "Back to Home"
    },
    messages: {
      welcomeBack: "Welcome back!",
      welcomeBackDesc: "Credentials verified. Redirecting to your dashboard...",
      registered: "Welcome to LeFri!",
      registeredDesc: "Your account was successfully created. Entering...",
      proposalReceived: "Collaboration proposal received!",
      proposalReceivedDesc: "Your account has been created and you are redirected to the platform.",
      supportReceived: "Support pledge received!",
      supportReceivedDesc: "Thank you for your support. Your account is ready and you enter directly.",
      sessionWithExisting: "Signed in with your existing account. Welcome.",
      userAlreadyExists: "An account already exists with this email. Your proposal was saved, please sign in with your password.",
      userAlreadyExistsAccount: "An account already exists with this email. You can sign in directly or with Google.",
      invalidCredentials: "Invalid credentials or email not found. Please review.",
      googleError: "Failed to authenticate with Google."
    },
    loginQuestions: {
      email: {
        badge: "Step 1 • Identification",
        title: "Welcome back! What is your registered email?",
        subtitle: "Enter the email associated with your LeFri account.",
        placeholder: "name@example.com"
      },
      password: {
        badge: "Step 2 • Security",
        title: "Enter your access password",
        subtitle: "Your consultations and legal files are protected with high-grade encryption.",
        placeholder: "••••••••"
      }
    },
    registerQuestions: {
      name: {
        badge: "Step 1 • Profile",
        title: "What is your full name?",
        subtitle: "We will personalize your legal consultations and civic guides with this name.",
        placeholder: "e.g. Maria Perez"
      },
      email: {
        badge: "Step 2 • Contact",
        title: "What is your email address?",
        subtitle: "You will receive follow-up notes on your rights and civic consultations.",
        placeholder: "maria@example.com"
      },
      legalNeed: {
        badge: "Step 3 • Consultation Topic",
        title: "What legal area do you need guidance on today?",
        subtitle: "This calibrates our assistant with the right constitutional and legal principles.",
        options: [
          { label: "Labor & Employment (Dismissal, Wages)", value: "laboral", desc: "Workplace rights and social security" },
          { label: "Family, Children & Support", value: "familia", desc: "Family guarantees and protection" },
          { label: "Housing, Leases & Contracts", value: "civil", desc: "Right to housing and agreements" },
          { label: "Fundamental Rights & Urgent Inquiries", value: "penal", desc: "Personal liberty and due process" }
        ]
      },
      password: {
        badge: "Step 4 • Password",
        title: "Create your access password",
        subtitle: "Minimum 6 characters to access your account immediately.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final Step • Confirmation",
        title: "Confirm your password",
        subtitle: "Re-enter it to enter the platform without friction.",
        placeholder: "••••••••"
      }
    },
    collaborateQuestions: {
      name: {
        badge: "Partnership • Step 1",
        title: "What is your name or your team's name?",
        subtitle: "We want to know the person or organization interested in collaborating with LeFri.",
        placeholder: "e.g. Dr. Carmen Morales / Civic Group"
      },
      organization: {
        badge: "Partnership • Step 2",
        title: "Do you represent an organization, foundation, or university?",
        subtitle: "If you collaborate independently or as a professional, you can enter 'Independent'.",
        placeholder: "e.g. Central University / Green Foundation / Independent"
      },
      area: {
        badge: "Partnership • Step 3",
        title: "In which area would you like to collaborate?",
        subtitle: "Choose the path where your expertise can generate the greatest civic impact.",
        options: [
          { label: "Legal Validation & Content", value: "legal_validation", desc: "Technical review of statutes and plain explanations" },
          { label: "Community Implementation & Fieldwork", value: "community", desc: "Workshops, grassroots outreach, and civic leaders" },
          { label: "Research & Impact Assessment", value: "research", desc: "Studies on access to justice and metrics" },
          { label: "Accessibility & Inclusion", value: "accessibility", desc: "Support for disabilities and native languages" },
          { label: "Technology & Data Architecture", value: "tech", desc: "Language models, agents, and systems" }
        ]
      },
      email: {
        badge: "Partnership • Step 4",
        title: "What email can we reach you at?",
        subtitle: "We will send you details on the collaboration roadmap and next steps.",
        placeholder: "contact@organization.org"
      },
      phone: {
        badge: "Partnership • Step 5",
        title: "Phone or WhatsApp contact (Optional)",
        subtitle: "Helps us coordinate brief introductory syncs with the Underlife Foundation team.",
        placeholder: "+1 555 123 4567"
      },
      message: {
        badge: "Partnership • Step 6",
        title: "Tell us briefly about your collaboration idea",
        subtitle: "What initiatives, resources, or goals would you like to share or connect with LeFri?",
        placeholder: "Write here the main details of your interest in collaborating..."
      },
      password: {
        badge: "Step 7 • Platform Access",
        title: "Create a password for your LeFri account",
        subtitle: "You will gain direct member access to track the partnership and use the platform.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmation",
        title: "Confirm your password",
        subtitle: "Upon confirmation, your proposal will be stored and you will enter the app immediately.",
        placeholder: "••••••••"
      }
    },
    supportQuestions: {
      name: {
        badge: "Support • Step 1",
        title: "What is your name or entity's name?",
        subtitle: "We appreciate your interest in advancing democratized access to constitutional rights.",
        placeholder: "e.g. John Morales / Civic Fund"
      },
      area: {
        badge: "Support • Step 2",
        title: "How would you like to support the LeFri project?",
        subtitle: "Every contribution keeps the civic platform 100% free for everyone.",
        options: [
          { label: "Funding or Operational Donation", value: "funding", desc: "Infrastructure, server compute, and legal research" },
          { label: "Institutional Outreach & Media", value: "outreach", desc: "Civic advocacy campaigns and community coverage" },
          { label: "Pro-Bono Sponsorship / Legal Network", value: "probono", desc: "Connecting vulnerable cases to qualified defenders" },
          { label: "Tech Infrastructure & Cloud Compute", value: "tech_support", desc: "Cloud services, APIs, and connectivity" }
        ]
      },
      email: {
        badge: "Support • Step 3",
        title: "What is your email address?",
        subtitle: "We will send you the Underlife Foundation project deck and allocation report.",
        placeholder: "name@entity.org"
      },
      phone: {
        badge: "Support • Step 4",
        title: "Phone or WhatsApp (Optional)",
        subtitle: "To coordinate specific logistics with our executive coordination team.",
        placeholder: "+1 555 123 4567"
      },
      message: {
        badge: "Support • Step 5",
        title: "Message or additional comments",
        subtitle: "Share any thoughts, questions, or details regarding your support with us.",
        placeholder: "Write your message here..."
      },
      password: {
        badge: "Step 6 • Immediate Access",
        title: "Create your password to enter LeFri",
        subtitle: "You will have access to explore constitutional rights and follow project progress.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmation",
        title: "Confirm your password",
        subtitle: "Once submitted, your support will be routed and you enter directly into the app.",
        placeholder: "••••••••"
      }
    }
  },

  pt: {
    flowTitle: {
      login: "Acesso ao LeFri",
      register: "Cadastro de Novo Cidadão",
      collaborate: "Proposta de Colaboração e Parceria",
      support: "Apoio e Sustentabilidade do Projeto"
    },
    stepOf: (current, total) => `Etapa ${current} de ${total}`,
    enterHint: "para avançar",
    pressEnter: "Pressione",
    textareaHint: "Você pode detalhar suas ideias com total tranquilidade.",
    validations: {
      validEmail: "Por favor insira um e-mail válido.",
      requiredField: "Por favor preencha este campo.",
      passwordLength: "A senha deve ter pelo menos 6 caracteres.",
      passwordMatch: "As senhas não coincidem. Por favor verifique."
    },
    buttons: {
      back: "Voltar",
      continue: "Continuar",
      submitLogin: "Entrar no LeFri",
      submitRegister: "Criar Conta e Entrar",
      submitCollaborate: "Enviar Proposta e Entrar",
      submitSupport: "Confirmar Apoio e Entrar",
      saving: "Salvando e conectando...",
      switchToRegister: "Criar uma nova conta?",
      switchToLogin: "Já tem uma conta? Entrar",
      loginWithExisting: "Entrar com esta conta",
      orGoogle: "Ou continuar com o Google",
      google: "Google",
      classicForm: "Formulário Clássico",
      conversationalForm: "Experiência Guiada",
      backToHome: "Voltar para o Início"
    },
    messages: {
      welcomeBack: "Bem-vindo de volta!",
      welcomeBackDesc: "Acesso verificado. Redirecionando para o seu painel...",
      registered: "Bem-vindo ao LeFri!",
      registeredDesc: "Sua conta foi criada com sucesso. Entrando...",
      proposalReceived: "Proposta de colaboração recebida!",
      proposalReceivedDesc: "Sua conta foi criada e você entra diretamente na plataforma.",
      supportReceived: "Apoio registrado com sucesso!",
      supportReceivedDesc: "Obrigado pelo seu apoio. Sua conta foi criada e você acessa o sistema.",
      sessionWithExisting: "Sessão iniciada com sua conta existente. Bem-vindo.",
      userAlreadyExists: "Já existe uma conta com este e-mail. A proposta foi salva, por favor faça login com sua senha habitual.",
      userAlreadyExistsAccount: "Já existe uma conta com este e-mail. Você pode entrar diretamente com sua senha ou com o Google.",
      invalidCredentials: "Credenciais inválidas ou e-mail não encontrado. Por favor verifique.",
      googleError: "Erro ao autenticar com o Google."
    },
    loginQuestions: {
      email: {
        badge: "Etapa 1 • Identificação",
        title: "Bem-vindo de volta! Qual é o seu e-mail cadastrado?",
        subtitle: "Digite o e-mail associado à sua conta do LeFri.",
        placeholder: "nome@exemplo.com"
      },
      password: {
        badge: "Etapa 2 • Segurança",
        title: "Digite sua senha de acesso",
        subtitle: "Suas consultas e processos jurídicos são protegidos com criptografia de alto nível.",
        placeholder: "••••••••"
      }
    },
    registerQuestions: {
      name: {
        badge: "Etapa 1 • Perfil",
        title: "Qual é o seu nome completo?",
        subtitle: "Personalizaremos suas orientações cívicas e consultas com este nome.",
        placeholder: "Ex. Maria Silva"
      },
      email: {
        badge: "Etapa 2 • Contato",
        title: "Qual é o seu e-mail?",
        subtitle: "Você receberá aqui o acompanhamento dos seus direitos e consultas.",
        placeholder: "maria@exemplo.com"
      },
      legalNeed: {
        badge: "Etapa 3 • Área de Consulta",
        title: "Em qual área jurídica você precisa de orientação hoje?",
        subtitle: "Isso calibra nosso assistente com os princípios constitucionais pertinentes.",
        options: [
          { label: "Trabalhista (Trabalho, Salários, Demissão)", value: "laboral", desc: "Direitos do trabalho e previdência" },
          { label: "Família, Infância e Pensão", value: "familia", desc: "Garantias e proteção familiar" },
          { label: "Moradia, Contratos e Aluguel", value: "civil", desc: "Direito à moradia e acordos" },
          { label: "Direitos Fundamentais / Urgência", value: "penal", desc: "Liberdade pessoal e devido processo legal" }
        ]
      },
      password: {
        badge: "Etapa 4 • Senha",
        title: "Crie sua senha de acesso",
        subtitle: "Mínimo de 6 caracteres para acessar imediatamente sua conta.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Etapa Final • Confirmação",
        title: "Confirme sua senha",
        subtitle: "Digite novamente para entrar diretamente na plataforma sem atrito.",
        placeholder: "••••••••"
      }
    },
    collaborateQuestions: {
      name: {
        badge: "Parceria • Etapa 1",
        title: "Qual é o seu nome ou o da sua equipe?",
        subtitle: "Queremos conhecer a pessoa ou organização interessada em colaborar com o LeFri.",
        placeholder: "Ex. Dra. Carmen Morales / Coletivo Cívico"
      },
      organization: {
        badge: "Parceria • Etapa 2",
        title: "Você representa alguma organização, fundação ou universidade?",
        subtitle: "Se você colabora de forma independente ou particular, pode indicar 'Independente'.",
        placeholder: "Ex. Universidade Central / Fundação Raízes / Independente"
      },
      area: {
        badge: "Parceria • Etapa 3",
        title: "Em qual área você gostaria de colaborar?",
        subtitle: "Selecione a frente onde sua experiência pode gerar maior impacto cidadão.",
        options: [
          { label: "Validação Jurídica e Conteúdo", value: "legal_validation", desc: "Revisão técnica de normas e linguagem simples" },
          { label: "Implementação Comunitária e Campo", value: "community", desc: "Oficinas, divulgação local e lideranças cívicas" },
          { label: "Pesquisa e Avaliação de Impacto", value: "research", desc: "Estudos de acesso à justiça e métricas" },
          { label: "Acessibilidade e Inclusão", value: "accessibility", desc: "Adaptação para deficiências e idiomas originários" },
          { label: "Desenvolvimento Tecnológico e Dados", value: "tech", desc: "Modelos de linguagem, agentes e integrações" }
        ]
      },
      email: {
        badge: "Parceria • Etapa 4",
        title: "Em qual e-mail podemos entrar em contato?",
        subtitle: "Enviaremos os detalhes do modelo de colaboração e os próximos passos.",
        placeholder: "contato@organizacao.org"
      },
      phone: {
        badge: "Parceria • Etapa 5",
        title: "Telefone ou WhatsApp de contato (Opcional)",
        subtitle: "Nos ajuda a coordenar breves reuniões de alinhamento com a equipe da Fundação Underlife.",
        placeholder: "+55 11 99999-9999"
      },
      message: {
        badge: "Parceria • Etapa 6",
        title: "Conte-nos brevemente sobre sua proposta de colaboração",
        subtitle: "Quais iniciativas, ideias ou recursos você gostaria de articular com o LeFri?",
        placeholder: "Escreva aqui os principais detalhes do seu interesse em colaborar..."
      },
      password: {
        badge: "Etapa 7 • Seu Acesso à Plataforma",
        title: "Crie uma senha para sua conta no LeFri",
        subtitle: "Com este e-mail e senha você terá acesso direto como membro para acompanhar a parceria.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmação",
        title: "Confirme sua senha",
        subtitle: "Ao confirmar, sua proposta será registrada e você entrará imediatamente na plataforma.",
        placeholder: "••••••••"
      }
    },
    supportQuestions: {
      name: {
        badge: "Apoio • Etapa 1",
        title: "Qual é o seu nome ou o da sua entidade?",
        subtitle: "Agradecemos seu interesse em impulsionar o acesso universal aos direitos constitucionais.",
        placeholder: "Ex. João Morales / Fundo Cívico"
      },
      area: {
        badge: "Apoio • Etapa 2",
        title: "Como você gostaria de apoiar o projeto LeFri?",
        subtitle: "Cada contribuição ajuda a manter a plataforma 100% gratuita para a cidadania.",
        options: [
          { label: "Financiamento ou Doação para Operações", value: "funding", desc: "Infraestrutura, servidores e pesquisa jurídica" },
          { label: "Divulgação Institucional e Mídia", value: "outreach", desc: "Campanhas de conscientização e cobertura comunitária" },
          { label: "Patrocínio Pro-Bono ou Rede Jurídica", value: "probono", desc: "Encaminhamento de casos vulneráveis a defensores" },
          { label: "Infraestrutura Tecnológica e Servidores", value: "tech_support", desc: "Serviços em nuvem, APIs e conectividade" }
        ]
      },
      email: {
        badge: "Apoio • Etapa 3",
        title: "Qual é o seu e-mail?",
        subtitle: "Enviaremos o dossiê institucional da Fundação Underlife e opções de canalização.",
        placeholder: "nome@entidade.org"
      },
      phone: {
        badge: "Apoio • Etapa 4",
        title: "Telefone ou WhatsApp (Opcional)",
        subtitle: "Para coordenar detalhes específicos com a coordenação executiva.",
        placeholder: "+55 11 99999-9999"
      },
      message: {
        badge: "Apoio • Etapa 5",
        title: "Mensagem ou comentários adicionais",
        subtitle: "Compartilhe conosco quaisquer expectativas, dúvidas ou detalhes sobre o apoio.",
        placeholder: "Escreva aqui sua mensagem..."
      },
      password: {
        badge: "Etapa 6 • Acesso Imediato",
        title: "Crie sua senha para ingressar no LeFri",
        subtitle: "Você poderá acessar a plataforma, consultar direitos e acompanhar o progresso.",
        placeholder: "••••••••"
      },
      confirmPassword: {
        badge: "Final • Confirmação",
        title: "Confirme sua senha",
        subtitle: "Ao concluir, seu apoio será direcionado e você entrará diretamente na aplicação.",
        placeholder: "••••••••"
      }
    }
  }
};

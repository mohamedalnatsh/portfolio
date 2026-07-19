/**
 * Mohammed AL-Natsha — Portfolio Main Frontend Script
 * Unified logic for Language Toggle, Country Codes, and Form Submission
 */

const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_projects: "Projects",
    nav_contact: "Contact",
    download_cv: "Download CV",
    nav_toggle: "AR",

    // Home
    hero_eyebrow: "Portfolio",
    hero_title: "Mohammed AL-Natsha",
    hero_role: "Software & Front-End Developer",
    hero_bio:
      "<strong>Software & Front-End Developer</strong> with a strong background in Scientific studies (95.4% GPA). Developed <strong>15+ deployed GitHub projects</strong> encompassing responsive web architectures, automated secure bots, and network security scripts. Experienced in technical system optimization, and cross-functional team coordination to deliver production-ready software.",
    hero_cta_projects: "View My Projects",
    hero_cta_contact: "Get in Touch",

    // Home - Domains
    domain_security_title: "Secure Your Assets",
    domain_security_sub:
      "Hardening, audits, and network security scripts that keep systems resilient.",
    domain_web_title: "Build Your Web Presence",
    domain_web_sub:
      "Responsive, accessible, high-performance web interfaces built from the ground up.",
    domain_automation_title: "Automate Your Workflow",
    domain_automation_sub:
      "Secure bots and pipelines that remove repetitive work and speed up teams.",

    // Tech Labels
    tech_cybersecurity: "Cybersecurity",
    tech_network: "Network Auditing",
    tech_python: "Python",
    tech_html_css: "HTML5 & CSS3",
    tech_vanilla_js: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_performance: "Performance Optimization",
    tech_uiux: "UI/UX Redesign",
    tech_node: "Node.js",
    tech_docker: "Docker",
    tech_automation: "Task Automation",
    tech_apis: "API Integration",

    // Projects Page
    projects_title: "Selected Projects",
    projects_hero_desc:
      "Security tools, web interfaces, and automation bots — a snapshot of what I've been building and shipping.",

    section_security_title: "Security Tools",
    section_security_desc:
      "Advanced security auditing utilities, vulnerability scanners, designed to protect infrastructure against active exploitation.",

    section_web_title: "Web Interfaces",
    section_web_desc:
      "Modern, lightweight, and fast websites designed to deliver a polished, professional experience.",

    section_bots_title: "Bots",
    section_bots_desc:
      "Automation for everyday operations through intelligent bots that support communication, tracking, and workflow management.",

    // Project Details
    proj_ua_title: "LB-LINK Security Auditor",
    proj_ua_desc:
      "A specialized router security auditing and botnet remediation utility built to detect critical vulnerabilities in LB-LINK firmware and instantly sanitize compromised hosts from remote command injections.",
    proj_ecom_title: "E-commerce store",
    proj_ecom_desc:
      "Modern e-commerce dashboard with a flexible layout and advanced UI patterns.",
    proj_portfolio_title: "Minimalist Portfolio",
    proj_portfolio_desc:
      "A clean personal site focused on simplicity, clarity, and a professional feel.",
    proj_crud_title: "crud-js",
    proj_crud_desc:
      "A practical CRUD app that demonstrates clear data management inside a polished UI.",
    proj_cafe_title: "Cafe page",
    proj_cafe_desc:
      "A visually crafted coffee-shop landing page with a smooth user experience.",
    proj_carco_title: "CarCo",
    proj_carco_desc:
      "A modern automotive site interface that reflects the brand identity clearly and professionally.",
    proj_islamic_title: "Islamic Center",
    proj_islamic_desc:
      "A calm, content-focused site for an Islamic center with clear navigation and readable typography.",
    proj_opticore_title: "OptiCore Agency",
    proj_opticore_desc:
      "A high-performance, fully accessible digital presence featuring a multilingual i18n engine, serverless lead pipeline, and 100% perfect audit scores.",
    proj_masao_title: "Project Masao",
    proj_masao_desc:
      "A polished multi-section web project with a consistent visual language.",
    proj_form_title: "Form Template",
    proj_form_desc:
      "A reusable, styled form template with validation-ready structure.",
    proj_eye_title: "Eye Hospital Bot",
    proj_eye_desc:
      "A complete software system that automates medical appointment booking and tracks patient records.",
    proj_fortnite_title: "Fortnite Update Bot",
    proj_fortnite_desc:
      "A smart bot that tracks Fortnite updates and server status, sending instant notifications.",

    action_preview: "Preview",
    action_github: "GitHub",

    // Contact Page
    contact_title: "Get in Touch",
    contact_desc:
      "Tell me about your project — I usually reply within one business day.",
    field_name: "Name",
    field_email: "Email",
    field_company: "Company (optional)",
    field_whatsapp: "WhatsApp Number",
    field_service: "Service",
    field_message: "Message",
    placeholder_name: "Your full name",
    placeholder_email: "you@example.com",
    placeholder_company: "Your company name",
    placeholder_whatsapp: "9 digits",
    placeholder_message: "Share a few details about your project…",
    service_automation: "Automate Your Workflow",
    service_web: "Build Your Web Presence",
    service_security: "Secure Your Assets",
    service_other: "Other",
    btn_send: "Send Message",
    btn_sending: "Sending…",

    // Footer
    footer_tag: "© {year} Mohammed AL-Natsha | Built with love ❤️",

    // 404
    error_404_title: "404",
    error_404_desc: "The page you're looking for doesn't exist.",
    error_404_btn: "Back to Home",
    error_generic_title: "Something went wrong",
    error_generic_desc: "Try refreshing or head back home.",
    error_generic_retry: "Try again",
    error_generic_home: "Go home",
  },
  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_projects: "المشاريع",
    nav_contact: "اتصل بي",
    download_cv: "تحميل الـ CV",
    nav_toggle: "EN",

    // Home
    hero_eyebrow: "معرض الأعمال",
    hero_title: "محمد النتشة",
    hero_role: "مطور برمجيات وواجهات أمامية",
    hero_bio:
      "<strong>مطور برمجيات وواجهات أمامية</strong> بخلفية قوية في الدراسات العلمية (معدل 95.4%). قمت بتطوير <strong>أكثر من 15 مشروعاً منشورة على GitHub</strong>  تشمل معمارية الويب المستجيبة، وبوتات الأتمتة الآمنة، وسكربتات أمن الشبكات. خبير في تحسين الأنظمة التقنية وتنسيق الفرق لتقديم برمجيات جاهزة للإنتاج.",
    hero_cta_projects: "عرض مشاريعي",
    hero_cta_contact: "تواصل معي",

    // Home - Domains
    domain_security_title: "تأمين أصولك الرقمية",
    domain_security_sub:
      "سكربتات حماية وتدقيق وأمن الشبكات التي تحافظ على مرونة الأنظمة.",
    domain_web_title: "بناء تواجدك على الويب",
    domain_web_sub:
      "واجهات ويب مستجيبة، سهلة الوصول، وعالية الأداء مبنية من الصفر.",
    domain_automation_title: "أتمتة سير عملك",
    domain_automation_sub:
      "بوتات ومسارات عمل آمنة تزيل المهام المتكررة وتسرع أداء الفرق.",

    // Tech Labels
    tech_cybersecurity: "Cybersecurity",
    tech_network: "Network Auditing",
    tech_python: "Python",
    tech_html_css: "HTML5 & CSS3",
    tech_vanilla_js: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_performance: "Performance Optimization",
    tech_uiux: "UI/UX Redesign",
    tech_node: "Node.js",
    tech_docker: "Docker",
    tech_automation: "Task Automation",
    tech_apis: "API Integration",

    // Projects Page
    projects_title: "مشاريع مختارة",
    projects_hero_desc:
      "أدوات أمنية، واجهات ويب، وبوتات أتمتة — لمحة عما قمت ببنائه وإطلاقه.",

    section_security_title: "أدوات الأمن",
    section_security_desc:
      "أدوات متقدمة لتدقيق الأمان وفحص الثغرات الشبكية، وتطهير الشبكات من الاختراقات النشطة.",

    section_web_title: "واجهات الويب",
    section_web_desc:
      "مواقع حديثة، خفيفة وسريعة مصممة لتقديم تجربة احترافية ومصقولة.",

    section_bots_title: "البوتات",
    section_bots_desc:
      "أتمتة العمليات اليومية من خلال بوتات ذكية تدعم التواصل والتتبع وإدارة سير العمل.",

    // Project Details
    proj_ua_title: "LB-LINK Security Auditor",
    proj_ua_desc:
      "أداة متخصصة لتدقيق أمن الراوتر ومعالجة شبكات البوت نت، مصممة لاكتشاف الثغرات الحرجة في برمجيات LB-LINK وتطهير الأجهزة المصابة فوراً من حقن الأوامر عن بعد.",
    proj_ecom_title: "متجر تجارة إلكترونية",
    proj_ecom_desc:
      "لوحة تحكم حديثة للتجارة الإلكترونية مع تخطيط مرن وأنماط واجهة مستخدم متقدمة.",
    proj_portfolio_title: "معرض أعمال بسيط",
    proj_portfolio_desc:
      "موقع شخصي نظيف يركز على البساطة والوضوح والمظهر الاحترافي.",
    proj_crud_title: "crud-js",
    proj_crud_desc:
      "تطبيق CRUD عملي يوضح إدارة البيانات بوضوح داخل واجهة مستخدم مصقولة.",
    proj_cafe_title: "صفحة المقهى",
    proj_cafe_desc: "صفحة هبوط لمقهى مصممة بصرياً بعناية مع تجربة مستخدم سلسة.",
    proj_carco_title: "CarCo",
    proj_carco_desc:
      "واجهة موقع سيارات حديثة تعكس هوية العلامة التجارية بوضوح واحترافية.",
    proj_islamic_title: "المركز الإسلامي",
    proj_islamic_desc:
      "موقع يركز على المحتوى لمركز إسلامي مع تنقل واضح وطباعة مريحة للقراءة.",
    proj_opticore_title: "وكالة OptiCore",
    proj_opticore_desc:
      "تواجد رقمي عالي الأداء وسهل الوصول بالكامل، يتميز بمحرك i18n متعدد اللغات، ومسار عملاء محتملين بدون خادم، ونتائج تدقيق مثالية بنسبة 100%.",
    proj_masao_title: "مشروع Masao",
    proj_masao_desc: "مشروع ويب متعدد الأقسام مصقول بلغة بصرية متسقة.",
    proj_form_title: "نموذج جاهز",
    proj_form_desc:
      "نموذج قابل لإعادة الاستخدام مع هيكل جاهز للتحقق من البيانات.",
    proj_eye_title: "بوت مستشفى العيون",
    proj_eye_desc:
      "نظام برمجيات كامل يقوم بأتمتة حجز المواعيد الطبية وتتبع سجلات المرضى.",
    proj_fortnite_title: "بوت تحديثات فورتنايت",
    proj_fortnite_desc:
      "بوت ذكي يتتبع تحديثات فورتنايت وحالة الخادم، ويرسل إشعارات فورية.",

    action_preview: "معاينة",
    action_github: "GitHub",

    // Contact Page
    contact_title: "تواصل معي",
    contact_desc: "أخبرني عن مشروعك ",
    field_name: "الاسم",
    field_email: "البريد الإلكتروني",
    field_company: "الشركة (اختياري)",
    field_whatsapp: "رقم الواتساب",
    field_service: "الخدمة",
    field_message: "الرسالة",
    placeholder_name: "اسمك الكامل",
    placeholder_email: "you@example.com",
    placeholder_company: "اسم شركتك",
    placeholder_whatsapp: "9 أرقام",
    placeholder_message: "شارك بعض التفاصيل حول مشروعك…",
    service_automation: "أتمتة سير العمل",
    service_web: "بناء تواجدك على الويب",
    service_security: "تأمين أصولك الرقمية",
    service_other: "أخرى",
    btn_send: "إرسال الرسالة",
    btn_sending: "جاري الإرسال…",

    quick_info_badge: "معلومات سريعة",
    quick_info_title: "دعنا نبني شيئاً استثنائياً معاً",
    quick_info_desc:
      "هل تحتاج إلى صفحة هبوط مصقولة، أو أتمتة آمنة، أو تجربة ويب عالية الأداء؟ شارك بعض التفاصيل وسأرسم الخطة المناسبة.",
    quick_info_replies: "الرد خلال يوم عمل واحد",

    modal_success_title: "تم إرسال الرسالة",
    modal_success_desc: "شكراً لتواصلك! سأرد عليك في غضون يوم عمل واحد.",
    modal_success_btn: "رائع!",
    modal_error_title: "حدث خطأ ما",
    modal_error_desc:
      "لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى بعد قليل.",
    modal_error_btn: "إعادة المحاولة",

    // Footer
    footer_tag: "© {year} محمد النتشة | بُني بكل حب ❤️",

    // 404
    error_404_title: "404",
    error_404_desc: "الصفحة التي تبحث عنها غير موجودة.",
    error_404_btn: "العودة للرئيسية",
    error_generic_title: "حدث خطأ ما",
    error_generic_desc: "حاول تحديث الصفحة أو العودة للرئيسية.",
    error_generic_retry: "إعادة المحاولة",
    error_generic_home: "الرئيسية",
  },
};

const countryDialCodes = [
  { code: "PS", name: "Palestine", dial: "+970", flag: "🇵🇸" },
  { code: "IL", name: "Israel", dial: "+972", flag: "🇮🇱" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { code: "JO", name: "Jordan", dial: "+962", flag: "🇯🇴" },
  { code: "EG", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { code: "QA", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { code: "KW", name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { code: "BH", name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { code: "OM", name: "Oman", dial: "+968", flag: "🇴🇲" },
  { code: "LB", name: "Lebanon", dial: "+961", flag: "🇱🇧" },
  { code: "SY", name: "Syria", dial: "+963", flag: "🇸🇾" },
  { code: "IQ", name: "Iraq", dial: "+964", flag: "🇮🇶" },
  { code: "YE", name: "Yemen", dial: "+967", flag: "🇾🇪" },
  { code: "TR", name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { code: "MA", name: "Morocco", dial: "+212", flag: "🇲🇦" },
  { code: "DZ", name: "Algeria", dial: "+213", flag: "🇩🇿" },
  { code: "TN", name: "Tunisia", dial: "+216", flag: "🇹🇳" },
  { code: "LY", name: "Libya", dial: "+218", flag: "🇱🇾" },
  { code: "SD", name: "Sudan", dial: "+249", flag: "🇸🇩" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", dial: "+32", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { code: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { code: "NO", name: "Norway", dial: "+47", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", dial: "+45", flag: "🇩🇰" },
  { code: "FI", name: "Finland", dial: "+358", flag: "🇫🇮" },
  { code: "IE", name: "Ireland", dial: "+353", flag: "🇮🇪" },
  { code: "PT", name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { code: "GR", name: "Greece", dial: "+30", flag: "🇬🇷" },
  { code: "PL", name: "Poland", dial: "+48", flag: "🇵🇱" },
  { code: "RU", name: "Russia", dial: "+7", flag: "🇷🇺" },
  { code: "UA", name: "Ukraine", dial: "+380", flag: "🇺🇦" },
  { code: "RO", name: "Romania", dial: "+40", flag: "🇷🇴" },
  { code: "CZ", name: "Czech Republic", dial: "+420", flag: "🇨🇿" },
  { code: "AT", name: "Austria", dial: "+43", flag: "🇦🇹" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { code: "NZ", name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { code: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { code: "ID", name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { code: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { code: "TH", name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { code: "PH", name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { code: "VN", name: "Vietnam", dial: "+84", flag: "🇻🇳" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { code: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { code: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", dial: "+57", flag: "🇨🇴" },
];

const CLOUDFLARE_WORKER_URL =
  "https://telgram-bot.contact-opticore.workers.dev/";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCountrySelect();
  initContactForm();
  updateYear();
  highlightActiveLink();
});

function updateYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearElements.forEach((el) => (el.textContent = year));
}

function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initLanguage() {
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentLang = document.documentElement.lang;
      const nextLang = currentLang === "en" ? "ar" : "en";
      applyLanguage(nextLang);
      localStorage.setItem("lang", nextLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key].replace(
          "{year}",
          new Date().getFullYear(),
        );
      }
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update toggle button text
  const toggleBtnSpan = document.querySelector("#langToggle span");
  if (toggleBtnSpan) {
    toggleBtnSpan.textContent = translations[lang].nav_toggle;
  }
}

function initCountrySelect() {
  const select = document.getElementById("countryCode");
  if (!select) return;

  countryDialCodes.forEach((c) => {
    const option = document.createElement("option");
    option.value = c.dial;
    option.textContent = `${c.flag} ${c.dial}`;
    if (c.code === "PS") option.selected = true;
    select.appendChild(option);
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const modalSuccess = document.getElementById("modalSuccess");
  const modalError = document.getElementById("modalError");
  const closeModalBtns = document.querySelectorAll(
    ".modal-close, .modal-overlay, .error-modal-retry, .error-modal-overlay",
  );

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (
        e.target === btn ||
        btn.classList.contains("modal-close") ||
        btn.classList.contains("error-modal-retry")
      ) {
        modalSuccess?.classList.remove("active");
        modalError?.classList.remove("active");
      }
    });
  });

  /* === [CONTACT_FORM_SUBMISSION] START === */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  
  // 1. تجميع الخدمات في مصفوفة أولاً
  const selectedServices = Array.from(
    form.querySelectorAll('input[name="service"]:checked')
  ).map((cb) => cb.value);

  const data = {
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    company: formData.get("company").trim(),
    whatsapp: `${formData.get("countryCode")} ${formData.get("whatsapp").trim()}`,
    
    // 2. إرسال الصيغتين لضمان التوافق الكامل مع البوت والإيميل
    service: selectedServices,                 // مصفوفة من أجل الفاليديشن في الووركر
    services: selectedServices.join(", "),     // نص مدمج جاهز للطباعة في التلجرام والإيميل
    
    message: formData.get("message").trim(),
  };
/* === [CONTACT_FORM_SUBMISSION] END === */

    // Validation
    let hasError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const markError = (id, condition) => {
      const field = document.getElementById(id).closest(".field");
      if (condition) {
        field.classList.add("invalid");
        hasError = true;
      } else {
        field.classList.remove("invalid");
      }
    };

    markError("name", data.name.length === 0);
    markError("email", !emailRegex.test(data.email));
    markError(
      "whatsapp",
      data.whatsapp.split(" ")[1].length !== 9 ||
        !/^\d{9}$/.test(data.whatsapp.split(" ")[1]),
    );
    markError("message", data.message.length === 0);

    // Service validation
    const serviceField = form.querySelector(".field:has(.service-options)");
    if (data.service.length === 0) {
      serviceField.classList.add("invalid");
      hasError = true;
    } else {
      serviceField.classList.remove("invalid");
    }

    if (hasError) {
      const firstInvalid = form.querySelector(".field.invalid");
      if (firstInvalid)
        firstInvalid.querySelector("input, textarea, select")?.focus();
      return;
    }

    // Submit
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;
    const currentLang = document.documentElement.lang;

    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${translations[currentLang].btn_sending}</span>`;

    try {
      const response = await fetch(CLOUDFLARE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        modalSuccess?.classList.add("active");
      } else {
        modalError?.classList.add("active");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      modalError?.classList.add("active");
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
      submitBtn.innerHTML = originalBtnContent;
    }
  });
}

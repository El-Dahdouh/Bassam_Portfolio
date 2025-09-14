// نصوص واجهة ثنائية اللغة
const translations = {
  en: {
    "site-title": "Bassam Alotaibi",
    "home": "Home",
    "projects": "Projects",
    "experience": "Experience",
    "contact": "Contact",

    "hero-title": "Welcome! I'm a Cyber Security and AI Researcher",
    "hero-subtitle": "I’m driving research at the intersection of AI and cybersecurity—advancing intelligent threat detection, privacy-preserving models, and ethical AI adoption. Explore my work and let’s secure the future together.",
    "view-projects": "View Projects",
    "hire-me": "Hire Me",

    "about-heading": "About Me",
    "about-paragraph": "I work at the intersection of cybersecurity and AI, helping organisations adopt new technologies securely and ethically. With a foundation in IT operations and a Master’s in Cybersecurity from Lancaster University, my work bridges research and practice—linking governance with real-world technology.\n I currently serve as Information Security Manager at Experience (a SAMA-regulated financial company) and chair Buniah, the Saudi Association for AI and Data, supporting non-profits in leveraging AI and data responsibly.\n\nMy interests span distributed systems security, privacy-preserving machine learning, and AI governance for non-profits and emerging sectors.",

    "projects-heading": "Projects",
    "project1-title": "Master’s Thesis - A Peer-to-Peer Federated Learning Framework for Intrusion Detection in Autonomous Vehicles",
    "project1-points": [
      "Developed a decentralized federated learning framework to enhance intrusion detection in autonomous vehicles while preserving data privacy.",
      "Developed and tested the SR-1CNN model, reaching 94.39% accuracy on NSL-KDD and 99.97% on the Car Hacking dataset.",
      "Addressed data heterogeneity challenges and demonstrated the framework’s effectiveness in both independent and non-independent data distributions.",
      "Eliminated dependence on centralized servers by implementing asynchronous parameter sharing in a mesh topology, improving the system’s resilience against single points of failure.",
      "The project is associated with the Cybersecurity Research Center at Lancaster University."
    ],
    "view-github": "GitHub",

    "experience-heading": "Experience",
 // خبرة 1
    "exp1-title": "Information Security Manager — Experience Company",
    "exp1-desc1": "I am responsible for developing and delivering a comprehensive cybersecurity strategy aligned with ISO 27001, NIST CSF, and SAMA CSF frameworks, ensuring the protection of client data, financial operations, and digital platforms.",
    "exp1-role-title": "My role encompasses:",
    "exp1-role-list": [
      "Designing and managing the Information Security Management System (ISMS).",
      "Drafting and implementing security policies and operational procedures.",
      "Conducting risk assessments and gap analyses to strengthen the security posture.",
      "Overseeing access control, encryption, and data protection practices.",
      "Leading incident response and business continuity planning.",
      "Promoting a culture of security awareness across the organisation.",
      "Ensuring compliance with Saudi data protection and cybersecurity regulations."
      ],
    "exp1-focus": "My focus is to ensure that Experience Company operates securely and compliantly, maintaining the trust of clients and stakeholders while supporting operational resilience and sustainable growth within the financial services sector.",
    "exp1-date": "July 2025 — Present",

  // خبرة 2
    "exp2-title": "Founder and Chairman of the Board of Directors – Buniah for Artificial Intelligence and Data",
    "exp2-desc": "Founding and leading Buniah for AI and Data, a non-profit organisation dedicated to advancing artificial intelligence, data science, and ethical technology in Saudi Arabia. Overseeing strategic planning, board governance, and partnerships to deliver innovative solutions that serve society and drive sustainable growth.",
    "exp2-date": "June 2025 — Present",

  // خبرة 3
    "exp3-title": "IT Security Specialist – Hyundai Engineering Co. Ltd.",
    "exp3-role-list": [
      "Manage and implement cybersecurity strategies to protect systems and infrastructure from security threats.",
      "Conduct continuous security risk assessments and provide periodic reports to identify security gaps and offer preventive solutions.",
      "Implement and maintain 24/7 security monitoring to ensure compliance with standards and regulations.",
      "Lead initiatives to update and implement security policies related to access management, network security, and applications.",
      "Coordinate with multidisciplinary teams to ensure cybersecurity measures are integrated into daily operational processes."
      ],
    "exp3-date": "February 2025 – July 2025",

    // خبرة 4
    "exp4-title": "Application Support – Safari Group",
    "exp4-role-list": [
      "Provide technical support for enterprise applications, including resolving complex issues to ensure business continuity.",
      "Lead processes for identifying and analyzing software issues and providing appropriate solutions to ensure operational efficiency.",
      "Collaborate with development teams to identify and implement necessary security patches and updates in a timely manner.",
      "Manage and coordinate the implementation of security measures to ensure system compliance with corporate security standards.",
      "Provide comprehensive reports on system performance and recommendations for improving security and operational efficiency.",
      ],
    "exp4-date": "September 2020 – July 2022",

    "education-heading":"Education",
    // التعليم
    "edu1-title": "Master's in Cybersecurity | Lancaster University | Lancaster, the United Kingdom",
    "edu1-desc": [
      "Specialization in security frameworks, threat management, and cloud security.",
      "Thesis on federated learning and threat detection using artificial intelligence."
        ],
    "edu1-year": "Graduation Year: 2024",

    "edu2-title": "Bachelor's in Computer Science | Shaqra University | Shaqra, Saudi Arabia",
    "edu2-desc": [
    "Foundational studies in computing, programming, and network security."
      ],    
    "edu2-year": "Graduation Year: 2020",
    "contact-heading": "Send a Message",
    "send": "Send",
    "contact-info-heading": "Contact Info",
    "email": "Email:",
    "contactEmail": "bassamawadh@outlook.com",
    "phone": "Phone:",
    "whatsapp": "WhatsApp:",
    "chatWhatsapp": "Chat on WhatsApp",

    "footer-text": "© {year} Bassam Alotaibi"
  },
  ar: {
    "site-title": "بسام العتيبي",
    "home": "الرئيسية",
    "projects": "المشاريع",
    "experience": "الخبرة",
    "contact": "تواصل",

    "hero-title": "مرحبًا! أنا باحث في الأمن السيبراني والذكاء الاصطناعي",
    "hero-subtitle": "أقود أبحاثًا في تقاطع الذكاء الاصطناعي والأمن السيبراني — أعمل على تطوير أنظمة ذكية لاكتشاف التهديدات، ونماذج تحافظ على الخصوصية، واعتماد الذكاء الاصطناعي بشكل أخلاقي. استكشف أعمالي ولنؤمّن المستقبل معًا.",
    "view-projects": "عرض المشاريع",
    "hire-me": "وظفني",

    "about-heading": "عنّي",
    "about-paragraph": "أعمل في تقاطع الأمن السيبراني والذكاء الاصطناعي، حيث أساعد المؤسسات على تبني التقنيات الحديثة بشكل آمن وأخلاقي. وبفضل خلفيتي في إدارة تكنولوجيا المعلومات وحصولي على ماجستير في الأمن السيبراني من جامعة لانكستر، فإن عملي يجمع بين البحث والتطبيق العملي — رابطًا بين الحوكمة والتقنية في الواقع.\n أشغل حاليًا منصب مدير أمن المعلومات في شركة Experience (وهي شركة مالية خاضعة لتنظيم مؤسسة النقد العربي السعودي \"ساما\")، كما أرأس جمعية بُنية — الجمعية السعودية للذكاء الاصطناعي والبيانات — لدعم المنظمات غير الربحية في الاستفادة من الذكاء الاصطناعي والبيانات بطريقة مسؤولة.\n\nاهتماماتي تتنوع بين أمن الأنظمة الموزعة، والتعلم الآلي المحافظ على الخصوصية، وحوكمة الذكاء الاصطناعي للمنظمات غير الربحية والقطاعات الناشئة.",

    "projects-heading": "المشاريع",
    "project1-title": "رسالة الماجستير - إطار تعلم اتحادي نظير-لنظير لاكتشاف التسلل في المركبات الذاتية القيادة",
    "project1-points": [
      "تطوير إطار تعلم اتحادي لامركزي لتعزيز اكتشاف التهديدات في المركبات ذاتية القيادة مع الحفاظ على خصوصية البيانات.",
      "تطوير واختبار نموذج SR-1CNN محققًا دقة 94.39% على مجموعة بيانات NSL-KDD و 99.97% على مجموعة بيانات Car Hacking.",
      "معالجة تحديات تباين البيانات وإثبات فعالية الإطار في التوزيعات المستقلة وغير المستقلة للبيانات.",
      "إلغاء الاعتماد على الخوادم المركزية من خلال تنفيذ مشاركة غير متزامنة للمعلمات في طوبولوجيا شبكية، مما عزز مرونة النظام ضد نقاط الفشل الأحادية.",
      "المشروع مرتبط بمركز أبحاث الأمن السيبراني في جامعة لانكستر."
    ],
    "view-github": "جيتهاب",

    "experience-heading": "الخبرة",
     // خبرة 1
    "exp1-title": "مدير أمن المعلومات — شركة خبرة لتحصيل الديون",
    "exp1-desc1": "مسؤول عن تطوير وتنفيذ استراتيجية شاملة للأمن السيبراني متوافقة مع معايير ISO 27001 و NIST CSF و SAMA CSF لضمان حماية بيانات العملاء والعمليات المالية والمنصات الرقمية.",
    "exp1-role-title": "مهامي تشمل:",
    "exp1-role-list": [
      "تصميم وإدارة نظام إدارة أمن المعلومات (ISMS).",
      "إعداد وتنفيذ السياسات والإجراءات التشغيلية للأمن.",
      "إجراء تقييمات المخاطر وتحليلات الفجوات لتعزيز الوضع الأمني.",
      "الإشراف على التحكم في الوصول والتشفير وممارسات حماية البيانات.",
      "قيادة الاستجابة للحوادث وخطط استمرارية الأعمال.",
      "تعزيز ثقافة الوعي الأمني داخل المؤسسة.",
      "ضمان الامتثال للوائح حماية البيانات والأمن السيبراني في المملكة."
      ],
    "exp1-focus": "أركز على ضمان عمل شركة إكسبيريانس بأمان وامتثال، مع الحفاظ على ثقة العملاء وأصحاب المصلحة، ودعم المرونة التشغيلية والنمو المستدام في قطاع الخدمات المالية.",
    "exp1-date": "يوليو 2025 — الآن",

    // خبرة 2
    "exp2-title": " المؤسس ورئيس مجلس الإدارة – جمعية بُنية للذكاء الاصطناعي والبيانات",
    "exp2-desc": "تأسيس وقيادة جمعية بنية للذكاء الاصطناعي والبيانات، وهي منظمة غير ربحية مكرسة لتطوير الذكاء الاصطناعي وعلوم البيانات والتقنية الأخلاقية في المملكة العربية السعودية. الإشراف على التخطيط الاستراتيجي وحوكمة المجلس والشراكات لتقديم حلول مبتكرة تخدم المجتمع وتدعم النمو المستدام.",
    "exp2-date": "يونيو 2025 — الآن",

    // خبرة 3
    "exp3-title": "أخصائي أمن المعلومات – شركة هيونداي للهندسة",
    "exp3-role-list": [
      "إدارة وتنفيذ استراتيجيات الأمن السيبراني لحماية الأنظمة والبنية التحتية من التهديدات الأمنية.",
      "إجراء تقييمات مستمرة للمخاطر الأمنية وتقديم تقارير دورية لتحديد الفجوات الأمنية وتقديم الحلول الوقائية.",
      "تنفيذ وصيانة مراقبة أمنية على مدار الساعة لضمان الامتثال للمعايير واللوائح.",
      "قيادة المبادرات لتحديث وتنفيذ سياسات الأمن المتعلقة بإدارة الوصول وأمن الشبكات والتطبيقات.",
      "التنسيق مع الفرق متعددة التخصصات لضمان دمج التدابير الأمنية في العمليات التشغيلية اليومية."
      ],
    "exp3-date": "فبراير 2025 – يوليو 2025",

    // خبرة 4
    "exp4-title": "دعم التطبيقات – مجموعة سفاري",
    "exp4-role-list": [
      "تقديم الدعم الفني للتطبيقات المؤسسية، بما في ذلك حل المشكلات المعقدة لضمان استمرارية الأعمال.",
      "قيادة عمليات تحديد وتحليل مشكلات البرمجيات وتقديم الحلول المناسبة لضمان الكفاءة التشغيلية.",
      "التعاون مع فرق التطوير لتحديد وتنفيذ التحديثات والرقع الأمنية اللازمة في الوقت المناسب.",
      "إدارة وتنسيق تنفيذ التدابير الأمنية لضمان توافق الأنظمة مع معايير الأمان المؤسسية.",
      "إعداد تقارير شاملة عن أداء الأنظمة وتقديم التوصيات لتحسين الأمن والكفاءة التشغيلية."
      ],
    "exp4-date": "سبتمبر 2020 – يوليو 2022",

    "education-heading":"التعليم",
    // التعليم
    "edu1-title": "ماجستير في الأمن السيبراني | جامعة لانكستر | لانكستر، المملكة المتحدة",
    "edu1-desc": [
      "تخصص في الأطر الأمنية، إدارة التهديدات، وأمن السحابة.",
      "رسالة ماجستير عن التعلم الموزع والكشف عن التهديدات باستخدام الذكاء الاصطناعي."
        ],
    "edu1-year": "سنة التخرج: 2024",

    "edu2-title": "بكالوريوس في علوم الحاسب | جامعة شقراء | شقراء، المملكة العربية السعودية",
    "edu2-desc": [
      "دراسات أساسية في الحوسبة، البرمجة، وأمن الشبكات."
        ],
    "edu2-year": "سنة التخرج: 2020",
    "contact-heading": "إرسال رسالة",
    "send": "إرسال",
    "contact-info-heading": "معلومات التواصل",
    "email": "البريد الإلكتروني:",
    "contactEmail": "bassamawadh@outlook.com",
    "phone": "الهاتف:",
    "whatsapp": "واتساب:",
    "chatWhatsapp": "الدردشة عبر واتساب",
    
    "footer-text": "© {year} بسام العتيبي"
  }
};

// عناصر اللغة
const enBtn = document.getElementById("en-btn");
const arBtn = document.getElementById("ar-btn");

// تحميل/حفظ اللغة
const STORAGE_KEY = "siteLang";
function getInitialLang(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return "ar"; 
}

function setLanguage(lang){
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");

  const dict = translations[lang];

  // تحديث العناصر بالـ id
  document.querySelectorAll("[id]").forEach(el=>{
    const key = el.id;
    if (dict[key]){
      const val = dict[key].replace
        ? dict[key].replace("{year}", new Date().getFullYear())
        : dict[key];

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
        el.placeholder = val;
      } else if (Array.isArray(dict[key])) {
        // لو النصوص Array (زي التعليم)
        el.innerHTML = `<ul>${dict[key].map(item=> `<li>${item}</li>`).join("")}</ul>`;
      } else {
        el.textContent = val;
      }
    }
  });

  const sendBtn = document.getElementById("send-btn");
  if (sendBtn && dict.send) sendBtn.textContent = dict.send;


  // تحديث العناصر بالـ data-key
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    if (dict[key]) el.textContent = dict[key];
  });

  // تحديث المشاريع (قوائم Array)
  document.querySelectorAll("ul[id]").forEach(el=>{
    const key = el.id;
    if (Array.isArray(dict[key])) {
      el.innerHTML = dict[key].map(item=> `<li>${item}</li>`).join("");
    }
  });

  // تحديث Contact Info بشكل ديناميكي
  const gmailLink = document.getElementById("gmail-link");
  if (gmailLink && dict.contactEmail) gmailLink.textContent = dict.contactEmail;

  const waLink = document.getElementById("wa-link");
  if (waLink && dict.chatWhatsapp) waLink.textContent = dict.chatWhatsapp;

  const phoneEl = document.querySelector("[data-key='phone']");
  if (phoneEl && dict.phone) phoneEl.textContent = dict.phone;

  const emailStrong = document.querySelector("[data-key='email']");
  if (emailStrong && dict.email) emailStrong.textContent = dict.email;

  const waStrong = document.querySelector("[data-key='whatsapp']");
  if (waStrong && dict.whatsapp) waStrong.textContent = dict.whatsapp;
}

// ربط الأزرار
if (enBtn) enBtn.addEventListener("click", ()=> setLanguage("en"));
if (arBtn) arBtn.addEventListener("click", ()=> setLanguage("ar"));

// سنة الفوتر
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// تطبيق اللغة عند تحميل الصفحة
setLanguage(getInitialLang());

// أنيميشن عند التمرير
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translate(0,0)";
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .15});

document.querySelectorAll(".fade-up, .fade-left").forEach(el=> observer.observe(el));

// رابط واتساب تلقائي (اختياري)
(function autoWhatsApp(){
  const wa = document.getElementById("wa-link");
  if (wa && (!wa.getAttribute("href") || wa.getAttribute("href")==="#")){
    const phone = "+966555968140"; 
    wa.setAttribute("href", `https://wa.me/${phone}`);
  }
})();

// فتح وقفل القائمة
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
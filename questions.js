// questions.js
// بنك أسئلة (100 سؤال) - بنفس البنك السابق
// type: "tf" | "mcq" | "match"
// tf: answer = "T" أو "F"
// mcq: answer = رقم الخيار الصحيح (0-based)
// match: answer = مصفوفة مطابقة index يمين لكل عنصر يسار (0-based)

window.QUESTION_BANK = [
    // =========================
    // 1) صواب / خطأ (1 - 40)
    // =========================
    { id: 1, type: "tf", q: "شهادة CISMP تهدف إلى تزويد المتدرب بمبادئ إدارة أمن المعلومات.", answer: "T" },
    { id: 2, type: "tf", q: "الجهة المانحة لشهادة CISMP هي ISACA.", answer: "F" },
    { id: 3, type: "tf", q: "اختبار CISM يتكون من 150 سؤال اختيار من متعدد.", answer: "T" },
    { id: 4, type: "tf", q: "شهادة CISM تركز على الجوانب الإدارية أكثر من التقنية.", answer: "T" },
    { id: 5, type: "tf", q: "شهادة CompTIA CySA+ موجهة لمحللي الأمن السيبراني.", answer: "T" },
    { id: 6, type: "tf", q: "عدد أسئلة اختبار CySA+ قد يصل إلى 85 سؤالًا.", answer: "T" },
    { id: 7, type: "tf", q: "اختبار CySA+ يشمل أسئلة أداء (Performance-Based).", answer: "T" },
    { id: 8, type: "tf", q: "شهادة Network+ لا تتطلب خبرة سابقة في الشبكات.", answer: "T" },
    { id: 9, type: "tf", q: "اختبار Network+ يحتوي على أسئلة عملية وأخرى اختيار من متعدد.", answer: "T" },
    { id: 10, type: "tf", q: "درجة النجاح في Network+ تكون من 900.", answer: "F" },
  
    { id: 11, type: "tf", q: "شهادة Security+ تعتبر مدخلًا أساسيًا لمجال الأمن السيبراني.", answer: "T" },
    { id: 12, type: "tf", q: "اختبار Security+ يتكون من 90 سؤالًا كحد أقصى.", answer: "T" },
    { id: 13, type: "tf", q: "شهادة OutSystems Associate Traditional Web Developer تركز على تطوير الويب التقليدي.", answer: "T" },
    { id: 14, type: "tf", q: "اختبار OutSystems يتم عن طريق الإنترنت.", answer: "T" },
    { id: 15, type: "tf", q: "شهادة CIW User Interface Designer تركز على تصميم واجهات المستخدم وتجربة المستخدم.", answer: "T" },
    { id: 16, type: "tf", q: "اختبار CIW يعتمد على اختيار من متعدد فقط.", answer: "T" },
    { id: 17, type: "tf", q: "شهادة CompTIA Project+ تركز على إدارة المشاريع التقنية.", answer: "T" },
    { id: 18, type: "tf", q: "اختبار Project+ لا يتطلب خبرة عملية سابقة.", answer: "T" },
    { id: 19, type: "tf", q: "شهادة Hootsuite Social Media Marketing تركز على التسويق عبر وسائل التواصل الاجتماعي.", answer: "T" },
    { id: 20, type: "tf", q: "اختبار Hootsuite يتم عن بعد عبر الإنترنت.", answer: "T" },
  
    { id: 21, type: "tf", q: "شهادة Red Hat EX-358 تعتمد على اختبار عملي.", answer: "T" },
    { id: 22, type: "tf", q: "اختبار Red Hat EX-358 يقيس مهارات الأتمتة وإدارة الخدمات.", answer: "T" },
    { id: 23, type: "tf", q: "شهادة Server+ تركز على إدارة وصيانة الخوادم.", answer: "T" },
    { id: 24, type: "tf", q: "اختبار Server+ مدته 90 دقيقة.", answer: "T" },
    { id: 25, type: "tf", q: "شهادة CDMP مقدمة من منظمة DAMA International.", answer: "T" },
    { id: 26, type: "tf", q: "شهادة CDMP تهتم بإدارة البيانات وحوكمتها.", answer: "T" },
    { id: 27, type: "tf", q: "اختبار PL-300 مرتبط بتحليل البيانات باستخدام Power BI.", answer: "T" },
    { id: 28, type: "tf", q: "اختبار PL-300 تابع لشركة Microsoft.", answer: "T" },
    { id: 29, type: "tf", q: "شهادة Big Data Foundation تعتبر شهادة متقدمة.", answer: "F" },
    { id: 30, type: "tf", q: "Big Data Foundation مناسبة للمبتدئين في مجال البيانات الضخمة.", answer: "T" },
  
    { id: 31, type: "tf", q: "شهادة CompTIA Data+ تركز على تحليل البيانات.", answer: "T" },
    { id: 32, type: "tf", q: "اختبار Data+ لا يشمل أسئلة عملية.", answer: "F" },
    { id: 33, type: "tf", q: "شهادة AWS Cloud Practitioner تعتبر شهادة تأسيسية.", answer: "T" },
    { id: 34, type: "tf", q: "اختبار AWS Cloud Practitioner يتكون من 65 سؤالًا.", answer: "T" },
    { id: 35, type: "tf", q: "شهادة CompTIA Cloud Essentials تركز على مفاهيم الحوسبة السحابية للأعمال.", answer: "T" },
    { id: 36, type: "tf", q: "Cloud Essentials لا تركز على الجوانب التقنية العميقة.", answer: "T" },
    { id: 37, type: "tf", q: "شهادة CompTIA ITF+ موجهة للمبتدئين في تقنية المعلومات.", answer: "T" },
    { id: 38, type: "tf", q: "اختبار ITF+ يقيس أساسيات البرمجيات والأجهزة والشبكات.", answer: "T" },
    { id: 39, type: "tf", q: "جميع شهادات CompTIA تتطلب تجديدًا دوريًا.", answer: "T" },
    { id: 40, type: "tf", q: "معظم اختبارات CompTIA تعتمد على اختيار من متعدد.", answer: "T" },
  
    // =========================
    // 2) اختيار متعدد (41 - 80)
    // =========================
    { id: 41, type: "mcq", q: "الجهة المانحة لشهادة CISMP هي:", choices: ["CompTIA", "ISACA", "Microsoft", "DAMA"], answer: 1 },
    { id: 42, type: "mcq", q: "عدد أسئلة اختبار CISM هو:", choices: ["100", "120", "150", "200"], answer: 2 },
    { id: 43, type: "mcq", q: "مدة اختبار CISM هي:", choices: ["ساعتان", "3 ساعات", "4 ساعات", "90 دقيقة"], answer: 2 },
    { id: 44, type: "mcq", q: "شهادة CySA+ تركز على:", choices: ["البرمجة", "تحليل التهديدات", "تصميم الواجهات", "إدارة المشاريع"], answer: 1 },
    { id: 45, type: "mcq", q: "درجة النجاح في Security+ هي:", choices: ["650", "700", "750", "800"], answer: 2 },
    { id: 46, type: "mcq", q: "عدد أسئلة اختبار Network+ كحد أقصى:", choices: ["70", "80", "90", "100"], answer: 2 },
    { id: 47, type: "mcq", q: "شهادة OutSystems Associate موجهة إلى:", choices: ["مصممي الجرافيك", "مطوري الويب", "محللي البيانات", "مدراء المشاريع"], answer: 1 },
    { id: 48, type: "mcq", q: "اختبار CIW User Interface Designer يركز على:", choices: ["قواعد البيانات", "تجربة المستخدم", "الشبكات", "الأمن السيبراني"], answer: 1 },
    { id: 49, type: "mcq", q: "شهادة Project+ تهتم بـ:", choices: ["إدارة الأنظمة", "إدارة المشاريع", "تحليل البيانات", "البرمجة"], answer: 1 },
    { id: 50, type: "mcq", q: "شهادة Hootsuite مرتبطة بـ:", choices: ["أمن المعلومات", "إدارة الخوادم", "التسويق الرقمي", "تطوير الويب"], answer: 2 },
  
    { id: 51, type: "mcq", q: "نوع اختبار Red Hat EX-358 هو:", choices: ["نظري", "شفهي", "عملي", "إلكتروني فقط"], answer: 2 },
    { id: 52, type: "mcq", q: "شهادة Server+ تهتم بـ:", choices: ["الشبكات فقط", "الخوادم", "التصميم", "البرمجة"], answer: 1 },
    { id: 53, type: "mcq", q: "شهادة CDMP تهتم بـ:", choices: ["أمن الشبكات", "إدارة البيانات", "تطوير الويب", "الحوسبة السحابية"], answer: 1 },
    { id: 54, type: "mcq", q: "اختبار PL-300 مرتبط بأداة:", choices: ["Excel", "Power BI", "Tableau", "Python"], answer: 1 },
    { id: 55, type: "mcq", q: "الجهة المانحة لشهادة PL-300 هي:", choices: ["CompTIA", "AWS", "Microsoft", "Oracle"], answer: 2 },
    { id: 56, type: "mcq", q: "شهادة Big Data Foundation تركز على:", choices: ["إدارة المشاريع", "مفاهيم البيانات الضخمة", "البرمجة", "أمن المعلومات"], answer: 1 },
    { id: 57, type: "mcq", q: "شهادة Data+ مقدمة من:", choices: ["Microsoft", "DAMA", "CompTIA", "AWS"], answer: 2 },
    { id: 58, type: "mcq", q: "شهادة AWS Cloud Practitioner مخصصة لـ:", choices: ["الخبراء", "المبتدئين", "المبرمجين فقط", "مدراء الشبكات"], answer: 1 },
    { id: 59, type: "mcq", q: "عدد أسئلة اختبار AWS Cloud Practitioner هو تقريبًا:", choices: ["50", "60", "65", "80"], answer: 2 },
    { id: 60, type: "mcq", q: "شهادة ITF+ تهدف إلى:", choices: ["التخصص المتقدم", "أساسيات تقنية المعلومات", "إدارة المشاريع", "تحليل البيانات"], answer: 1 },
  
    // أسئلة إضافية (بنفس الأسلوب) لإكمال 40 MCQ (61-80 هنا MCQ)
    { id: 61, type: "mcq", q: "اختبار CySA+ غالبًا يتضمن:", choices: ["أسئلة مقالية", "أسئلة أداء + اختيار متعدد", "مقابلة شخصية", "مشروع تخرج"], answer: 1 },
    { id: 62, type: "mcq", q: "الهدف الأساسي من Network+ هو قياس:", choices: ["إدارة قواعد البيانات", "مهارات الشبكات الأساسية", "تصميم UX", "برمجة تطبيقات الهاتف"], answer: 1 },
    { id: 63, type: "mcq", q: "Security+ مناسب أكثر لـ:", choices: ["بداية المسار الأمني", "إدارة المنتجات", "تصميم الرسوم", "إدارة الموارد البشرية"], answer: 0 },
    { id: 64, type: "mcq", q: "OutSystems Associate Traditional Web Developer يركز على:", choices: ["Low-code لتطبيقات الويب", "أمن الشبكات", "تحليل البيانات", "المحاسبة"], answer: 0 },
    { id: 65, type: "mcq", q: "CIW User Interface Designer يختبر مهارات:", choices: ["UI/UX وواجهات الويب", "تشغيل الخوادم", "اختبار الاختراق", "إدارة البيانات"], answer: 0 },
  
    { id: 66, type: "mcq", q: "Project+ يركز على:", choices: ["مبادئ إدارة المشاريع والمصطلحات", "برمجة الألعاب", "تصميم الجرافيك", "إدارة الهوية"], answer: 0 },
    { id: 67, type: "mcq", q: "Hootsuite Social Media Marketing يقيس:", choices: ["إدارة الخدمات", "مهارات التسويق عبر السوشال ميديا", "إدارة الخوادم", "هندسة الشبكات"], answer: 1 },
    { id: 68, type: "mcq", q: "Red Hat EX-358 يرتبط عادةً بـ:", choices: ["خدمات وأتمتة وإدارة Service Management", "تصميم UI", "تحليل البيانات بـ Power BI", "أساسيات الشبكات"], answer: 0 },
    { id: 69, type: "mcq", q: "Server+ مناسب لمن يعمل في:", choices: ["تصميم واجهات", "دعم وإدارة الخوادم", "التسويق", "التعليم"], answer: 1 },
    { id: 70, type: "mcq", q: "CDMP يهتم أكثر بـ:", choices: ["حوكمة البيانات وإدارتها", "تصميم الألعاب", "الهندسة الكهربائية", "برمجة الويب"], answer: 0 },
  
    { id: 71, type: "mcq", q: "PL-300 يختبر:", choices: ["إدارة المشاريع", "تحليل البيانات ونمذجة التقارير في Power BI", "إدارة الخوادم", "أمن الشبكات"], answer: 1 },
    { id: 72, type: "mcq", q: "Big Data Foundation مناسب لـ:", choices: ["مبتدئ يريد فهم مفاهيم البيانات الضخمة", "خبير اختراق فقط", "مصمم UI فقط", "مدير مشروع فقط"], answer: 0 },
    { id: 73, type: "mcq", q: "CompTIA Data+ يرتبط أكثر بـ:", choices: ["تحليل البيانات وإعداد التقارير", "تركيب الشبكات", "إدارة الموارد البشرية", "تصميم الواجهات"], answer: 0 },
    { id: 74, type: "mcq", q: "AWS Cloud Practitioner يركز على:", choices: ["مفاهيم السحابة وخدمات AWS الأساسية", "برمجة تطبيقات iOS", "تصميم UX", "إدارة الخوادم المحلية فقط"], answer: 0 },
    { id: 75, type: "mcq", q: "CompTIA Cloud Essentials يركز غالبًا على:", choices: ["مفاهيم السحابة من منظور الأعمال", "اختبار الاختراق", "تصميم الواجهات", "إدارة قواعد البيانات"], answer: 0 },
  
    { id: 76, type: "mcq", q: "ITF+ مناسب لـ:", choices: ["المبتدئين في تقنية المعلومات", "خبراء الشبكات فقط", "مدراء أمن المعلومات", "محللي بيانات متقدمين"], answer: 0 },
    { id: 77, type: "mcq", q: "CISM يستهدف عادة:", choices: ["المدراء وقادة فرق أمن المعلومات", "مصممي UI", "مسوقين محتوى", "مطوري ألعاب"], answer: 0 },
    { id: 78, type: "mcq", q: "CySA+ يركز على جانب:", choices: ["الدفاع والتحليل والاستجابة", "تطوير واجهات", "إدارة المشاريع فقط", "التسويق"], answer: 0 },
    { id: 79, type: "mcq", q: "Security+ غالبًا يعتبر:", choices: ["Foundation في الأمن", "Advanced في التسويق", "Specialist في UI", "شهادة محاسبة"], answer: 0 },
    { id: 80, type: "mcq", q: "Network+ غالبًا يعتبر:", choices: ["شهادة تأسيسية في الشبكات", "شهادة تصميم UI", "شهادة تسويق", "شهادة قواعد بيانات"], answer: 0 },
  
    // =========================
    // 3) توصيل (Matching) (81 - 100) = 20 سؤال
    // =========================
    {
      id: 81, type: "match", q: "صِل الشهادة بالمجال المناسب (1)",
      matchLeft: ["CISMP", "CySA+", "Network+", "Security+"],
      matchRight: ["أساسيات الشبكات", "إدارة أمن المعلومات", "تحليل التهديدات الأمنية", "أساسيات الأمن السيبراني"],
      // CISMP->إدارة أمن المعلومات(1), CySA+->تحليل التهديدات(2), Network+->الشبكات(0), Security+->الأمن(3)
      answer: [1,2,0,3]
    },
    {
      id: 82, type: "match", q: "صِل الشهادة بالمجال المناسب (2)",
      matchLeft: ["PL-300", "CDMP", "Data+", "Big Data Foundation"],
      matchRight: ["مفاهيم البيانات الضخمة", "إدارة البيانات وحوكمتها", "تحليل البيانات (CompTIA)", "تحليل البيانات بـ Power BI"],
      // PL-300->Power BI(3), CDMP->حوكمة(1), Data+->تحليل CompTIA(2), BigData->مفاهيم(0)
      answer: [3,1,2,0]
    },
    {
      id: 83, type: "match", q: "صِل الشهادة بالمجال المناسب (3)",
      matchLeft: ["Project+", "Server+", "OutSystems Associate", "CIW UI Designer"],
      matchRight: ["تصميم واجهات المستخدم", "إدارة المشاريع", "الخوادم", "تطوير تطبيقات ويب (Low-code)"],
      // Project+->إدارة المشاريع(1), Server+->الخوادم(2), OutSystems->Low-code(3), CIW->UI(0)
      answer: [1,2,3,0]
    },
    {
      id: 84, type: "match", q: "صِل الشهادة بالمجال المناسب (4)",
      matchLeft: ["AWS Cloud Practitioner", "Cloud Essentials", "Hootsuite SMM", "Red Hat EX-358"],
      matchRight: ["مفاهيم السحابة الأساسية (AWS)", "مفاهيم السحابة للأعمال", "تسويق عبر وسائل التواصل", "أتمتة وإدارة الخدمات"],
      answer: [0,1,2,3]
    },
  
    {
      id: 85, type: "match", q: "صِل الشهادة بالجهة الأكثر ارتباطًا بها (1)",
      matchLeft: ["PL-300", "Network+", "AWS Cloud Practitioner", "CISM"],
      matchRight: ["Microsoft", "CompTIA", "AWS", "ISACA"],
      // PL-300->Microsoft(0), Network+->CompTIA(1), AWS CP->AWS(2), CISM->ISACA(3)
      answer: [0,1,2,3]
    },
    {
      id: 86, type: "match", q: "صِل الشهادة بالجهة الأكثر ارتباطًا بها (2)",
      matchLeft: ["Data+", "Security+", "Project+", "Server+"],
      matchRight: ["CompTIA", "Microsoft", "AWS", "DAMA"],
      // كلها CompTIA
      answer: [0,0,0,0]
    },
    {
      id: 87, type: "match", q: "صِل الشهادة بالجهة الأكثر ارتباطًا بها (3)",
      matchLeft: ["CDMP", "Hootsuite SMM", "Red Hat EX-358", "CIW UI Designer"],
      matchRight: ["DAMA", "Hootsuite", "Red Hat", "CIW"],
      answer: [0,1,2,3]
    },
  
    {
      id: 88, type: "match", q: "صِل الشهادة بنوع الاختبار (1)",
      matchLeft: ["Red Hat EX-358", "CISM", "Hootsuite", "ITF+"],
      matchRight: ["اختبار عملي", "اختيار من متعدد", "اختبار أونلاين", "تأسيسي للمبتدئين"],
      // EX-358 عملي(0), CISM MCQ(1), Hootsuite أونلاين(2), ITF+ تأسيسي(3)
      answer: [0,1,2,3]
    },
    {
      id: 89, type: "match", q: "صِل الشهادة بنوع الاختبار (2)",
      matchLeft: ["CySA+", "Network+", "Security+", "Server+"],
      matchRight: ["اختيار من متعدد + أسئلة أداء", "اختيار من متعدد + أسئلة أداء", "اختيار من متعدد + أسئلة أداء", "اختيار من متعدد"],
      // لتبسيط البنك: الثلاثة الأولى PBQ+MCQ (0/1/2 متشابهة)، Server+ MCQ(3)
      answer: [0,1,2,3]
    },
    {
      id: 90, type: "match", q: "صِل الشهادة بنوع الاختبار (3)",
      matchLeft: ["PL-300", "Project+", "Cloud Essentials", "OutSystems Associate"],
      matchRight: ["اختبار اختيار من متعدد", "اختبار مفاهيم/إدارة مشاريع", "اختبار مفاهيم سحابية للأعمال", "اختبار أونلاين"],
      // PL-300 MCQ(0), Project+ إدارة مشاريع(1), CloudEssentials أعمال(2), OutSystems أونلاين(3)
      answer: [0,1,2,3]
    },
  
    {
      id: 91, type: "match", q: "صِل الشهادة بالمستوى المستهدف (1)",
      matchLeft: ["ITF+", "Security+", "CISM", "CDMP"],
      matchRight: ["مبتدئ", "مستوى تأسيسي/متوسط", "إداري/قيادي", "إدارة بيانات/حوكمة"],
      answer: [0,1,2,3]
    },
    {
      id: 92, type: "match", q: "صِل الشهادة بالمستوى المستهدف (2)",
      matchLeft: ["Network+", "CySA+", "PL-300", "Big Data Foundation"],
      matchRight: ["تأسيسي شبكات", "محلل أمن (تحليلي)", "تحليل بيانات وتقارير", "مفاهيم بيانات ضخمة (مبتدئ)"],
      answer: [0,1,2,3]
    },
    {
      id: 93, type: "match", q: "صِل الشهادة بالمستوى المستهدف (3)",
      matchLeft: ["Project+", "Server+", "Cloud Essentials", "AWS Cloud Practitioner"],
      matchRight: ["إدارة مشاريع (أساسيات)", "خوادم (دعم/إدارة)", "سحابة للأعمال", "سحابة تأسيسية AWS"],
      answer: [0,1,2,3]
    },
  
    {
      id: 94, type: "match", q: "صِل الشهادة بالمهارة الأبرز (1)",
      matchLeft: ["CISMP", "CISM", "Security+", "CySA+"],
      matchRight: ["مبادئ إدارة أمن المعلومات", "حوكمة/إدارة أمن المعلومات", "مفاهيم أمن سيبراني عامة", "تحليل تهديدات واستجابة"],
      answer: [0,1,2,3]
    },
    {
      id: 95, type: "match", q: "صِل الشهادة بالمهارة الأبرز (2)",
      matchLeft: ["PL-300", "Data+", "CDMP", "Big Data Foundation"],
      matchRight: ["Power BI وتقارير", "تحليل بيانات عام", "حوكمة وإدارة بيانات", "مفاهيم Big Data"],
      answer: [0,1,2,3]
    },
    {
      id: 96, type: "match", q: "صِل الشهادة بالمهارة الأبرز (3)",
      matchLeft: ["Network+", "Server+", "OutSystems", "CIW UI Designer"],
      matchRight: ["شبكات", "خوادم", "تطوير ويب (Low-code)", "تصميم واجهات المستخدم"],
      answer: [0,1,2,3]
    },
  
    {
      id: 97, type: "match", q: "صِل الشهادة بالاختبار/المنهج الأكثر ارتباطًا (1)",
      matchLeft: ["PL-300", "AWS Cloud Practitioner", "Hootsuite", "Project+"],
      matchRight: ["تحليل بيانات وتقارير", "خدمات سحابية", "تسويق عبر السوشال", "إدارة مشاريع"],
      answer: [0,1,2,3]
    },
    {
      id: 98, type: "match", q: "صِل الشهادة بالاختبار/المنهج الأكثر ارتباطًا (2)",
      matchLeft: ["Security+", "Network+", "CySA+", "ITF+"],
      matchRight: ["أمن سيبراني (أساسيات)", "شبكات (أساسيات)", "تحليل ودفاع", "أساسيات تقنية المعلومات"],
      answer: [0,1,2,3]
    },
    {
      id: 99, type: "match", q: "صِل الشهادة بالبيئة/الدور المناسب (1)",
      matchLeft: ["Server+", "Red Hat EX-358", "CISM", "CISMP"],
      matchRight: ["تشغيل/دعم خوادم", "أتمتة وإدارة خدمات", "قيادة وإدارة أمن المعلومات", "مبادئ إدارة أمن المعلومات"],
      answer: [0,1,2,3]
    },
    {
      id: 100, type: "match", q: "صِل الشهادة بالبيئة/الدور المناسب (2)",
      matchLeft: ["CIW UI Designer", "OutSystems Associate", "Cloud Essentials", "CDMP"],
      matchRight: ["مصمم واجهات", "مطور ويب", "مفاهيم سحابية للأعمال", "إدارة بيانات/حوكمة"],
      answer: [0,1,2,3]
    },
  ];
  
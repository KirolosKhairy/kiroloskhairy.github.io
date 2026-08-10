(() => {
  const certificates = {
    "open-doors-winner-2026": {
      title: "Open Doors 2026 Winner",
      summary: "Winner — Computer Science and Data Science",
      issuer: "Open Doors / Association of Global Universities",
      date: "2026",
      description: "Winner diploma of the Open Doors International Olympiad in Computer Science and Data Science.",
      image: "/images/Certifications/certificates/open-doors-winner-2026.jpg",
      thumb: "/images/Certifications/thumbs/open-doors-winner-2026.jpg"
    },
    "ibm-cybersecurity-fundamentals-2025": { title: "IBM SkillsBuild — Cybersecurity Fundamentals", summary: "Cybersecurity fundamentals", issuer: "IBM SkillsBuild", date: "2025", description: "Certificate of completion for IBM SkillsBuild Cybersecurity Fundamentals.", image: "/images/Certifications/certificates/ibm-cybersecurity-fundamentals-2025.png", thumb: "/images/Certifications/thumbs/ibm-cybersecurity-fundamentals-2025.jpg" },
    "cisco-introduction-to-cybersecurity-2025": { title: "Cisco Networking Academy — Introduction to Cybersecurity", summary: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "2025", description: "Certificate of course completion for Introduction to Cybersecurity.", image: "/images/Certifications/certificates/cisco-introduction-to-cybersecurity-2025.png", thumb: "/images/Certifications/thumbs/cisco-introduction-to-cybersecurity-2025.jpg" },
    "fortinet-getting-started-cybersecurity-2025": { title: "Fortinet — Getting Started in Cybersecurity 3.0", summary: "Cybersecurity fundamentals course", issuer: "Fortinet Training Institute", date: "2025", description: "Certificate of completion for Getting Started in Cybersecurity 3.0.", image: "/images/Certifications/certificates/fortinet-getting-started-cybersecurity-2025.png", thumb: "/images/Certifications/thumbs/fortinet-getting-started-cybersecurity-2025.jpg" },
    "fortinet-threat-landscape-2025": { title: "Fortinet — Introduction to the Threat Landscape 3.0", summary: "Threat landscape course", issuer: "Fortinet Training Institute", date: "2025", description: "Certificate of completion for Introduction to the Threat Landscape 3.0.", image: "/images/Certifications/certificates/fortinet-threat-landscape-2025.png", thumb: "/images/Certifications/thumbs/fortinet-threat-landscape-2025.jpg" },
    "netriders-ecir-prep-2025": { title: "NetRiders — eCIR Prep", summary: "eCIR preparation course", issuer: "NetRiders", date: "2025", description: "Certificate of completion for the eCIR preparation course.", image: "/images/Certifications/certificates/netriders-ecir-prep-2025.png", thumb: "/images/Certifications/thumbs/netriders-ecir-prep-2025.jpg" },
    "netriders-sec450-gsoc-prep-2025": { title: "NetRiders — SEC450 GSOC Prep", summary: "GSOC preparation course", issuer: "NetRiders", date: "2025", description: "Certificate of completion for SEC450 GSOC preparation.", image: "/images/Certifications/certificates/netriders-sec450-gsoc-prep-2025.png", thumb: "/images/Certifications/thumbs/netriders-sec450-gsoc-prep-2025.jpg" },
    "netriders-sec504-gcih-prep-2025": { title: "NetRiders — SEC504 GCIH Prep", summary: "GCIH preparation course", issuer: "NetRiders", date: "2025", description: "Certificate of completion for SEC504 GCIH preparation.", image: "/images/Certifications/certificates/netriders-sec504-gcih-prep-2025.png", thumb: "/images/Certifications/thumbs/netriders-sec504-gcih-prep-2025.jpg" },
    "netriders-pre-cybersecurity-2025": { title: "NetRiders — Pre-CyberSecurity", summary: "Cybersecurity preparation course", issuer: "NetRiders", date: "2025", description: "Certificate of completion for the Pre-CyberSecurity preparation course.", image: "/images/Certifications/certificates/netriders-pre-cybersecurity-2025.png", thumb: "/images/Certifications/thumbs/netriders-pre-cybersecurity-2025.jpg" },
    "altai-infosec-2025": { title: "Altai State University", summary: "Information security analysis methods and practices", issuer: "Altai State University", date: "2025", description: "Certificate confirming successful completion of the additional professional qualification program in information security analysis methods and practices.", image: "/images/Certifications/certificates/altai-infosec-2025.png", thumb: "/images/Certifications/thumbs/altai-infosec-2025.jpg" },
    "eltex-network-2024": { title: "ELTEX Academy", summary: "Network Technologies Basics — Part 1", issuer: "ELTEX Academy", date: "24 Dec 2024", description: "Certificate confirming successful completion of the Network Technologies Basics — Part 1 course.", image: "/images/Certifications/certificates/eltex-network-2024.png", thumb: "/images/Certifications/thumbs/eltex-network-2024.jpg" },
    "jatoba-db-2024": { title: "Jatoba DB Administration", summary: "Course — 40 academic hours", issuer: "Jatoba / Gazinformservice", date: "27 Dec 2024", description: "Certificate confirming completion of the Jatoba database administration course in the amount of 40 academic hours.", image: "/images/Certifications/certificates/jatoba-db-2024.png", thumb: "/images/Certifications/thumbs/jatoba-db-2024.jpg" },
    "urfu-web-2025": { title: "UrFU Web Development", summary: "Professional retraining — 288 hours", issuer: "Ural Federal University", date: "29 May 2025", description: "Professional retraining certificate for the program Fundamentals of Web Development, 288 hours.", image: "/images/Certifications/certificates/urfu-web-2025.png", thumb: "/images/Certifications/thumbs/urfu-web-2025.jpg" },
    "stepik-algorithms-methods-2025": { title: "Stepik — Algorithms: Theory and Practice. Methods", summary: "Course certificate", issuer: "Stepik", date: "2025", description: "Certificate of completion for the Stepik course Algorithms: Theory and Practice. Methods.", image: "/images/Certifications/certificates/stepik-algorithms-methods-2025.png", thumb: "/images/Certifications/thumbs/stepik-algorithms-methods-2025.jpg" },
    "stepik-python-examples-2023": { title: "Stepik — Python in Examples and Problems", summary: "Course certificate", issuer: "Stepik", date: "2023", description: "Certificate of completion for the Stepik course Python in Examples and Problems.", image: "/images/Certifications/certificates/stepik-python-examples-2023.png", thumb: "/images/Certifications/thumbs/stepik-python-examples-2023.jpg" },
    "ix-ctf-cup-2025": { title: "IX CTF Cup of Russia", summary: "Qualification stage participant", issuer: "IX CTF Cup of Russia", date: "2–3 Nov 2025", description: "Certificate for participation in the qualification stage of the IX CTF Cup of Russia.", image: "/images/Certifications/certificates/ix-ctf-cup-2025.png", thumb: "/images/Certifications/thumbs/ix-ctf-cup-2025.jpg" },
    "cyberbitva-2025": { title: "Cyberbitva 2025", summary: "Cybersecurity competition participant", issuer: "Altai IT Forum / Transformation Forum 2025", date: "2025", description: "Certificate confirming participation in the Cyberbitva cybersecurity competition.", image: "/images/Certifications/certificates/cyberbitva-2025.png", thumb: "/images/Certifications/thumbs/cyberbitva-2025.jpg" },
    "ural-cup-ctf-2025": { title: "Ural Cup Cybersecurity 2025", summary: "Qualification stage — Team M2K", issuer: "Ural Cup", date: "21 Sep 2025", description: "Certificate confirming Team M2K participation in the qualification stage of the Ural Cup in cybersecurity.", image: "/images/Certifications/certificates/ural-cup-ctf-2025.png", thumb: "/images/Certifications/thumbs/ural-cup-ctf-2025.jpg" },
    "regional-cup-ctf-2025": { title: "Regional Cup CTF 2025", summary: "Jeopardy CTF — Team M2K", issuer: "Regional Cup", date: "20–21 Dec 2025", description: "Certificate confirming participation in the Regional Cup online competition in the information security CTF discipline.", image: "/images/Certifications/certificates/regional-cup-ctf-2025.png", thumb: "/images/Certifications/thumbs/regional-cup-ctf-2025.jpg" },
    "best-hack-2025": { title: "BEST HACK 2025", summary: "Participant — Data Science Final", issuer: "BEST HACK / Skoltech", date: "2025", description: "Certificate of participation in the Data Science Final of BEST HACK 2025.", image: "/images/Certifications/certificates/best-hack-2025.png", thumb: "/images/Certifications/thumbs/best-hack-2025.jpg" },
    "alfa-budushchee-hackathon-2025": { title: "Альфа-Будущее Hackathon 2025", summary: "Hackathon participant — selection round", issuer: "Альфа-Будущее", date: "2025", description: "Certificate confirming participation in the selection round of the Альфа-Будущее Hackathon 2025.", image: "/images/Certifications/certificates/alfa-budushchee-hackathon-2025.png", thumb: "/images/Certifications/thumbs/alfa-budushchee-hackathon-2025.jpg" },
    "changellenge-cup-high-quality-15-2025": { title: "Changellenge Cup Moscow 2025", summary: "High Quality Awards — Top 15%", issuer: "Changellenge", date: "2025", description: "Certificate recognizing a Top 15% result in the Changellenge Cup Moscow 2025.", image: "/images/Certifications/certificates/changellenge-cup-high-quality-15-2025.png", thumb: "/images/Certifications/thumbs/changellenge-cup-high-quality-15-2025.jpg" },
    "icpc-ural-2025": { title: "ICPC Ural 2025", summary: "Honorable Mention — Ural Qualification", issuer: "ICPC Ural Regional Qualification", date: "18 Oct 2025", description: "Certificate of Achievement with Honorable Mention in the 2025 ICPC Ural Qualification.", image: "/images/Certifications/certificates/icpc-ural-2025.png", thumb: "/images/Certifications/thumbs/icpc-ural-2025.jpg" },
    "rucode-final-2025": { title: "RuCode Final", summary: "Participant — Division E–F", issuer: "RuCode", date: "19 Oct 2025", description: "Certificate of participation in the final of the international RuCode algorithmic programming championship, Division E–F.", image: "/images/Certifications/certificates/rucode-final-2025.png", thumb: "/images/Certifications/thumbs/rucode-final-2025.jpg" },
    "future-trajectory-olympiad-2026": { title: "Future Trajectory Olympiad 2026", summary: "Olympiad participant", issuer: "Future Trajectory", date: "2026", description: "Certificate associated with participation in the Future Trajectory Olympiad 2026.", image: "/images/Certifications/certificates/future-trajectory-olympiad-2026.png", thumb: "/images/Certifications/thumbs/future-trajectory-olympiad-2026.jpg" },
    "studrussia-2025": { title: "StudRussia 2025", summary: "Participant certificate", issuer: "StudRussia", date: "2025", description: "Certificate of participation issued by StudRussia.", image: "/images/Certifications/certificates/studrussia-2025.png", thumb: "/images/Certifications/thumbs/studrussia-2025.jpg" }
  };

  const russian = {
    "open-doors-winner-2026": [
      "Победитель Open Doors 2026",
      "Победитель — Computer Science and Data Science",
      "Open Doors / Ассоциация глобальных университетов",
      "2026",
      "Диплом победителя международной олимпиады Open Doors по профилю Computer Science and Data Science."
    ],
    "ibm-cybersecurity-fundamentals-2025": ["IBM SkillsBuild — Основы кибербезопасности", "Основы кибербезопасности", "IBM SkillsBuild", "2025", "Сертификат о прохождении курса IBM SkillsBuild по основам кибербезопасности."],
    "cisco-introduction-to-cybersecurity-2025": ["Cisco Networking Academy — Введение в кибербезопасность", "Введение в кибербезопасность", "Cisco Networking Academy", "2025", "Сертификат о прохождении курса «Введение в кибербезопасность»."],
    "fortinet-getting-started-cybersecurity-2025": ["Fortinet — Начало работы в кибербезопасности 3.0", "Курс по основам кибербезопасности", "Fortinet Training Institute", "2025", "Сертификат о прохождении курса Getting Started in Cybersecurity 3.0."],
    "fortinet-threat-landscape-2025": ["Fortinet — Introduction to the Threat Landscape 3.0", "Курс по ландшафту угроз", "Fortinet Training Institute", "2025", "Сертификат о прохождении курса Introduction to the Threat Landscape 3.0."],
    "netriders-ecir-prep-2025": ["NetRiders — eCIR Prep", "Подготовительный курс eCIR", "NetRiders", "2025", "Сертификат о прохождении подготовительного курса eCIR."],
    "netriders-sec450-gsoc-prep-2025": ["NetRiders — SEC450 GSOC Prep", "Подготовка к GSOC", "NetRiders", "2025", "Сертификат о прохождении подготовки SEC450 GSOC."],
    "netriders-sec504-gcih-prep-2025": ["NetRiders — SEC504 GCIH Prep", "Подготовка к GCIH", "NetRiders", "2025", "Сертификат о прохождении подготовки SEC504 GCIH."],
    "netriders-pre-cybersecurity-2025": ["NetRiders — Pre-CyberSecurity", "Подготовительный курс по кибербезопасности", "NetRiders", "2025", "Сертификат о прохождении подготовительного курса Pre-CyberSecurity."],
    "altai-infosec-2025": ["Алтайский государственный университет", "Методы и практики анализа информационной безопасности", "Алтайский государственный университет", "2025", "Сертификат об успешном освоении дополнительной профессиональной программы по методам и практикам анализа информационной безопасности."],
    "eltex-network-2024": ["Академия ELTEX", "Основы сетевых технологий — часть 1", "Академия ELTEX", "24 дек. 2024", "Сертификат об успешном прохождении курса «Основы сетевых технологий. Часть 1»."],
    "jatoba-db-2024": ["Администрирование СУБД Jatoba", "Курс — 40 академических часов", "Jatoba / Газинформсервис", "27 дек. 2024", "Сертификат о прохождении курса по администрированию СУБД Jatoba в объёме 40 академических часов."],
    "urfu-web-2025": ["УрФУ — Веб-разработка", "Профессиональная переподготовка — 288 часов", "Уральский федеральный университет", "29 мая 2025", "Сертификат о профессиональной переподготовке по программе «Основы веб-разработки» в объёме 288 часов."],
    "stepik-algorithms-methods-2025": ["Stepik — Алгоритмы: теория и практика. Методы", "Сертификат о прохождении курса", "Stepik", "2025", "Сертификат о прохождении курса Stepik «Алгоритмы: теория и практика. Методы»."],
    "stepik-python-examples-2023": ["Stepik — Python в примерах и задачах", "Сертификат о прохождении курса", "Stepik", "2023", "Сертификат о прохождении курса Stepik «Python в примерах и задачах»."],
    "ix-ctf-cup-2025": ["IX Кубок CTF России", "Участник отборочного этапа", "IX Кубок CTF России", "2–3 нояб. 2025", "Сертификат участника отборочного этапа IX Кубка CTF России."],
    "cyberbitva-2025": ["Кибербитва 2025", "Участник соревнования по кибербезопасности", "Алтайский IT Форум / Форум «Трансформация» 2025", "2025", "Сертификат, подтверждающий участие в соревновании по кибербезопасности «Кибербитва»."],
    "ural-cup-ctf-2025": ["Кубок Урала по кибербезопасности 2025", "Отборочный этап — команда M2K", "Ural Cup", "21 сент. 2025", "Сертификат участия команды M2K в отборочном этапе Кубка Урала по кибербезопасности."],
    "regional-cup-ctf-2025": ["Кубок регионов CTF 2025", "Jeopardy CTF — команда M2K", "Кубок регионов", "20–21 дек. 2025", "Сертификат участия в онлайн-соревновании «Кубок регионов» в дисциплине CTF."],
    "best-hack-2025": ["BEST HACK 2025", "Участник — финал Data Science", "BEST HACK / Skoltech", "2025", "Сертификат участника финала направления Data Science конкурса BEST HACK 2025."],
    "alfa-budushchee-hackathon-2025": ["Хакатон «Альфа-Будущее» 2025", "Участник хакатона — отборочный этап", "Альфа-Будущее", "2025", "Сертификат участника отборочного этапа хакатона «Альфа-Будущее» 2025."],
    "changellenge-cup-high-quality-15-2025": ["Changellenge Cup Moscow 2025", "High Quality Awards — Top 15%", "Changellenge", "2025", "Сертификат, подтверждающий результат в Top 15% в Changellenge Cup Moscow 2025."],
    "icpc-ural-2025": ["ICPC Ural 2025", "Honorable Mention — отборочный этап Урала", "ICPC Ural Regional Qualification", "18 окт. 2025", "Сертификат достижения с отметкой Honorable Mention в отборочном этапе ICPC Ural 2025."],
    "rucode-final-2025": ["Финал RuCode", "Участник — дивизион E–F", "RuCode", "19 окт. 2025", "Сертификат участника финала международного чемпионата по алгоритмическому программированию RuCode, дивизион E–F."],
    "future-trajectory-olympiad-2026": ["Олимпиада «Будущая траектория» 2026", "Участник олимпиады", "Будущая траектория", "2026", "Сертификат, связанный с участием в олимпиаде «Будущая траектория» 2026."],
    "studrussia-2025": ["StudRussia 2025", "Сертификат участника", "StudRussia", "2025", "Сертификат участника, выданный StudRussia."]
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.endsWith("certificate.html")) return;

    const isRussian = document.documentElement.lang === "ru" || window.location.pathname.startsWith("/ru/");
    const rawId = new URLSearchParams(window.location.search).get("id") || "";
    const id = decodeURIComponent(rawId).trim().toLowerCase();
    const base = Object.prototype.hasOwnProperty.call(certificates, id) ? certificates[id] : null;
    const data = base && isRussian && russian[id]
      ? { ...base, title: russian[id][0], summary: russian[id][1], issuer: russian[id][2], date: russian[id][3], description: russian[id][4] }
      : base;

    const title = document.getElementById("certificate-title");
    const summary = document.getElementById("certificate-summary");
    const issuer = document.getElementById("certificate-issuer");
    const date = document.getElementById("certificate-date");
    const description = document.getElementById("certificate-description");
    const image = document.getElementById("certificate-image");
    const original = document.getElementById("certificate-original");

    const englishSwitch = document.querySelector('.language-switcher a[hreflang="en"]');
    const russianSwitch = document.querySelector('.language-switcher a[hreflang="ru"]');
    const query = window.location.search;
    if (englishSwitch) englishSwitch.href = `/pages/certificate.html${query}`;
    if (russianSwitch) russianSwitch.href = `/ru/pages/certificate.html${query}`;

    if (!data) {
      document.title = isRussian ? "Сертификат не найден | Kirolos Khairy" : "Certificate Not Found | Kirolos Khairy";
      if (title) title.textContent = isRussian ? "Сертификат не найден" : "Certificate Not Found";
      if (summary) summary.textContent = isRussian ? "ID сертификата отсутствует или некорректен." : "The requested certificate ID is missing or invalid.";
      if (issuer) issuer.textContent = isRussian ? "Не указано" : "Not available";
      if (date) date.textContent = isRussian ? "Не указано" : "Not available";
      if (description) description.textContent = isRussian ? "Вернитесь на страницу сертификатов и выберите сертификат." : "Return to the certifications page to choose a certificate.";
      if (original) original.hidden = true;
      return;
    }

    document.title = `${data.title} | Kirolos Khairy`;
    if (title) title.textContent = data.title;
    if (summary) summary.textContent = data.summary;
    if (issuer) issuer.textContent = data.issuer;
    if (date) date.textContent = data.date;
    if (description) description.textContent = data.description;
    if (image) {
      image.alt = isRussian ? `Сертификат ${data.title}` : `${data.title} certificate`;
      image.src = data.image;
      image.onerror = () => {
        if (image.dataset.fallbackApplied !== "true" && data.thumb) {
          image.dataset.fallbackApplied = "true";
          image.src = data.thumb;
          if (original) original.href = data.thumb;
        }
      };
    }
    if (original) {
      original.href = data.image;
      original.addEventListener("click", (event) => {
        if (original.dataset.fallbackApplied === "true") return;
        const probe = new Image();
        probe.onerror = () => {
          event.preventDefault();
          original.dataset.fallbackApplied = "true";
          original.href = data.thumb || data.image;
          original.click();
        };
        probe.src = data.image;
      }, { once: true });
    }
  });
})();

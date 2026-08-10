(() => {
  const certificates = {
    "best-hack-2025": {
      category: "hackathons",
      title: "BEST HACK 2025",
      summary: "Participant — Data Science Final",
      issuer: "BEST HACK",
      date: "2025",
      description: "Participation certificate for the Data Science Final of the BEST HACK 2025 hackathon.",
      image: "/images/Certifications/certificates/best-hack-2025.png",
      thumb: "/images/Certifications/thumbs/best-hack-2025.jpg"
    },
    "jatoba-db-2024": {
      category: "technical-learning",
      title: "Jatoba DB Administration",
      summary: "Course — 40 academic hours",
      issuer: "Jatoba",
      date: "27 Dec 2024",
      description: "Certificate for completing a 40-academic-hour course in Jatoba database administration.",
      image: "/images/Certifications/certificates/jatoba-db-2024.png",
      thumb: "/images/Certifications/thumbs/jatoba-db-2024.jpg"
    },
    "eltex-network-2024": {
      category: "cybersecurity-training",
      title: "ELTEX Academy",
      summary: "Fundamentals of Network Technologies — Part 1",
      issuer: "ELTEX Academy",
      date: "24 Dec 2024",
      description: "Certificate confirming successful completion of the course Fundamentals of Network Technologies, Part 1.",
      image: "/images/Certifications/certificates/eltex-network-2024.png",
      thumb: "/images/Certifications/thumbs/eltex-network-2024.jpg"
    },
    "urfu-web-2025": {
      category: "technical-learning",
      title: "UrFU Web Development",
      summary: "Professional retraining — 288 hours",
      issuer: "Ural Federal University",
      date: "29 May 2025",
      description: "Certificate confirming completion of the professional retraining program Fundamentals of Web Development, 288 hours.",
      image: "/images/Certifications/certificates/urfu-web-2025.png",
      thumb: "/images/Certifications/thumbs/urfu-web-2025.jpg"
    },
    "altai-infosec-2025": {
      category: "cybersecurity-training",
      title: "Altai State University",
      summary: "Information Security Analysis Methods and Practices",
      issuer: "Altai State University",
      date: "2025",
      description: "Certificate confirming completion of additional professional training in methods and practices for analyzing information security.",
      image: "/images/Certifications/certificates/altai-infosec-2025.png",
      thumb: "/images/Certifications/thumbs/altai-infosec-2025.jpg"
    },
    "icpc-ural-2025": {
      category: "other-competitions",
      title: "ICPC Ural 2025",
      summary: "Honorable Mention — Ural Qualification",
      issuer: "ICPC Ural Regional Qualification",
      date: "18 Oct 2025",
      description: "Certificate of Achievement for the 2025 ICPC Ural Qualification, awarded with Honorable Mention.",
      image: "/images/Certifications/certificates/icpc-ural-2025.png",
      thumb: "/images/Certifications/thumbs/icpc-ural-2025.jpg"
    },
    "rucode-final-2025": {
      category: "other-competitions",
      title: "RuCode Final 2025",
      summary: "Participant — Division E-F",
      issuer: "RuCode",
      date: "19 Oct 2025",
      description: "Participant certificate for the final of the international championship in algorithmic programming RuCode, Division E-F.",
      image: "/images/Certifications/certificates/rucode-final-2025.png",
      thumb: "/images/Certifications/thumbs/rucode-final-2025.jpg"
    },
    "ix-ctf-cup-2025": {
      category: "cybersecurity-competitions",
      title: "IX CTF Cup of Russia",
      summary: "Qualification stage participant",
      issuer: "IX CTF Cup of Russia",
      date: "2–3 Nov 2025",
      description: "Certificate of participation in the qualification stage of the IX CTF Cup of Russia.",
      image: "/images/Certifications/certificates/ix-ctf-cup-2025.png",
      thumb: "/images/Certifications/thumbs/ix-ctf-cup-2025.jpg"
    },
    "cyberbitva-2025": {
      category: "cybersecurity-competitions",
      title: "Cyberbitva 2025",
      summary: "Cybersecurity competition participant",
      issuer: "Altai IT Forum / Altai State University",
      date: "2025",
      description: "Certificate of participation in the Cyberbitva cybersecurity competition.",
      image: "/images/Certifications/certificates/cyberbitva-2025.png",
      thumb: "/images/Certifications/thumbs/cyberbitva-2025.jpg"
    },
    "ural-cup-ctf-2025": {
      category: "cybersecurity-competitions",
      title: "Ural Cup Cybersecurity 2025",
      summary: "Qualification stage — Team M2K",
      issuer: "Ural Cup",
      date: "21 Sep 2025",
      description: "Certificate confirming Team M2K's participation in the qualification stage of the Ural Cup cybersecurity competition.",
      image: "/images/Certifications/certificates/ural-cup-ctf-2025.png",
      thumb: "/images/Certifications/thumbs/ural-cup-ctf-2025.jpg"
    },
    "regional-cup-ctf-2025": {
      category: "cybersecurity-competitions",
      title: "Regional Cup CTF 2025",
      summary: "Jeopardy CTF — Team M2K",
      issuer: "Regional Cup CTF",
      date: "20–21 Dec 2025",
      description: "Certificate confirming participation in the Regional Cup CTF 2025 Jeopardy competition as part of Team M2K.",
      image: "/images/Certifications/certificates/regional-cup-ctf-2025.png",
      thumb: "/images/Certifications/thumbs/regional-cup-ctf-2025.jpg"
    },

    "ibm-cybersecurity-fundamentals-2025": {
      category: "cybersecurity-training",
      title: "IBM SkillsBuild — Cybersecurity Fundamentals",
      summary: "Cybersecurity fundamentals",
      issuer: "IBM SkillsBuild",
      date: "26 Oct 2025",
      description: "Certificate issued by IBM SkillsBuild for completing Cybersecurity Fundamentals.",
      image: "/images/Certifications/certificates/ibm-cybersecurity-fundamentals-2025.png",
      thumb: "/images/Certifications/thumbs/ibm-cybersecurity-fundamentals-2025.jpg",
      verify: "https://www.credly.com/badges/a5bfc1bc-9c3e-4adf-8f96-85b68e7b2fc5"
    },
    "cisco-introduction-to-cybersecurity-2025": {
      category: "cybersecurity-training",
      title: "Cisco Networking Academy — Introduction to Cybersecurity",
      summary: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "16 Oct 2025",
      description: "Certificate confirming completion of the Cisco Networking Academy Introduction to Cybersecurity course.",
      image: "/images/Certifications/certificates/cisco-introduction-to-cybersecurity-2025.png",
      thumb: "/images/Certifications/thumbs/cisco-introduction-to-cybersecurity-2025.jpg"
    },
    "fortinet-getting-started-cybersecurity-2025": {
      category: "cybersecurity-training",
      title: "Fortinet — Getting Started in Cybersecurity 3.0",
      summary: "Cybersecurity fundamentals course",
      issuer: "Fortinet Training Institute",
      date: "31 Oct 2025",
      description: "Certificate confirming successful completion of Getting Started in Cybersecurity 3.0.",
      image: "/images/Certifications/certificates/fortinet-getting-started-cybersecurity-2025.png",
      thumb: "/images/Certifications/thumbs/fortinet-getting-started-cybersecurity-2025.jpg"
    },
    "fortinet-threat-landscape-2025": {
      category: "cybersecurity-training",
      title: "Fortinet — Introduction to the Threat Landscape 3.0",
      summary: "Threat landscape course",
      issuer: "Fortinet Training Institute",
      date: "31 Oct 2025",
      description: "Certificate confirming successful completion of Introduction to the Threat Landscape 3.0.",
      image: "/images/Certifications/certificates/fortinet-threat-landscape-2025.png",
      thumb: "/images/Certifications/thumbs/fortinet-threat-landscape-2025.jpg"
    },
    "netriders-ecir-prep-2025": {
      category: "cybersecurity-training",
      title: "NetRiders — eCIR Prep",
      summary: "eCIR preparation course",
      issuer: "NetRiders",
      date: "2025",
      description: "Certificate of completion for the NetRiders eCIR preparation course.",
      image: "/images/Certifications/certificates/netriders-ecir-prep-2025.png",
      thumb: "/images/Certifications/thumbs/netriders-ecir-prep-2025.jpg"
    },
    "netriders-sec450-gsoc-prep-2025": {
      category: "cybersecurity-training",
      title: "NetRiders — SEC450 GSOC Prep",
      summary: "GSOC preparation course",
      issuer: "NetRiders",
      date: "2025",
      description: "Certificate of completion for the NetRiders SEC450 GSOC preparation course.",
      image: "/images/Certifications/certificates/netriders-sec450-gsoc-prep-2025.png",
      thumb: "/images/Certifications/thumbs/netriders-sec450-gsoc-prep-2025.jpg"
    },
    "netriders-sec504-gcih-prep-2025": {
      category: "cybersecurity-training",
      title: "NetRiders — SEC504 GCIH Prep",
      summary: "GCIH preparation course",
      issuer: "NetRiders",
      date: "2025",
      description: "Certificate of completion for the NetRiders SEC504 GCIH preparation course. This is a preparation course, not a GCIH certification.",
      image: "/images/Certifications/certificates/netriders-sec504-gcih-prep-2025.png",
      thumb: "/images/Certifications/thumbs/netriders-sec504-gcih-prep-2025.jpg"
    },
    "netriders-pre-cybersecurity-2025": {
      category: "cybersecurity-training",
      title: "NetRiders — Pre-CyberSecurity",
      summary: "Cybersecurity preparation course",
      issuer: "NetRiders",
      date: "2025",
      description: "Certificate of completion for the NetRiders Pre-CyberSecurity course.",
      image: "/images/Certifications/certificates/netriders-pre-cybersecurity-2025.png",
      thumb: "/images/Certifications/thumbs/netriders-pre-cybersecurity-2025.jpg"
    },
    "alfa-budushchee-hackathon-2025": {
      category: "hackathons",
      title: "Альфа-Будущее Hackathon 2025",
      summary: "Hackathon participant — selection round",
      issuer: "Alfa-Bank",
      date: "15 Dec 2025",
      description: "Participant diploma from the Альфа-Будущее hackathon. The team worked on an intelligent RAG system during the selection round.",
      image: "/images/Certifications/certificates/alfa-budushchee-hackathon-2025.png",
      thumb: "/images/Certifications/thumbs/alfa-budushchee-hackathon-2025.jpg"
    },
    "changellenge-cup-high-quality-15-2025": {
      category: "hackathons",
      title: "Changellenge Cup Moscow 2025",
      summary: "High Quality Awards — Top 15%",
      issuer: "Changellenge",
      date: "2025",
      description: "Diploma recognizing a High Quality Awards result, with the submitted solution placed among the top 15% of solutions in the first round.",
      image: "/images/Certifications/certificates/changellenge-cup-high-quality-15-2025.png",
      thumb: "/images/Certifications/thumbs/changellenge-cup-high-quality-15-2025.jpg"
    },
    "future-trajectory-olympiad-2026": {
      category: "other-competitions",
      title: "Future Trajectory Olympiad — РЕД ОС",
      summary: "Participant certificate",
      issuer: "Future Trajectory / РЕД ОС",
      date: "12 Jan 2026",
      description: "Certificate associated with the Future Trajectory Olympiad, РЕД ОС track for participants aged 17–23.",
      image: "/images/Certifications/certificates/future-trajectory-olympiad-2026.png",
      thumb: "/images/Certifications/thumbs/future-trajectory-olympiad-2026.jpg"
    },
    "stepik-algorithms-methods-2025": {
      category: "technical-learning",
      title: "Stepik — Algorithms: Theory and Practice. Methods",
      summary: "Course certificate",
      issuer: "Stepik",
      date: "2025",
      description: "Certificate for completing the Stepik course Algorithms: Theory and Practice. Methods.",
      image: "/images/Certifications/certificates/stepik-algorithms-methods-2025.png",
      thumb: "/images/Certifications/thumbs/stepik-algorithms-methods-2025.jpg"
    },
    "stepik-python-examples-2023": {
      category: "technical-learning",
      title: "Stepik — Python in Examples and Problems",
      summary: "Course certificate",
      issuer: "Stepik",
      date: "22 Mar 2023",
      description: "Certificate for completing the Stepik course Python in Examples and Problems.",
      image: "/images/Certifications/certificates/stepik-python-examples-2023.png",
      thumb: "/images/Certifications/thumbs/stepik-python-examples-2023.jpg"
    },
    "studrussia-2025": {
      category: "other-competitions",
      title: "СтудRussia 2025",
      summary: "Participant — Ural Federal District",
      issuer: "СтудRussia",
      date: "7–8 Nov 2025",
      description: "Participant certificate for the All-Russian competition for international students СтудRussia in the Ural Federal District.",
      image: "/images/Certifications/certificates/studrussia-2025.png",
      thumb: "/images/Certifications/thumbs/studrussia-2025.jpg"
    }
  };

  const russianCertificates = {
    "best-hack-2025": {
      summary: "Участник — финал Data Science",
      issuer: "BEST HACK",
      date: "2025",
      description: "Сертификат участника финала направления Data Science хакатона BEST HACK 2025."
    },
    "jatoba-db-2024": {
      summary: "Курс — 40 академических часов",
      issuer: "Jatoba",
      date: "27 дек. 2024",
      description: "Сертификат о прохождении курса по администрированию баз данных Jatoba объёмом 40 академических часов."
    },
    "eltex-network-2024": {
      summary: "Основы сетевых технологий — часть 1",
      issuer: "Академия ELTEX",
      date: "24 дек. 2024",
      description: "Сертификат об успешной сдаче экзамена по курсу «Основы сетевых технологий. Часть 1»."
    },
    "urfu-web-2025": {
      summary: "Профессиональная переподготовка — 288 часов",
      issuer: "Уральский федеральный университет",
      date: "29 мая 2025",
      description: "Сертификат о прохождении профессиональной переподготовки по программе «Основы веб-разработки» объёмом 288 часов."
    },
    "altai-infosec-2025": {
      summary: "Методы и практики анализа информационной безопасности",
      issuer: "Алтайский государственный университет",
      date: "2025",
      description: "Сертификат об успешном освоении дополнительной профессиональной программы повышения квалификации «Методы и практики анализа защищенности информационных систем»."
    },
    "icpc-ural-2025": {
      summary: "Honorable Mention — отборочный этап Урала",
      issuer: "ICPC Ural Regional Qualification",
      date: "18 окт. 2025",
      description: "Сертификат о достижении Honorable Mention на отборочном этапе ICPC Ural 2025."
    },
    "rucode-final-2025": {
      summary: "Участник — дивизион E-F",
      issuer: "RuCode",
      date: "19 окт. 2025",
      description: "Сертификат участника финала международного чемпионата по алгоритмическому программированию «РуКод», дивизион E-F."
    },
    "ix-ctf-cup-2025": {
      summary: "Участник отборочного этапа",
      issuer: "IX Кубок CTF России",
      date: "2–3 нояб. 2025",
      description: "Сертификат участника отборочного этапа IX Кубка CTF России."
    },
    "cyberbitva-2025": {
      summary: "Участник соревнования по кибербезопасности",
      issuer: "Алтайский ИТ-форум / АлтГУ",
      date: "2025",
      description: "Сертификат участника киберсоревнования «КИБЕРБИТВА»."
    },
    "ural-cup-ctf-2025": {
      summary: "Отборочный этап — команда M2K",
      issuer: "Кубок Урала",
      date: "21 сент. 2025",
      description: "Подтверждение участия команды M2K в отборочном этапе Кубка Урала по кибербезопасности."
    },
    "regional-cup-ctf-2025": {
      summary: "Jeopardy CTF — команда M2K",
      issuer: "Regional Cup CTF",
      date: "20–21 дек. 2025",
      description: "Сертификат участия команды M2K в соревновании Regional Cup CTF 2025."
    },
    "ibm-cybersecurity-fundamentals-2025": {
      summary: "Основы кибербезопасности",
      issuer: "IBM SkillsBuild",
      date: "26 окт. 2025",
      description: "Сертификат IBM SkillsBuild о прохождении курса Cybersecurity Fundamentals."
    },
    "cisco-introduction-to-cybersecurity-2025": {
      summary: "Введение в кибербезопасность",
      issuer: "Cisco Networking Academy",
      date: "16 окт. 2025",
      description: "Сертификат об успешном прохождении курса Cisco Networking Academy «Introduction to Cybersecurity»."
    },
    "fortinet-getting-started-cybersecurity-2025": {
      summary: "Getting Started in Cybersecurity 3.0",
      issuer: "Fortinet Training Institute",
      date: "31 окт. 2025",
      description: "Сертификат об успешном прохождении курса Getting Started in Cybersecurity 3.0."
    },
    "fortinet-threat-landscape-2025": {
      summary: "Introduction to the Threat Landscape 3.0",
      issuer: "Fortinet Training Institute",
      date: "31 окт. 2025",
      description: "Сертификат об успешном прохождении курса Introduction to the Threat Landscape 3.0."
    },
    "netriders-ecir-prep-2025": {
      summary: "Подготовительный курс eCIR",
      issuer: "NetRiders",
      date: "2025",
      description: "Сертификат о прохождении подготовительного курса NetRiders eCIR Prep."
    },
    "netriders-sec450-gsoc-prep-2025": {
      summary: "Подготовка к GSOC",
      issuer: "NetRiders",
      date: "2025",
      description: "Сертификат о прохождении подготовительного курса NetRiders SEC450 GSOC Prep."
    },
    "netriders-sec504-gcih-prep-2025": {
      summary: "Подготовка к GCIH",
      issuer: "NetRiders",
      date: "2025",
      description: "Сертификат о прохождении подготовительного курса NetRiders SEC504 GCIH Prep. Это подготовительный курс, а не сертификация GCIH."
    },
    "netriders-pre-cybersecurity-2025": {
      summary: "Подготовительный курс по кибербезопасности",
      issuer: "NetRiders",
      date: "2025",
      description: "Сертификат о прохождении подготовительного курса NetRiders Pre-CyberSecurity."
    },
    "alfa-budushchee-hackathon-2025": {
      summary: "Участник хакатона — отборочный тур",
      issuer: "Альфа-Банк",
      date: "15 дек. 2025",
      description: "Диплом участника хакатона «Альфа-Будущее». Команда работала над созданием интеллектуальной RAG-системы в отборочном туре."
    },
    "changellenge-cup-high-quality-15-2025": {
      summary: "High Quality Awards — Top 15%",
      issuer: "Changellenge",
      date: "2025",
      description: "Диплом за результат High Quality Awards: решение вошло в число лучших 15% решений первого тура."
    },
    "future-trajectory-olympiad-2026": {
      summary: "Сертификат участника — РЕД ОС",
      issuer: "Future Trajectory / РЕД ОС",
      date: "12 янв. 2026",
      description: "Сертификат, связанный с олимпиадой «Траектория будущего», направление РЕД ОС для участников 17–23 лет."
    },
    "stepik-algorithms-methods-2025": {
      summary: "Сертификат о прохождении курса",
      issuer: "Stepik",
      date: "2025",
      description: "Сертификат о прохождении курса Stepik «Алгоритмы: теория и практика. Методы»."
    },
    "stepik-python-examples-2023": {
      summary: "Сертификат о прохождении курса",
      issuer: "Stepik",
      date: "22 марта 2023",
      description: "Сертификат о прохождении курса Stepik «Python в примерах и задачах»."
    },
    "studrussia-2025": {
      summary: "Участник — Уральский федеральный округ",
      issuer: "СтудRussia",
      date: "7–8 нояб. 2025",
      description: "Сертификат участника всероссийского конкурса для иностранных обучающихся «СтудRussia» в Уральском федеральном округе."
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.endsWith("certificate.html")) return;

    const isRussian = document.documentElement.lang === "ru";
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const certificate = certificates[id]
      ? { ...certificates[id], ...(isRussian ? russianCertificates[id] : {}) }
      : null;

    const englishSwitch = document.querySelector('.language-switcher a[hreflang="en"]');
    const russianSwitch = document.querySelector('.language-switcher a[hreflang="ru"]');

    if (englishSwitch) {
      englishSwitch.href = `/pages/certificate.html${window.location.search}`;
    }

    if (russianSwitch) {
      russianSwitch.href = `/ru/pages/certificate.html${window.location.search}`;
    }

    const title = document.getElementById("certificate-title");
    const summary = document.getElementById("certificate-summary");
    const issuer = document.getElementById("certificate-issuer");
    const date = document.getElementById("certificate-date");
    const description = document.getElementById("certificate-description");
    const image = document.getElementById("certificate-image");
    const original = document.getElementById("certificate-original");

    if (!certificate) {
      if (title) title.textContent = isRussian ? "Сертификат не найден" : "Certificate Not Found";
      if (summary) summary.textContent = isRussian ? "ID сертификата отсутствует или некорректен." : "The requested certificate ID is missing or invalid.";
      if (description) description.textContent = isRussian ? "Вернитесь на страницу сертификатов и выберите сертификат." : "Return to the certifications page to choose a certificate.";
      if (original) original.hidden = true;
      return;
    }

    document.title = `${certificate.title} | Kirolos Khairy`;

    if (title) title.textContent = certificate.title;
    if (summary) summary.textContent = certificate.summary;
    if (issuer) issuer.textContent = certificate.issuer;
    if (date) date.textContent = certificate.date;
    if (description) description.textContent = certificate.description;

    if (image) {
      image.src = certificate.image;
      image.alt = isRussian ? `Сертификат ${certificate.title}` : `${certificate.title} certificate`;
    }

    if (original) {
      original.href = certificate.image;
    }
  });
})();

(() => {
  const certificates = {
    "best-hack-2025": {
      title: "BEST HACK 2025",
      summary: "Participant - Data Science Final",
      issuer: "BEST HACK",
      date: "2025",
      description: "Participation certificate for the Data Science Final.",
      image: "/images/Certifications/1.PNG",
      thumb: "/images/Certifications/thumbs/cert-01.jpg"
    },
    "jatoba-db-2024": {
      title: "Jatoba DB Administration",
      summary: "Course - 40 academic hours",
      issuer: "Jatoba",
      date: "27 Dec 2024",
      description: "Database administration course certificate.",
      image: "/images/Certifications/2%20%D0%A1%D0%A3%D0%91%D0%94.PNG",
      thumb: "/images/Certifications/thumbs/cert-02.jpg"
    },
    "eltex-network-2024": {
      title: "ELTEX Academy",
      summary: "Network Technologies Basics - Part 1",
      issuer: "ELTEX Academy",
      date: "24 Dec 2024",
      description: "Network technologies basics certificate.",
      image: "/images/Certifications/3%20eltix.PNG",
      thumb: "/images/Certifications/thumbs/cert-03.jpg"
    },
    "urfu-web-2025": {
      title: "UrFU Web Development",
      summary: "Professional retraining - 288 hours",
      issuer: "Ural Federal University",
      date: "29 May 2025",
      description: "Professional retraining certificate in web development.",
      image: "/images/Certifications/4%20%D0%94%D0%9F%D0%9E.PNG",
      thumb: "/images/Certifications/thumbs/cert-04.jpg"
    },
    "altai-infosec-2025": {
      title: "Altai State University",
      summary: "Information security analysis methods and practices",
      issuer: "Altai State University",
      date: "2025",
      description: "Certificate connected to information security analysis methods and practices.",
      image: "/images/Certifications/5%20%D0%B0%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9.PNG",
      thumb: "/images/Certifications/thumbs/cert-05.jpg"
    },
    "icpc-ural-2025": {
      title: "ICPC Ural 2025",
      summary: "Honorable Mention - Ural Qualification",
      issuer: "ICPC Ural Regional Qualification",
      date: "18 Oct 2025",
      description: "Programming contest participation record with honorable mention.",
      image: "/images/Certifications/6%20ICPC.PNG",
      thumb: "/images/Certifications/thumbs/cert-06.jpg"
    },
    "rucode-final-2025": {
      title: "RuCode Final",
      summary: "Participant - Division E-F",
      issuer: "RuCode",
      date: "Oct 2025",
      description: "RuCode programming competition final participation certificate.",
      image: "/images/Certifications/7%20%D1%80%D1%83%D0%BA%D0%BE%D0%B4.PNG",
      thumb: "/images/Certifications/thumbs/cert-07.jpg"
    },
    "ix-ctf-cup-2025": {
      title: "IX CTF Cup of Russia",
      summary: "Qualification stage participant",
      issuer: "IX CTF Cup of Russia",
      date: "2-3 Nov 2025",
      description: "Qualification stage participation certificate for an online CTF competition.",
      image: "/images/Certifications/8%20IX_CTF_Cup.PNG",
      thumb: "/images/Certifications/thumbs/cert-08.jpg"
    },
    "cyberbitva-2025": {
      title: "Cyberbitva",
      summary: "Cybersecurity competition participant",
      issuer: "Altai IT Forum",
      date: "2025",
      description: "Participation certificate for cybersecurity competition tasks.",
      image: "/images/Certifications/9%20%D0%9A%D0%98%D0%91%D0%95%D0%A0%D0%91%D0%98%D0%A2%D0%92%D0%90.PNG",
      thumb: "/images/Certifications/thumbs/cert-09.jpg"
    },
    "ural-cup-ctf-2025": {
      title: "Ural Cup Cybersecurity",
      summary: "Qualification stage - Team M2K",
      issuer: "Ural Cup",
      date: "21 Sep 2025",
      description: "Qualification stage participation record for Team M2K.",
      image: "/images/Certifications/10%20URAL_CTF2025.PNG",
      thumb: "/images/Certifications/thumbs/cert-10.jpg"
    },
    "regional-cup-ctf-2025": {
      title: "Regional Cup CTF 2025",
      summary: "Jeopardy CTF - Team M2K",
      issuer: "Regional Cup CTF",
      date: "20-21 Dec 2025",
      description: "Jeopardy CTF participation certificate for Team M2K.",
      image: "/images/Certifications/11%20RegionalCup-CTF-2025.PNG",
      thumb: "/images/Certifications/thumbs/cert-11.jpg"
    }
  };

  const russianCertificates = {
    "best-hack-2025": {
      summary: "Участник - финал Data Science",
      issuer: "BEST HACK",
      date: "2025",
      description: "Сертификат участника финала направления Data Science."
    },
    "jatoba-db-2024": {
      summary: "Курс - 40 академических часов",
      issuer: "Jatoba",
      date: "27 дек. 2024",
      description: "Сертификат о прохождении курса по администрированию баз данных."
    },
    "eltex-network-2024": {
      summary: "Основы сетевых технологий - часть 1",
      issuer: "ELTEX Academy",
      date: "24 дек. 2024",
      description: "Сертификат по основам сетевых технологий."
    },
    "urfu-web-2025": {
      summary: "Профессиональная переподготовка - 288 часов",
      issuer: "Уральский федеральный университет",
      date: "29 мая 2025",
      description: "Сертификат о профессиональной переподготовке по веб-разработке."
    },
    "altai-infosec-2025": {
      summary: "Методы и практики анализа информационной безопасности",
      issuer: "Алтайский государственный университет",
      date: "2025",
      description: "Сертификат, связанный с методами и практиками анализа информационной безопасности."
    },
    "icpc-ural-2025": {
      summary: "Honorable Mention - отборочный этап Урала",
      issuer: "ICPC Ural Regional Qualification",
      date: "18 окт. 2025",
      description: "Подтверждение участия в соревновании по программированию с отметкой Honorable Mention."
    },
    "rucode-final-2025": {
      summary: "Участник - дивизион E-F",
      issuer: "RuCode",
      date: "окт. 2025",
      description: "Сертификат участника финала соревнования RuCode."
    },
    "ix-ctf-cup-2025": {
      summary: "Участник отборочного этапа",
      issuer: "IX CTF Cup of Russia",
      date: "2-3 нояб. 2025",
      description: "Сертификат участника отборочного этапа онлайн CTF-соревнования."
    },
    "cyberbitva-2025": {
      summary: "Участник соревнования по кибербезопасности",
      issuer: "Altai IT Forum",
      date: "2025",
      description: "Сертификат участника задач по кибербезопасности."
    },
    "ural-cup-ctf-2025": {
      summary: "Отборочный этап - команда M2K",
      issuer: "Ural Cup",
      date: "21 сент. 2025",
      description: "Подтверждение участия команды M2K в отборочном этапе."
    },
    "regional-cup-ctf-2025": {
      summary: "Jeopardy CTF - команда M2K",
      issuer: "Regional Cup CTF",
      date: "20-21 дек. 2025",
      description: "Сертификат участия команды M2K в Jeopardy CTF."
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
    if (englishSwitch) englishSwitch.href = `/pages/certificate.html${window.location.search}`;
    if (russianSwitch) russianSwitch.href = `/ru/pages/certificate.html${window.location.search}`;

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
    if (original) original.href = certificate.image;
  });
})();

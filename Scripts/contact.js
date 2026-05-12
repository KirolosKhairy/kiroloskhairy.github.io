(() => {
  const emailConfig = {
    publicKey: "m4YvjgS6NYFnYJOl0",
    serviceId: "service_k1c2d5a",
    templateId: "template_bqore2a"
  };

  function getFormData(form) {
    const data = new FormData(form);
    return {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim()
    };
  }

  function buildMailto(data) {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      data.message
    ].join("\n");

    return `mailto:kiroloskhairy2019@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
  }

  function setStatus(statusElement, message) {
    if (statusElement) statusElement.textContent = message;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submit = document.getElementById("contact-submit");
    const status = document.getElementById("form-status");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = getFormData(form);

      if (!data.name || !data.email || !data.subject || !data.message) {
        setStatus(status, "Please fill in every required field.");
        return;
      }

      if (submit) {
        submit.disabled = true;
        submit.textContent = "Sending...";
      }
      setStatus(status, "Sending your message...");

      const time = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      try {
        if (window.emailjs && typeof window.emailjs.send === "function") {
          window.emailjs.init({ publicKey: emailConfig.publicKey });
          await window.emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            time
          });
          form.reset();
          setStatus(status, "Message sent successfully.");
          return;
        }

        setStatus(status, "Email service is unavailable. Opening your mail app instead.");
        window.location.href = buildMailto(data);
      } catch {
        setStatus(status, "The form service failed. Opening your mail app instead.");
        window.location.href = buildMailto(data);
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = "Send Message";
        }
      }
    });
  });
})();

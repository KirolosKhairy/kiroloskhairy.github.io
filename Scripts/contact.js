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

  function buildMailto(data, labels) {
    const body = [
      `${labels.name}: ${data.name}`,
      `${labels.email}: ${data.email}`,
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

    const messages = {
      required: form.dataset.requiredMessage || "Please fill in every required field.",
      sendingLabel: form.dataset.sendingLabel || "Sending...",
      sending: form.dataset.sendingMessage || "Sending your message...",
      success: form.dataset.successMessage || "Message sent successfully.",
      emailUnavailable: form.dataset.emailUnavailableMessage || "Email service is unavailable. Opening your mail app instead.",
      fallback: form.dataset.fallbackMessage || "The form service failed. Opening your mail app instead.",
      submitLabel: form.dataset.submitLabel || "Send Message",
      locale: form.dataset.locale || "en-US",
      mailNameLabel: form.dataset.mailNameLabel || "Name",
      mailEmailLabel: form.dataset.mailEmailLabel || "Email"
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = getFormData(form);

      if (!data.name || !data.email || !data.subject || !data.message) {
        setStatus(status, messages.required);
        return;
      }

      if (submit) {
        submit.disabled = true;
        submit.textContent = messages.sendingLabel;
      }
      setStatus(status, messages.sending);

      const time = new Date().toLocaleString(messages.locale, {
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
          setStatus(status, messages.success);
          return;
        }

        setStatus(status, messages.emailUnavailable);
        window.location.href = buildMailto(data, {
          name: messages.mailNameLabel,
          email: messages.mailEmailLabel
        });
      } catch {
        setStatus(status, messages.fallback);
        window.location.href = buildMailto(data, {
          name: messages.mailNameLabel,
          email: messages.mailEmailLabel
        });
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = messages.submitLabel;
        }
      }
    });
  });
})();

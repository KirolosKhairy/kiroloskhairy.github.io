(() => {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(() => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("primary-nav");
    const scrollTop = document.getElementById("scroll-to-top");

    function closeMenu() {
      if (!toggle || !menu) return;
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    }

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        document.body.classList.toggle("menu-open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
      });

      const wideScreen = window.matchMedia("(min-width: 821px)");
      wideScreen.addEventListener("change", closeMenu);
    }

    if (scrollTop) {
      let ticking = false;
      const updateScrollButton = () => {
        scrollTop.classList.toggle("is-visible", window.scrollY > 500);
        ticking = false;
      };

      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollButton);
          ticking = true;
        }
      }, { passive: true });

      updateScrollButton();

      scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})();

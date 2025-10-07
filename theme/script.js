// Анимация появления секций
(function () {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), idx * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  } else {
    // Фолбек
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }

  // Эффект header при скролле
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 60) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      },
      { passive: true },
    );
  }
})();

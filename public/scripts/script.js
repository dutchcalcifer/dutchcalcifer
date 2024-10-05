document.addEventListener("DOMContentLoaded", () => {
  const isChromium = () =>
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChromium()) document.body.classList.add("chrome");

  const sections = document.querySelectorAll("section"),
    observer = new IntersectionObserver(
      (entries) => {
        sections.forEach((section) => {
          section.style.filter = entries.some((entry) => entry.isIntersecting)
            ? "invert(1)"
            : "invert(0)";
        });
      },
      { threshold: 0.5 }
    );

  observer.observe(sections[sections.length - 1]);
});

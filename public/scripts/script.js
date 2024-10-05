document.addEventListener("DOMContentLoaded", () => {
  const isChromium = () =>
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChromium()) document.body.classList.add("chrome");

  const body = document.querySelector("body"),
    sections = document.querySelectorAll("section"),
    observer = new IntersectionObserver(
      (entries) => {
        body.style.filter = entries.some((entry) => entry.isIntersecting)
          ? "invert(1)"
          : "invert(0)";
      },
      { threshold: 0.5 }
    );

  observer.observe(sections[sections.length - 1]);
});

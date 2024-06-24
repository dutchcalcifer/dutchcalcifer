document.addEventListener("DOMContentLoaded", function () {
  var isNotSafari = navigator.userAgent.includes("Chrome");

  if (!isNotSafari) {
    var spans = document.querySelectorAll(".wave-text span:not(.isNotSafari)");
    spans.forEach(function (span) {
      span.classList.add("isNotSafari");
    });
  }

  document.getElementById("arrow").addEventListener("click", function () {
    document.getElementById("socials").scrollIntoView({ behavior: "smooth" });
  });
});

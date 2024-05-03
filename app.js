document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".fade-in-section");

  function fadeInSections() {
    sections.forEach(function (section) {
      var sectionPosition = section.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        section.classList.add("fade-in");
      } else {
        section.classList.remove("fade-in");
      }
    });
  }

  // Tüm bölümleri sayfa yüklendiğinde görünür yap
  sections.forEach(function (section) {
    section.classList.add("fade-in");
  });

  // Scroll olayını dinle
  window.addEventListener("scroll", fadeInSections);
});

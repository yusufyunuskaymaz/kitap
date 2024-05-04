// document.addEventListener('DOMContentLoaded', function() {
//     var sections = document.querySelectorAll('.fade-in-section');
//     var animationDoneFlags = Array.from({ length: sections.length }, () => false);
  
//     function fadeInSections() {
//       sections.forEach(function(section, index) {
//         var sectionPosition = section.getBoundingClientRect().top;
//         var screenPosition = window.innerHeight / 1.3;
  
//         // Eğer animasyon daha önce çalışmamışsa ve içeriği ekrana getirecek kadar aşağıya scroll edildiyse,
//         // section'a fade-in sınıfını ekle ve bayrağı true yap
//         if (!animationDoneFlags[index] && sectionPosition < screenPosition) {
//           section.classList.add('fade-in');
//           animationDoneFlags[index] = true;
//         }
//       });
//     }
  
//     // Tüm bölümleri sayfa yüklendiğinde görünür yap
//     fadeInSections();
  
//     // Scroll olayını dinle
//     window.addEventListener('scroll', fadeInSections);
//   });
  
// Presses the achievement stamps in when their card scrolls into view.
// The page is complete without this file.
(function () {
  "use strict";
  var cards = document.querySelectorAll(".stampcard");
  if (!cards.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("stamps-ready");
  var seen = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        seen.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );
  cards.forEach(function (card) {
    seen.observe(card);
  });
})();

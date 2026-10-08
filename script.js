document.addEventListener("DOMContentLoaded", function () {
  var themeBtn = document.getElementById("themeBtn");
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");

  if (themeBtn) {
    var savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    }

    var updateThemeButton = function () {
      var isDark = document.documentElement.dataset.theme === "dark";
      var label = isDark ? "Activer le thème clair" : "Activer le thème sombre";
      themeBtn.setAttribute("aria-label", label);
      themeBtn.setAttribute("title", label);
      themeBtn.firstElementChild.textContent = isDark ? "☀" : "☾";
    };

    updateThemeButton();
    themeBtn.addEventListener("click", function () {
      var isDark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = isDark ? "dark" : "light";
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
      updateThemeButton();
    });
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // Fallback if the photo file is missing: show initials instead of a broken image
  var photo = document.getElementById("profilePhoto");
  if (photo) {
    photo.addEventListener("error", function () {
      var frame = photo.parentElement;
      photo.remove();
      frame.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:\'JetBrains Mono\',monospace;font-size:2.5rem;font-weight:700;color:#5B5B5B;">KY</div>';
    });
  }
});

//Generated using ChatGPT

(function () {
  const STORAGE_KEY = "theme";

  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || "light";
  }

  // Set the initial theme
  setTheme(getTheme());

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    if (!button) return;

    function updateButton() {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );

      if (icon) {
        icon.textContent = isDark ? "☀️" : "🌙";
      }
    }

    updateButton();

    button.addEventListener("click", function () {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      const newTheme = isDark ? "light" : "dark";

      setTheme(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);

      updateButton();
    });
  });
})();

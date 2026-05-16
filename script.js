const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

themeToggle.addEventListener("click", function () {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

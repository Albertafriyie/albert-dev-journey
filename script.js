// Dark Mode Toggle
const html = document.documentElement; // the <html> element
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector("theme-icon");

// Apply theme: sets attribute + updates button icon and label
function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Check if user has a saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) applyTheme("dark");
}
/*
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}
else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    html.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }
} */

// Listen for button clicks
themeToggle.addEventListener("click", function () {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
/*
  if (currentTheme === "dark") {
    html.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }*/

// React to OS change
window
  .matchMedia("(prefers-color-scheme)")
  .addEventListener("change", function (e) {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

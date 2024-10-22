// Dark Mode Toggle Script
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load theme preference from localStorage if it exists
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Toggle dark/light mode
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', theme);
});

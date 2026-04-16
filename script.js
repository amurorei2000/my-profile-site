// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Restore saved theme preference from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Theme toggle button click handler
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update DOM
    html.setAttribute('data-theme', newTheme);

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Update button icon
    updateThemeIcon(newTheme);
  });

  // Update theme icon based on current theme
  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeToggleBtn.textContent = '☀️';
      themeToggleBtn.title = 'Light mode로 전환';
    } else {
      themeToggleBtn.textContent = '🌙';
      themeToggleBtn.title = 'Dark mode로 전환';
    }
  }

  // Respect system preference if no saved theme
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    html.setAttribute('data-theme', systemTheme);
    updateThemeIcon(systemTheme);
  }
});

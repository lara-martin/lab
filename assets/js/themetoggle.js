// themetoggle.js

document.getElementById('theme-toggle').addEventListener('click', function() {
  const html = document.documentElement;
  if (html.classList.contains('theme-light')) {
    html.classList.remove('theme-light');
    html.classList.add('theme-dark');
  } else {
    html.classList.remove('theme-dark');
    html.classList.add('theme-light');
  }
});

// Set current year in all footers
document.querySelectorAll("#year").forEach(span => {
  span.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  const target = TEST_LINKS[key];

  if (!target) {
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  link.href = target;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

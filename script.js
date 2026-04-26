const filterButtons = document.querySelectorAll(".filter-pill");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.categories.split(" ");
      card.classList.toggle("is-hidden", !categories.includes(filter));
    });
  });
});

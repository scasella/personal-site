const filterButtons = document.querySelectorAll(".filter-pill");
const projectCards = document.querySelectorAll(".project-card");

const applyFilter = (filter) => {
  projectCards.forEach((card) => {
    const categories = card.dataset.categories.split(" ");
    card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });

    applyFilter(filter);
  });
});

const activeFilter = document.querySelector(".filter-pill.is-active")?.dataset.filter;

if (activeFilter) {
  applyFilter(activeFilter);
}

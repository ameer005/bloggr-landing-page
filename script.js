const menuBtn = document.querySelector(".nav__menu");

document.addEventListener("click", function (e) {
  const isDropdownButton = e.target.closest(".nav__link");

  if (!isDropdownButton && e.target.closest("nav__item") !== null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = isDropdownButton.closest(".nav__item");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll(".nav__item.active").forEach((dropDown) => {
    if (dropDown === currentDropdown) return;
    dropDown.classList.remove("active");
  });
});

menuBtn.addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("active-nav");
});

// BURGER MENU
const burgerButton = document.getElementById("burger-btn");
const burgerNav = document.querySelector(".burger-nav");

burgerButton.addEventListener("click", () => {
  animateBurger();
  menuDisplay();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    burgerButton.classList.remove("change");
    burgerNav.classList.remove("burger-nav-show");
  }
});

window.addEventListener("click", function (event) {
  if (!burgerButton.contains(event.target)) {
    burgerNav.classList.remove("burger-nav-show");
    burgerButton.classList.remove("change");
  }
});

function animateBurger() {
  burgerButton.classList.toggle("change");
}

function menuDisplay() {
  if (burgerNav.classList.contains("burger-nav-show")) {
    burgerNav.classList.remove("burger-nav-show");
  } else {
    burgerNav.classList.add("burger-nav-show");
  }
}

// CUSTOM SELECT OPTION
document
  .querySelector(".custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (event) {
  const select = document.querySelector(".custom-select");
  if (!select.contains(event.target)) {
    select.classList.remove("open");
  }
});

// SELECTED CATEGORY DISPLAY
window.addEventListener("load", function () {
  if (window.innerWidth >= 1024) {
    document.getElementById("pizzas").style = "display: grid";
  } else {
    document.getElementById("pizzas").style = "display: block";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    document.getElementById("pizzas").style = "display: grid";
  }
});

const options = document.querySelectorAll(".custom-option");
const categories = document.querySelectorAll("article");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    for (let j = 0; j < categories.length; j++) {
      if (options[i].dataset.value === categories[j].id) {
        if (window.innerWidth >= 1024) {
          categories[j].style = "display: grid";
        } else {
          categories[j].style = "display: block";
        }
      } else {
        categories[j].style = "display: none";
      }
    }
  });
}

// GO TO TOP BUTTON
const topButton = document.getElementById("top-btn");

window.addEventListener("scroll", () => displayOnScroll());
topButton.addEventListener("click", () => scrollToTop());

function displayOnScroll() {
  if (topButton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      topButton.style.display = "flex";
    } else {
      topButton.style.display = "none";
    }
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

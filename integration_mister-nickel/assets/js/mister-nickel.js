// BURGER MENU
const burgerButton = document.getElementById("burger-btn");
const burgerNav = document.querySelector(".burger-nav");
const navButtons = burgerNav.getElementsByTagName("li");
console.log(navButtons);

burgerButton.addEventListener("click", () => {
  animateBurger();
  menuDisplay();
  burgerButton.classList.toggle("active-burger-icon-background");
});

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    burgerButton.classList.remove("change");
    burgerNav.classList.remove("burger-nav-show");
    burgerButton.classList.remove("active-burger-icon-background");
  }
});

window.addEventListener("click", function (event) {
  if (!burgerButton.contains(event.target)) {
    burgerNav.classList.remove("burger-nav-show");
    burgerButton.classList.remove("change");
    burgerButton.classList.remove("active-burger-icon-background");
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

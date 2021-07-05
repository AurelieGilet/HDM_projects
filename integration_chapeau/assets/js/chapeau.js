// MENU DISPLAY 
const softDrink = document.getElementById("soft-drink");
const strongDrink = document.getElementById("strong-drink");
const softDrinkOverlay = document.getElementById("soft-drink-overlay");
const strongDrinkOverlay = document.getElementById("strong-drink-overlay");
const softDrinkList = document.getElementById("soft-drink-list");
const strongDrinkList = document.getElementById("strong-drink-list");

console.log(softDrink);

softDrink.addEventListener("mouseenter", () => softDrinkMenuShow());
softDrink.addEventListener("mouseleave", () => softDrinkMenuHide());
strongDrink.addEventListener("mouseenter", () => strongDrinkMenuShow());
strongDrink.addEventListener("mouseleave", () => strongDrinkMenuHide());


function softDrinkMenuShow() {
    softDrinkOverlay.classList.add("show");
    softDrinkList.classList.add("show");
}

function softDrinkMenuHide() {
    softDrinkOverlay.classList.remove("show");
    softDrinkList.classList.remove("show");
}


function strongDrinkMenuShow() {
    strongDrinkOverlay.classList.add("show");
    strongDrinkList.classList.add("show");
}

function strongDrinkMenuHide() {
    strongDrinkOverlay.classList.remove("show");
    strongDrinkList.classList.remove("show");
}
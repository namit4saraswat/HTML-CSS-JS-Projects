const textEl = document.getElementById("text-area");
const totalEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textEl.addEventListener("keyup", () => {
    updateCounter();
})

function updateCounter(){
    totalEl.innerText = textEl.ariaValueMax.length;
    remainingEl.innerText = textElgetAttribute("maxLength") - textEl.ariaValueMax.length;
}
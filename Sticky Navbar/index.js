const navBarEl = document.querySelector(".navbar");
const bottomContEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomContEl.offSetTop - navBarEl.offSetHeight - 50 > 0){
        navBarEl.classList.add("active");
    }else{
        navBarEl.classList.remove("activer");
    }
})
let btn = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");




btn.addEventListener("click",() => {
    menu.classList.toggle("phone-links");
})



function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
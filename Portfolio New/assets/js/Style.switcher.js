
//============================ Toggle Icon ================================//
const styleToggleSwitcher = document.querySelector('.style-switcher-toggle');
styleToggleSwitcher.addEventListener("click", () => {
     document.querySelector('.style-switcher').classList.toggle('open');
})

window.addEventListener("scroll", () => {
     if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
     }
})


//============================ Switcher Color  ================================//
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")) {
             style.removeAttribute("disabled");
        } else{
            style.setAttribute("disabled", "true"); 
        }
    })
}
//============================ Day & Night Mode ================================//

const dayNight  = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle("fa-home");
    dayNight.querySelector('i').classList.toggle("fa-facebook");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
     if(document.body.classList.contains("dark")) {
        dayNight.querySelector('i').classList.add("fa-home");
     } else{
        dayNight.querySelector('i').classList.add("fa-facebook");
     }
})
const IS_ACTIVE = "is--active";

let menuToggle = document.querySelector("[data-toggle-menu]");
let closeMenu = document.querySelector("[data-close-menu]");
let searchToggle = document.querySelector("[data-toggle-search]")

let carousel = document.querySelector("[data-carousel]")
let carouselSlide = document.querySelectorAll("[data-carousel-slide]")
let nextBtn =  document.querySelector("[data-next-slide]")
let prevBtn =  document.querySelector("[data-prev-slide]")

let carouselArr = Array.from(carouselSlide);

carouselArr.forEach(function(slide, index) {
    console.log(slide, index)
    if(slide.classList.contains(IS_ACTIVE)) {
        sliderIndex = index;
    }
})

function toggleNav() {
    let menu = document.querySelector("[data-mobile-menu]");
    menu.classList.add(IS_ACTIVE)
    menu.ariaExpanded = "true"
}

function closeNav() {
    let menu = document.querySelector("[data-mobile-menu]");
    menu.classList.remove(IS_ACTIVE)
    menu.ariaExpanded = "false"
}

function toggleSearch() {
    let searchBar = document.querySelector("[data-search-bar]");
    if(searchBar.classList.contains(IS_ACTIVE)) {
        searchBar.classList.remove(IS_ACTIVE)
        searchBar.ariaExpanded = "false"
    } else {
        searchBar.classList.add(IS_ACTIVE)
        searchBar.ariaExpanded = "false"
    }
}

menuToggle.addEventListener("click", toggleNav)
closeMenu.addEventListener("click", closeNav)
searchToggle.addEventListener("click", toggleSearch)

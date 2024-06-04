const IS_ACTIVE = "is--active";

//setting slider index at 0 
let sliderIndex = 0;
let paginationIndex = 0;

let menuToggle = document.querySelector("[data-toggle-menu]");
let closeMenu = document.querySelector("[data-close-menu]");
let searchToggle = document.querySelector("[data-toggle-search]")

let carousel = document.querySelector("[data-carousel]")
let carouselSlide = document.querySelectorAll("[data-carousel-slide]")
let nextSlide =  document.querySelector("[data-next-slide]")
let prevSlide =  document.querySelector("[data-prev-slide]")
let paginationItem = document.querySelectorAll("[data-pagination-item]")

let carouselArr = Array.from(carouselSlide);
let paginationArr = Array.from(paginationItem);

function initSlide(slide, index) {
    if(slide.classList.contains(IS_ACTIVE)) {
        sliderIndex = index;
    }
}
carouselArr.forEach(initSlide)
paginationArr.forEach(initSlide)

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

function showNextSlide() {
    carouselSlide[sliderIndex].classList.remove(IS_ACTIVE);
    paginationItem[paginationIndex].classList.remove(IS_ACTIVE);
    sliderIndex++;
    paginationIndex++;
    //start over
    if (sliderIndex == carouselSlide.length) {
        sliderIndex = 0;
        paginationIndex = 0
    }
    carouselSlide[sliderIndex].classList.add(IS_ACTIVE);
    paginationItem[paginationIndex].classList.add(IS_ACTIVE);
}

function showPrevSlide() {
    carouselSlide[sliderIndex].classList.remove(IS_ACTIVE);
    paginationItem[paginationIndex].classList.remove(IS_ACTIVE);
    sliderIndex--;
    paginationIndex--;

    //start over
    if (sliderIndex < 0) {
        sliderIndex = carouselSlide.length - 1;
        paginationIndex = paginationItem.length - 1;
    }
    carouselSlide[sliderIndex].classList.add(IS_ACTIVE);
    paginationItem[paginationIndex].classList.add(IS_ACTIVE);
}

menuToggle.addEventListener("click", toggleNav)
closeMenu.addEventListener("click", closeNav)
searchToggle.addEventListener("click", toggleSearch)

nextSlide.addEventListener("click", showNextSlide)
prevSlide.addEventListener("click", showPrevSlide)
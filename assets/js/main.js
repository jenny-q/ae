const IS_ACTIVE = "is--active";

//setting slider index at 0 
let sliderIndex = 0;
let paginationIndex = 0;

let menuToggle = document.querySelectorAll("[data-toggle-menu]");
let searchToggle = document.querySelector("[data-toggle-search]")
let carouselSlide = document.querySelectorAll("[data-carousel-slide]")
let nextSlide =  document.querySelector("[data-next-slide]")
let prevSlide =  document.querySelector("[data-prev-slide]")
let paginationItem = document.querySelectorAll("[data-pagination-item]")
let footerToggle = document.querySelectorAll("[data-toggle-footer]")

let carouselArr = Array.from(carouselSlide);
let paginationArr = Array.from(paginationItem);

function toggleNav() {
    let menu = document.querySelector("[data-mobile-menu]");
    menu.classList.toggle(IS_ACTIVE)
    if(menu.classList.contains(IS_ACTIVE)) {
        menuToggle.forEach(item => {
            item.ariaExpanded= "true"
        })
    } else {
        menuToggle.forEach(item => {
            item.ariaExpanded= "false"
        })
    }
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

footerToggle.forEach(item => {
    item.addEventListener("click", function(){
        this.parentElement.classList.toggle(IS_ACTIVE);
        this.ariaExpanded = "true"
    })
})

searchToggle.addEventListener("click", toggleSearch)
nextSlide.addEventListener("click", showNextSlide)
prevSlide.addEventListener("click", showPrevSlide)


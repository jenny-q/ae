const IS_ACTIVE = "is--active";

//setting slider index at 0 
let sliderIndex = 0;
let paginationIndex = 0;

let slideBtn = document.querySelectorAll("[data-btn-slide]")
let menuToggle = document.querySelectorAll("[data-toggle-menu]");
let searchToggle = document.querySelector("[data-toggle-search]")
let carouselSlide = document.querySelectorAll("[data-carousel-slide]")
let paginationItem = document.querySelectorAll("[data-pagination-item]")
let footerToggle = document.querySelectorAll("[data-toggle-footer]")

let carouselArr = Array.from(carouselSlide);
let paginationArr = Array.from(paginationItem);

const toggleNav = () => {
    menu.classList.toggle(IS_ACTIVE)
    if (menu.classList.contains(IS_ACTIVE)) {
        menuToggle.forEach(item => {
            item.ariaExpanded = "true"
        })
    } else {
        menuToggle.forEach(item => {
            item.ariaExpanded = "false"
        })
    }
}

const toggleSearch = () => {
    let searchBar = document.querySelector("[data-search-bar]");
    searchBar.classList.toggle(IS_ACTIVE)
    if (searchBar.classList.contains(IS_ACTIVE)) {
        searchBar.ariaExpanded = "false"
    } else {
        searchBar.ariaExpanded = "false"
    }
}

const toggleFooter = () => {
    this.parentElement.classList.toggle(IS_ACTIVE);
}

const resetCarouselSlide = () => {
    carouselSlide[sliderIndex].classList.remove(IS_ACTIVE);
    paginationItem[paginationIndex].classList.remove(IS_ACTIVE);
};

const activeCarouselSlide = () => {
    carouselSlide[sliderIndex].classList.add(IS_ACTIVE);
    paginationItem[paginationIndex].classList.add(IS_ACTIVE);
};

function initCarousel(){
    resetCarouselSlide();
    if(this.hasAttribute('data-next-slide')) {
        paginationItem[paginationIndex].classList.remove(IS_ACTIVE);
        sliderIndex++;
        paginationIndex++;
        //start over
        if (sliderIndex == carouselSlide.length) {
            sliderIndex = 0;
            paginationIndex = 0
        }
    } else {
        sliderIndex--;
        paginationIndex--;
        //start over
        if (sliderIndex < 0) {
            sliderIndex = carouselSlide.length - 1;
            paginationIndex = paginationItem.length - 1;
        }
    }
    activeCarouselSlide();
}

slideBtn.forEach(item => {
    item.addEventListener("click", initCarousel)
});
footerToggle.forEach(item => {
    item.addEventListener("click", toggleFooter);
});
searchToggle.addEventListener("click", toggleSearch);
AE Code

## Fonts
I added the missing google font link in the `index.html` file.

For all js functions, I went ahead and used a data attribute to target elements instead of a class.

## Mobile Menu
The hamburger icon and the close icon both have the same data attribute:
`let menuToggle = document.querySelectorAll("[data-toggle-menu]");`

At first I had two separate functions, one for close and one for open (see commit - link here), but I cleaned it up a bit so that I have one toggle fuction:
`menuToggle.forEach(item => {
    item.addEventListener("click", toggleNav)
})`

The `toggleNav` function will toggle a class called `is--active`. I also make sure that the aria-expanded attribute for accessibility updates accordingly.

## Site Logo
I could not export the different image sizes from Invision, so I went ahead and just copied the existing svg and created two new svg files:
- `bb-logo-desktop.svg` - has the desktop size specified in file
- `bb-logo-mobile.svg` - has the correct mobile size.

I added a sourceset that will show the correct image based on media query.

## Icons
I could not export the icons from Invision.  For this exercise, I had to use icons from https://heroicons.com/

The hamburger menu icon is from hero icons, I was able to use the search and cart icon from the assets folder.

## Hero Banner
Just like the mobile nav, I went ahead and used data-attributes to target elements for the carousel.

The carousel items inside the carousel - e.g. slide 1, slide 2 - have a data-attribute called `data-carousel-slide`. 
I create an array of these items.

When a user clicks on `showNextSlide`, the `is--active` class is removed from the active slide, and the array index is incremented by 1.

When the sliderIndex is equal to the length of the items in carousel array, it will start over at 0

Finally, add the is--active class to the active slide item.

The pagination is updated along with the carousel,the logic is identical.

The `prevSlide` function is doing the same, but in reverse.
The array is decremented by 1, and the function checks to see if the slider index is less than the amount of items in the carousel.

## Site Search
I am toggling the `is--active` class on icon click. I used the exact same styling as the email input field in the mobile navigation.

## Footer
I grabbed the existing social media icons in the assets folder and created a list for accessibility. The images have an empty alt, and I have added an aria-label to the anchor tag.

Please note - I am using the tiktok.svg, but it is rendering as a twitter icon instead

I am also toggling the 'is--active' class on the footer. On click, I add the 'is--active' class on the parent level. Once that class is on the parent level, the list will show up.

## Responsive Views
I added the proper meta tags so responsive view is working.

## Testing
I think the style is matching the design overall. I have attached mobile/desktop screenshots using Fireshot. Please let me know what you think!


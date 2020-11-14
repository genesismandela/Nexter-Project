//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== MODAL GALLERY ========== //
const galleryModal = document.querySelector('.modal-gallery'); // Variable with the Gallery Modal Container
const galleryClose = document.querySelector('.modal-gallery__close'); // Variable with the button to close the Gallery
const gallery = document.querySelector('.gallery'); // Variable with the gallery pictures on the main page

// Make the Modal Gallery open when any picture on gallery is clicked
gallery.addEventListener('click', function() {
    galleryModal.classList.remove('modal-gallery__hidden');
})

// Make the Modal Gallery close when close button on modal gallery is clicked
galleryClose.addEventListener('click', function() {
    galleryModal.classList.add('modal-gallery__hidden');
})


const gallerySlider = document.querySelector('.modal-gallery__container'); // Variable with the Image Slider
const gallerySlides = document.querySelectorAll('.modal-gallery__container__img'); // Variable with the Images Slides

const arrowLeft = document.querySelector('.modal-gallery__arrow__back'); // Variable with the LEFT-PREV Arrow
const arrowRight = document.querySelector('.modal-gallery__arrow__next'); // Variable with le RIGHT-NEXT Arrow

let currentSlide = 0; // Set the current or active image to 0 to navigate between images later on
const maxSlide = gallerySlides.length; // Set the length of the Images

// Function that styles the gallery, translating all pictures in a row
const goToSlide =  function (slide) {
    gallerySlides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%`));
}   
goToSlide(0);

// Function to make the Right Arrow work to slide between images
const nextSlide = function() {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
}

// Function to make the Left Arrow work to slide between images
const prevSlide = function() {
    if (currentSlide === 0) {
        currentSlide = maxSlide -1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
}

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

// Make the keywords Arrow Left and Right work to slide between images and the Escape to close the modal
document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }

    if (e.key === 'Escape') {
        galleryModal.classList.add('modal-gallery__hidden');
    }

});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== BURGER AND NAVIGATION EVENT ========= //
const btnBurger = document.querySelector('.hamburger'); // Variable for Hamburger 
const navMenu = document.querySelector('.navigation'); // Variable for Nav Menu
const navLink = document.querySelectorAll('.navigation__link'); // Variable for links inside Nav Menu

    // Function to open and close the Navigation Menu with 'TOGGLE'
    function openNavMenu() {
        btnBurger.classList.toggle('is-active');
        navMenu.classList.toggle('nav-hidden');
        console.log('Navigation show-hide');
    }; // Call the OpenNavMenu function when Hamburger is clicked
    btnBurger.addEventListener('click', openNavMenu); 

    // Function to close Navigation Menu when links inside are clicked
    function closeNavMenu() {
        btnBurger.classList.remove('is-active');
        navMenu.classList.toggle('nav-hidden');

        navLink.addEventListener('click', closeNavMenu); 
        console.log('Navigation Menu Closed');
    };   // Call the closeNavMenu function when links are clicked

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== HOMES BTN OPENS CONTACT FORM ========== //
const openForm = document.querySelectorAll('.home__btn'); // Variable with all Contact Realtor buttons
const closeBtnModal = document.querySelector('.contact-modal__close');  // Variable with the button to close the modal
const overlay = document.querySelector('.contact-modal__overlay'); // Variable with the overlay button to close the modal

    // Function to open the modal form
    function openFormModal () {
        const contactModal = document.querySelector('.contact-modal'); // Set the modal-form to a variable inside the function
        contactModal.classList.remove('contact-modal__hidden'); // When calling the function will remove the class that is hidding the modal
        
        // Body variable to make the body fixed when modal is open
        const body = document.body; 
        body.style.overflow = 'hidden';

        // Loop to open the modal when Contact Realtor buttons are clicked
        for (i = 0; openForm; i++) {
        openForm[i].addEventListener('click', openFormModal);
        };

        // Log to the console that the modal has been opened
        console.log('Contact modal form opened');
    };

    // Function to close the modal form
    function closeModal () {
        const contactModal = document.querySelector('.contact-modal'); // Set the modal-form to a variable inside the function
        contactModal.classList.add('contact-modal__hidden'); // When calling the function will add the call that is showing the modal

        // Body variable to make the body scroll the modal is close
        const body = document.body;
        body.style.overflow = 'scroll';  
        
        // Log to the console that the modal has been closed
        console.log('Contact modal form closed');
    };

    // Call the close modal when close button is clicked
    closeBtnModal.addEventListener('click', closeModal);
    // Call the close modal when overlay is clicked
    overlay.addEventListener('click', closeModal);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== HOMES HEART TOGGLE COLOR ========== //
const toggleHeart = document.querySelectorAll('.heart'); // Variable with all SVG hearts in homes

    // Create a function that toggle a CSS class to change color when clicked
    function toggleColor(toggleHeart) {
        toggleHeart.classList.toggle('disable');
        toggleHeart.classList.toggle('active');
    };


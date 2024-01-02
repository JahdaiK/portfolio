/* Global Variables
-------------------------------------------------------------- */
// The next button HTML element
const next = document.querySelector('.next')
// The previous button HTML element
const prev = document.querySelector('.prev')
// The carousel image HTML elements
const images = document.getElementsByClassName('images');

// This will store the index of the current image
let currentImgIndex = 0;
console.log('Initial index:', currentImgIndex)
// This will store the index of the previous image
let previousImgIndex = 0;



/* Next button logic
-------------------------------------------------------------- */
next.addEventListener('click', () => {
    // The image being displayed currently will now become the previous image
    previousImgIndex = currentImgIndex
    // The next image in the carousel will now become the current image
    currentImgIndex++
    console.log(currentImgIndex)

    // Loop back to the beginning when on the last image
    if (currentImgIndex >= images.length) {
        console.log('Too high of an index! Going to reset to 0!')
        currentImgIndex = 0;
    }

    // Hide the current image (which is now the previous image)
    images[previousImgIndex].style.display = 'none'
    // Display the next image (which is now the current image)
    images[currentImgIndex].style.display = 'block'
})



/* Prev button logic
-------------------------------------------------------------- */
prev.addEventListener('click', () => {
    // The image being displayed currently will now become the previous image
    previousImgIndex = currentImgIndex
    // The previous image in the carousel will now become the current image
    currentImgIndex--
    console.log(currentImgIndex)

    // Loop back to the beginning when on the last image
    if (currentImgIndex < 0) {
        console.log('Too low of an index! Going to reset to 4!')
        currentImgIndex = images.length - 1;
    }

    // Hide the current image (which is now the previous image)
    images[previousImgIndex].style.display = 'none'
    // Display the next image (which is now the current image)
    images[currentImgIndex].style.display = 'block'
})
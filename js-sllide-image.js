// get elements from DOM
const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const descriptionElement = document.querySelector('.caption p');

// data from slider
const images = ["christmas1.jpg","christmas2.jpg","christmas3.jpg"];

const headings = ["New York, USA", "Tokyo, Japan", "Dubai, UAE"];
const descriptions = ["The city that never sleeps", "The city of lights", "Home to the tallest skyscraper"];

// slider ID
let id = 0;

// the slider function
function slide(id) {
    slider.style.backgroundImage = `url(jpg/${images[id]})`;
    console.log("1111111111111"+`url(jpg/${images[id]})`);
    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    // change heading
    heading.innerText = headings[id];
    // change description
    descriptionElement.innerText = descriptions[id];
}

// add click events to arrows
arrLeft.addEventListener('click', () => {
    // decrement img id
    id--;
    if (id < 0) {
        // change to last image
        id = images.length - 1;
    }
    slide(id);
});

arrRight.addEventListener('click', () => {
    // increment img id;
    id++;
    if (id > images.length - 1) {
        // change to first image
        id = 0;
    }
    slide(id);
});

// Initial slide
slide(id);
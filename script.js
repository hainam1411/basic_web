// slide show

const images = [
    {src: 'img1.png', title: 'Once upon a Story', price: '15.50$'},
    {src: 'img2.png', title: 'Love Finds the Way', price: '20.99$'},
    {src: 'img3.png', title: 'Rose', price: '10.00$'},
    {src: 'img4.png', title: 'It Ends with Us', price: '31.25$'},
    {src: 'img5.png', title: 'The Fault in Our Stars', price: '7.50$'}
];

let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const imageTitle = document.getElementById('image-title');
const imagePrice = document.getElementById('image-price')
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateSlider (){
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    imageTitle.textContent = images[currentIndex].title;
    imagePrice.textContent = images[currentIndex].price;
}

rightArrow.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

leftArrow.addEventListener('click', () =>{
    currentIndex = (currentIndex - 1) % images.length;
    updateSlider();
});


function myFunction() {
    alert('this is my function');
}

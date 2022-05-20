//// Slider HEADER////
const slidesHeaderImages = document.querySelectorAll('.fondo-header .slides-header-img');
const nextImageDelay = 5000;
let currentImageCounter = 0;

// slidesHeaderImages[currentImageCounter].style.display = 'block';
slidesHeaderImages[currentImageCounter].style.opacity = 0.7;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slidesHeaderImages[currentImageCounter].style.display = 'none';
    slidesHeaderImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slidesHeaderImages.length;
    // slidesHeaderImages[currentImageCounter].style.display = 'block';
    slidesHeaderImages[currentImageCounter].style.opacity = 0.7;


}






//// Slider SHOP STORE////
const prev = document.querySelector('.prev-shop-store')
const next = document.querySelector('.next-shop-store')
const slider = document.querySelector('.slider-shop-store')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 189
        // alert('Slider')
})

next.addEventListener('click', () => {
    slider.scrollLeft += 189
})

////Subtitulo y texto////

const platform1 = document.querySelector('.platform1')
const platform2 = document.querySelector('.platform2')
const platform3 = document.querySelector('.platform3')

platform1.addEventListener('click', () => {
    document.querySelector('.text').innerHTML = "Adipisicing elit. Consectetur officiis doloribus voluptatem. Asperiores corporis exercitationem, quos nesciunt eligendi omnis cum expedita impedit ab. Deserunt incidunt accusamus architecto inventore velit magni."
    document.querySelector('.subtitle').innerHTML = "PlayStation4<br> in all GCC countries"
})
platform2.addEventListener('click', () => {
    document.querySelector('.text').innerHTML = "Asperiores corporis exercitationem, quos nesciunt eligendi omnis cum expedita impedit ab. Deserunt incidunt accusamus architecto inventore velit magni."
    document.querySelector('.subtitle').innerHTML = "XBOX<br> in all GCC countries"
})
platform3.addEventListener('click', () => {
    document.querySelector('.text').innerHTML = " Consectetur officiis doloribus voluptatem. Asperiores corporis exercitationem, quos nesciunt eligendi omnis cum expedita impedit ab."
    document.querySelector('.subtitle').innerHTML = "Nintendo Wii<br> in all GCC countries"
})
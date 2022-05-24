//// Slider HEADER////LAUTARO
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
////END Slider HEADER////LAUTARO


// SLIDER SCROLL TOP-GAME // FER // 
const sliderTopGame = document.querySelector('.slider-top-game')
const prevTopGame = document.querySelector('.prev-top-game')
const nextTopgame = document.querySelector('.next-top-game')

prevTopGame.addEventListener('click', () => {
    sliderTopGame.scrollLeft -= 240
})

nextTopgame.addEventListener('click', () => {
        sliderTopGame.scrollLeft += 240
    })
    //END SLIDER SCROLL TOP-GAME // FER // 


//// Slider SHOP STORE////ZALO
const prev = document.querySelector('.prev-shop-store')
const next = document.querySelector('.next-shop-store')
const slider = document.querySelector('.slider-shop-store')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 189
})

next.addEventListener('click', () => {
        slider.scrollLeft += 189
    })
    ////END Slider SHOP STORE////ZALO


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
    ////END Subtitulo y texto////
//// Slider////
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
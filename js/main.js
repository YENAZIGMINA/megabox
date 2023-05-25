/* ✔스와이퍼 사이트 - Initialize Swiper 복붙 */
// #banner - .slider 
const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
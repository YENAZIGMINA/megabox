/* ✔스와이퍼 사이트 - Initialize Swiper 복붙 */
// 💛#banner - .slider 
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


  // 💛movie
  // Initialize Swiper 복붙
  const swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 4, //화면에 4개 보이기
    spaceBetween: 10,
  
  });

  //movie tab menu
  let movBtn = $('.movie_title ul li');
  let movCont = $('.movie_chart>div');

  movCont.hide().eq(0).show(); //스와이퍼 첫번째 슬라이드만 보이기
  movBtn.click(function(e){
    e.preventDefault();
    let target = $(this)
    let index = target.index(); //클릭한 li의 index 번호추출
    console.log(index)
    movCont.hide().eq(index).show(); //모두 지우고, 인덱스 번호와 동등한 div 보임
    movBtn.removeClass("active"); //모든 li에 active 지우기
    target.addClass("active"); //클릭한 li에 active 추가

  });
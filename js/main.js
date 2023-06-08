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
    //✔ breakpoints --> 1.뷰포터의 넓이 / 2.빨간점 찍어서 에러찾을 때 사용(점찍은 만큼 실행하도록 하게함)
    breakpoints: {
      // 뷰포터의 넓이 >= 0px
      0: {
        slidesPerView: 1.4,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 600px
      600: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 960px
      960: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  
  });

  //movie tab menu
  let movBtn = $('.movie_title ul li');
  let movCont = $('.movie_chart>div');

  movCont.hide().eq(0).show(); //스와이퍼 첫번째 슬라이드만 보이기
  movBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index(); //클릭한 li의 index 번호추출
    console.log(index)
    movCont.hide().eq(index).show(); //모두 지우고, 인덱스 번호와 동등한 div 보임
    movBtn.removeClass("active"); //모든 li에 active 지우기
    target.addClass("active"); //클릭한 li에 active 추가

  });


  // 공지사항 notice
  let tabmenu = $('.notice');

  tabmenu.find('ul>li>ul').hide(); // .find() --> 띄워쓰기
  tabmenu.find('ul>li.active>ul').show();

  tabmenu.find('ul>li>a').click(function(e){
    e.preventDefault();
    let target = $(this);
    //.next() --> 나의 바로 아래동생
    //.nextAll() --> 나의 아래동생들
    tabmenu.find('ul>li>a').next().hide();
    target.next().show();

    tabmenu.find('ul>li').removeClass('active')
    target.parent().addClass('active'); // a태그의 부모에게 클래스 active를 넣어라
    //.parent() --> 상위요소
    //.parents() --> 상위요소들

  })
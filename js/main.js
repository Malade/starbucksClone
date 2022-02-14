const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder', '');
})

const toTopEl = document.querySelector('#to-top');
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });

    // 맨 위로 가는 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    })

  } else {
    //배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
      // display는 중간값이 없기 때문에 자연스러운 애니메이션 처리를 위해 opacity 속성을 이용,
      // 애니메이션 처리를 한 후 클릭이 되지 않도록 display 속성을 사용해 없애준다
    });

    // 맨 위로 가는 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x : 100,
    });

  }
}, 300 ));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .7, // 0.7 1.4 2.1 2.8 초 마다 각각 실행되도록 만듦
    opacity : 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true,
})

new Swiper('.promotion .swiper', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백(px 단위)
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  // autoplay: {
  //   delay : 500,
  // },
  pagination : {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable : true, // 사용자의 페이지 번호 요소 제어 가능 여부(클릭 가능 여부)
  },
  navigation : {
    prevEl : '.promotion .swiper-prev', // 이전 swiper 요소로 넘어가는 버튼
    nextEl : '.promotion .swiper-next', // 다음 swiper 요소로 넘어가는 버튼
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loope : true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 다시 보이게
    promotionEl.classList.remove('hide')
  }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true, // 진행된 애니메이션 반대로 다시 진행 (아래로 내려갔다면 위로 올림)
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, // 보여짐 여부를 감시할 요소
      triggerHook : .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 년도 가져오기


/*- new-products-slider -*/
const swiper = new Swiper(".news-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".slider-arrow .swiper-button-next",
    prevEl: ".slider-arrow .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
  },
});

/*- tabs -*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/*- mobile menu -*/
let toggleButton = document.querySelector('.header__mob-btn');
let navBar = document.querySelector('.header__bottom-panel');
toggleButton.addEventListener('click', function () {
  toggleButton.classList.toggle('open');
  navBar.classList.toggle('open');
});

/*- main-navi -*/
const iconUpDown = document.querySelectorAll(".main-navi_down-arrow a");
iconUpDown.forEach(link => {
  link.addEventListener("click", e => {
    link.classList.toggle("active")
    link.parentElement.classList.toggle("open");
  })
})
/*- new-products-slider -*/
const swiper = new Swiper(".news-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".slider-arrow .swiper-button-next",
    prevEl: ".slider-arrow .swiper-button-prev",
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

// return;
const swiperFeatured = new Swiper('#swiper-featured', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.35,
  spaceBetween: 30,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '#swiper-featured-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-featured-button-next',
    prevEl: '#swiper-featured-button-prev',
  },

  breakpoints: {
    993: {
      slidesPerView: 4,
      centeredSlides: false,
    }
  }
});

const swiperDeals = new Swiper('#swiper-deals', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.35,
  spaceBetween: 30,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '#swiper-deals-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-deals-button-next',
    prevEl: '#swiper-deals-button-prev',
  },

  breakpoints: {
    993: {
      slidesPerView: 2,
      centeredSlides: false
    }
  }
});

const swiperBrands = new Swiper('#swiper-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.35,
  spaceBetween: 30,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '#swiper-brands-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-brands-button-next',
    prevEl: '#swiper-brands-button-prev',
  },

  breakpoints: {
    993: {
      slidesPerView: 4,
      centeredSlides: false,
    }
  }
});

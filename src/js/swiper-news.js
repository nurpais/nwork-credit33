import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

if (document.querySelector(".swiper-news")) {
  const swiper = new Swiper(".swiper-news", {
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: ".swiper-news .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

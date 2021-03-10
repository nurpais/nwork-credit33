import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

if (document.querySelector(".swiper-reviews")) {
  const swiper = new Swiper(".swiper-reviews", {
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: ".swiper-reviews .swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-reviews .swiper-next",
      prevEl: ".swiper-reviews .swiper-prev",
    },
  });
}

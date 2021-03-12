if (document.querySelector(".navbar")) {
  document.querySelector(".navbar__burger").addEventListener("click", function () {
    this.closest(".navbar").classList.toggle("navbar--active");
  });

  document.querySelectorAll(".dropdown").forEach(function (el) {
    el.addEventListener("click", function () {
      this.closest(".dropdown").classList.toggle("dropdown--active");
    });
  });

  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 32) {
      document.documentElement.classList.add("navbar--sticky");
    } else {
      document.documentElement.classList.remove("navbar--sticky");
    }
  });
}

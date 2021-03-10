if (document.querySelector(".accordion")) {
  const accordions = document.querySelectorAll(".accordion__header");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.closest(".accordion").classList.toggle("accordion--active");

      if (this.closest(".accordion").classList.contains("accordion--active")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 30 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = null;
      }
    });
  });
}

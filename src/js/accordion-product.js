if (document.querySelector(".product-accordion")) {
  let accordions = document.querySelectorAll(".product-accordion__header");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.closest(".product-accordion").classList.toggle("product-accordion--active");

      if (this.closest(".product-accordion").classList.contains("product-accordion--active")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
      } else {
        this.nextElementSibling.style.maxHeight = null;
      }
    });
  });
}

// $(document).ready(function () {
//   $(".main-slider-content").slick();
// });

let openBtn = document.querySelector("#main-catalog-item-ordersummerid");
openBtn.addEventListener("click", function () {
  openBtn.classList.add("main-catalog-item-ordersummer");

  openBtn.textContent = "Нет в наличии!";
});

document.querySelector(".header nav .hamberger-menu-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.add("cb-show-modal");
});

document.querySelector("body .cb-modal-content .cb-close-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
});

document.querySelectorAll("body .cb-modal-content ul li").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
  });
});

document.querySelector(".contact-section .contact-btn").addEventListener("click", function (e) {
  e.preventDefault();
});

var header = document.querySelector('.header');
var headerMobile = document.querySelector('.header-mobile');
var bodyEl = document.querySelector('body');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('style-scroll');

    headerMobile.classList.add('style-scroll-mobile');
  } else {
    header.classList.remove('style-scroll');

    headerMobile.classList.remove('style-scroll-mobile');

  }
})

function openMobileMenu() {
  headerMobile.style.display = "none";
  header.style.display = "block";
  bodyEl.style.height = "100vh";
  bodyEl.style.overflow = "hidden";

}
function closeMobileMenu() {
  headerMobile.style.display = "block";
  header.style.display = "none";
  bodyEl.style.height = "";
  bodyEl.style.overflow = "";

}
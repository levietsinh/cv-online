var resumeNavItem = document.querySelectorAll('.resume-item');
var resumeContentItem = document.querySelectorAll('.resume-body');
var content2 = document.querySelector('.content-2');
var content3 = document.querySelector('.content-3');
var header = document.querySelector('.header');
var topOfResume = content2.offsetTop - 89;
var topOfContact = content3.offsetTop - 89;
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('style-scroll');
  } else {
    header.classList.remove('style-scroll');
  }
})
function selectItem(index) {
  for (let i = 0; i < resumeNavItem.length; i++) {
    if (index === i) {
      resumeNavItem[i].classList.add('active');
      resumeContentItem[i].classList.add('show');
    } else {
      resumeNavItem[i].classList.remove('active');
      resumeContentItem[i].classList.remove('show');

    }  
  }
}

function scrollToResume() {
  window.scroll({ top: topOfResume, behavior: "smooth" });
}
function scrollToContact() {
  window.scroll({ top: topOfContact, behavior: "smooth" });

}
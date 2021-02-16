var resumeNavItem = document.querySelectorAll('.resume-item');
var resumeContentItem = document.querySelectorAll('.resume-body');
var content2 = document.querySelector('.content-2');
var content3 = document.querySelector('.content-3');

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
  content2.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContact() {
  content3.scrollIntoView({ behavior: 'smooth' });
}
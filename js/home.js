


var resumeNavItem = document.querySelectorAll('.resume-item');
var resumeContentItem = document.querySelectorAll('.resume-body');
var resumeRight = document.querySelector('.resume-right');
function isMobile() {
  if (window.innerWidth > 767) return false;
  else return true;
}

function selectItem(index) {
  if (isMobile()) {
    showResumeContent();
  }
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

function showResumeContent() {
  resumeRight.classList.add('show');
  resumeRight.classList.remove('hide');
}
function showResumeMenu() {
  resumeRight.classList.remove('show');
  resumeRight.classList.add('hide');
}
var resumeNavItem = document.querySelectorAll('.resume-item');
var resumeContentItem = document.querySelectorAll('.resume-body');
var content2 = document.querySelector('.content-2');
var content3 = document.querySelector('.content-3');

var topOfResume = content2.offsetTop - 89;
var topOfContact = content3.offsetTop - 89;
var urlHash = location.hash;
var navItem = document.querySelectorAll('.header__nav ul li');


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
function toHome() {
    window.scroll({ top: 0, behavior: "smooth" });
    for (let index = 0; index < navItem.length; index++) {
      if (index === 0) {
        navItem[index].classList.add('selected');
      } else {
        navItem[index].classList.remove('selected');
      }
    }
}

function scrollToResume() {
  window.scroll({ top: topOfResume, behavior: "smooth" });
  for (let index = 0; index < navItem.length; index++) {
    if (index === 2) {
      navItem[index].classList.add('selected');
    } else {
      navItem[index].classList.remove('selected');
    }
  }
}
function scrollToContact() {
  window.scroll({ top: topOfContact, behavior: "smooth" });
  for (let index = 0; index < navItem.length; index++) {
    if (index === 3) {
      navItem[index].classList.add('selected');
    } else {
      navItem[index].classList.remove('selected');
    }
  }

}


if (urlHash === '#resume') {
  scrollToResume();
  for (let index = 0; index < navItem.length; index++) {
    if (index === 2) {
      navItem[index].classList.add('selected');
    } else {
      navItem[index].classList.remove('selected');
    }
  }
} 
else if (urlHash === '#contact') {
  scrollToContact();
  for (let index = 0; index < navItem.length; index++) {
    if (index === 3) {
      navItem[index].classList.add('selected');
    } else {
      navItem[index].classList.remove('selected');
    }
  }
} else {
  for (let index = 0; index < navItem.length; index++) {
    if (index === 0) {
      navItem[index].classList.add('selected');
    } else {
      navItem[index].classList.remove('selected');
    }
  }
}

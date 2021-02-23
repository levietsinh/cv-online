var header = document.querySelector('.header');
var headerMobile = document.querySelector('.header-mobile');
var bodyEl = document.querySelector('body');

var content2 = document.querySelector('.content-2');
var content3 = document.querySelector('.content-3');

var topOfResume = content2.offsetTop - 89;
var topOfContact = content3.offsetTop - 89;
var urlHash = location.hash;
var navItem = document.querySelectorAll('.header__nav ul li');

function isMobile() {
  if (window.innerWidth > 767) return false;
  else return true;
}



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
  header.classList.add('show');
  header.classList.remove('hide');
  bodyEl.style.height = "100vh";
  bodyEl.style.overflow = "hidden";

}
function closeMobileMenu() {
  headerMobile.style.display = "block";
  header.classList.remove('show');
  header.classList.add('hide');
  bodyEl.style.height = "";
  bodyEl.style.overflow = "";

}

function toHome() {
  if (isMobile()) closeMobileMenu();
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
  if (isMobile()) {
    closeMobileMenu();
    window.scroll({ top: topOfResume + 30, behavior: "smooth" });
  } else {
    window.scroll({ top: topOfResume, behavior: "smooth" });

  }
  
for (let index = 0; index < navItem.length; index++) {
  if (index === 2) {
    navItem[index].classList.add('selected');
  } else {
    navItem[index].classList.remove('selected');
  }
}
}
function scrollToContact() {
  if (isMobile()) {
    closeMobileMenu();
    window.scroll({ top: topOfContact + 30, behavior: "smooth" });
  } else {
    window.scroll({ top: topOfContact, behavior: "smooth" });
}
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

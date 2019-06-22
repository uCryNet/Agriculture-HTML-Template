// Add submenu ::after
(function(){
    var menu = document.querySelectorAll('.header__hav--items ul li ul');
    for (let index = 0; index < menu.length; index++) {
        const element = menu[index];
        element.parentElement.classList.add('submenu-parent');
    }
})();
// Responsive
// Menu
var toggle = document.getElementById('toggle');
toggle.onclick = () => {

  let mobileMenuBg = document.getElementById('mobile-menu__bg'); // mobile menu fullscreen background
  let scrollLine = document.querySelector('.scroll-line'); // two vertical lines
  let menuMobile = document.querySelector('.header__hav'); // mobile menu

  if (mobileMenuBg.style.display == 'block') {
    mobileMenuBg.style.display = 'none';
    scrollLine.style.display = 'block';
    menuMobile.style.display = 'none';
    document.body.style.overflowY = 'auto'; // disable scrolling in menu
  } else {
    mobileMenuBg.style.display = 'block';
    scrollLine.style.display = 'none';
    menuMobile.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  }
}
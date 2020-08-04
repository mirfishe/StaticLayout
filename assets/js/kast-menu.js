// Main Menu
const toggler = $('#menu-button');
const menuElement = $('#nav-content');
const menuContainer = $('#nav-container');
const bg = $('#background');
const body = $('body');
const windowjq = $(window);

const desktopMinWidth = 1024;

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
function mobileMenu() {
  toggler.click(function() {
    toggler.toggleClass('active');
    body.toggleClass('body-menu-active');
    menuElement.toggleClass('active');
    menuContainer.toggleClass('active');
  });

  bg.click(function() {
    toggler.toggleClass('active');
    body.toggleClass('body-menu-active');
    menuElement.toggleClass('active');
    menuContainer.toggleClass('active');
  });
};
// init mobile menu
mobileMenu();

// CLOSE MENU WHEN CLICK WHAT IS KAST
function closeMobileMenu() {
  if (toggler.hasClass('active')) {
    toggler.removeClass('active')
  }
  if (menuElement.hasClass('active')) {
    menuElement.removeClass('active')
  }
  if (menuContainer.hasClass('active')) {
    menuContainer.removeClass('active')
  }
  if (body.hasClass('body-menu-active')) {
    body.removeClass('body-menu-active')
  }
};
$('#what-is-link').click(function() {
  closeMobileMenu();
});

// reinit on window resize
windowjq.resize(function(){
  if (windowjq.width() >= desktopMinWidth) {
    closeMobileMenu();
  }
});



// Fixed header background
window.onscroll = function() {fixedHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop + 100;
function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('.menu-button').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('.menu-button').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}


// Smooth scroll to top
$('#scroll-top').click(function(){
  scrollToTop();
  return false
});
function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position){
    window.scrollBy(0,-Math.max(10, Math.floor(position / 10)));
    scrollAnimation=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(scrollAnimation);
}
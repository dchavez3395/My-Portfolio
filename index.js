
//preloader

$(window).on('load',function(){
  $('.preloader').addClass('complete')
});



// sticky nav
$(document).ready(function() {
  $(window).on('scroll', function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $('.sticky').addClass("stickyadd");
    } else {
      $('.sticky').removeClass("stickyadd");
    }
  });


  // Hidden //
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar-menu');
  const navLogo = document.querySelector('#navbar-logo');

  //Display mobile menu//

  const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  menu.addEventListener('click', mobileMenu);

  // Show active menu when scrolling //

  const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');

    let scrollPos = window.scrollY;


    // adds the highlight to menu item//

    if (window.innerWidth > 940 && scrollPos < 500) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');

      return;

    } else if (window.innerWidth > 960 && scrollPos < 980) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      skillsMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1300) {
      skillsMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      projectsMenu.classList.remove('highlight')
      return;
    }else if(window.innerWidth > 960 && scrollPos < 2100){
      projectsMenu.classList.add('highlight');
      skillsMenu.classList.remove('highlight');
      contactMenu.classList.remove('highlight')
      return;
    } else if (window.innerWidth > 960 && scrollPos < 3500) {
      contactMenu.classList.add('highlight');
      projectsMenu.classList.remove('highlight');
      return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };


  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);

//typing animation
  const typed = new Typed('.element', {
    strings: ['Daniel Chavez', 'a  Web Developer', 'a Coffee Lover'],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
  });

//scroll animations


$(window).scroll(function() {

    if ($(this).scrollTop() > 50){
        $('.profile').addClass("animate__fadeInLeft");
        $('.about-p').addClass('animate__fadeInRight');
    }
    else{
      $('.profile').removeClass("animate__fadeInLeft");
      $('.about-p').removeClass('animate__fadeInRight');
    }
});



  //progress bars

  const waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
      const p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", 'width:95%;transition:1s all');
      p[1].setAttribute("style", 'width:95%;transition:1.5s all');
      p[2].setAttribute("style", 'width:95%;transition:1.7s all');
      p[3].setAttribute("style", 'width:80%;transition:2s all');
      p[4].setAttribute("style", 'width:85%;transition:2.3s all');
      p[5].setAttribute("style", 'width:85%;transition:1.4s all');
      p[6].setAttribute("style", 'width:80%;transition:2.5s all');
    },
    offset: '90%'
  });
});

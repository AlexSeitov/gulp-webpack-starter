$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.scroll-to-top').on('click', function (e) {
    e.preventDefault();

    $('html, body').scrollTop(0);
  });
});

//----------------------------------------------------------
// vanilla js method

// const toTopBtn = document.querySelector('.scroll-to-top');

// window.addEventListener('scroll', () => {
// 	if (window.pageYOffset > 500) {
// 		toTopBtn.classList.add('active');
// 	} else {
// 		toTopBtn.classList.remove('active');
// 	}
// });

const navToggle = document.querySelector('.nav-toggle');
const navLinks =document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

$(function() {
//--------To Top Button-------
$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });

});

// Movimiento Scroll al clickear Menú Navbar

$("a.link").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1800, function () {

      window.location.hash = hash;
    });
  }
});


// Carrusel con controlador de intervalo
$(document).ready(function () {
  $('.carousel').carousel({
    interval: 500,
    pause: "false"
  });
});



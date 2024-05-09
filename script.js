$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        cssEase: 'linear'
    });
});

function mostrarContenido(seccion) {
    // Oculta todas las secciones
    document.querySelectorAll('.contenido-seccion').forEach(contenido => {
        contenido.classList.remove('contenido-activo');
    });

    // Muestra la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccion);
    seccionSeleccionada.classList.add('contenido-activo');

    // Obtiene el primer h1 dentro de la sección y desplaza hacia él
    var primerH1 = seccionSeleccionada.querySelector('pre');
    
    if (primerH1) {
        primerH1.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });
    }
}


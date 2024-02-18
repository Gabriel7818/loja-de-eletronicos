document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o carrossel de destaques
    const destaquesSlider = tns({
        container: '.destaques-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        nav: false
    });
});

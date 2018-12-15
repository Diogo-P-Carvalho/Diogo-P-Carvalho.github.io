$(document).ready(function(){

    /*navbar effect*/
    var navbarCollapse = function(){
        if($('#nav').offset().top > 100){
            $('#nav').addClass('navbar-shrink');
        }
        else{
            $('#nav').removeClass('navbar-shrink');
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);

    /*icons tooltip*/
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    /*close responsive menu after click*/
    $('.js-close-trigger').click(function(){
        $('.navbar-collapse').collapse('hide');
    });

    /*scrollspy*/
    $('body').scrollspy({
        target: '#nav',
        offset: 57
    });

    /*smoth scroll*/
    var root = $('html, body');

    $('a[href^="#"]').click(function () {
        root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 56
        }, 1000);
    
        return false;
    });
    
    /*scroll icons effect*/
    ScrollReveal().reveal('.sr-icon-1', {
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700',
    });
    ScrollReveal().reveal('.sr-icon-2', {
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-3', {
        delay: 400,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-4', {
        delay: 500,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-5', {
        delay: 600,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-6', {
        delay: 700,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-7', {
        delay: 800,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-8', {
        delay: 900,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-9', {
        delay: 1000,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-10', {
        delay: 1100,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-11', {
        delay: 1200,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-12', {
        delay: 1300,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-13', {
        delay: 1400,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-14', {
        delay: 1500,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-15', {
        delay: 1600,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-16', {
        delay: 1700,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-17', {
        delay: 1800,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });
    ScrollReveal().reveal('.sr-icon-18', {
        delay: 1900,
        easing: 'cubic-bezier(0.5, 0, 1, 1)',
        duration: '700'
    });

    ScrollReveal().reveal('.sr-contact-1', {
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
        duration: '500'
    });
    ScrollReveal().reveal('.sr-contact-2', {
        delay: 400,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
        duration: '1000'
    });
    ScrollReveal().reveal('.sr-contact-3', {
        delay: 800,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
        duration: '1500'
    });
});

    

